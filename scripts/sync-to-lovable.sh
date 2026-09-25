#!/usr/bin/env bash
# Push this repo's committed code into Lovable's GitHub repo, so the Lovable
# editor (and the ZIP exports downloaded from it) start from what is live.
#
# Lovable edits UtakarshBluMacawTech/macaw-bloom-renew and syncs its `main`
# both ways: a commit pushed there shows up in the Lovable editor. Run this
# after merging anything here that did not come from a Lovable export (SEO,
# performance, accessibility fixes...), or the next export will revert it.
#
#   npm run sync:lovable              # dry run: clone, apply, show what changes
#   npm run sync:lovable -- --push    # also commit and push to Lovable's main
#   npm run sync:lovable -- --push --ported=<lovable sha>
#       after porting that export and changing some of the files it touched
#       (e.g. restoring a publish date): pushes only if Lovable's main is
#       still exactly <sha>, so nothing newer can be overwritten.
#
# It refuses to push while a file Lovable changed since the last sync differs
# here, since replacing the tree would drop a Lovable edit nobody has ported
# yet. Port the latest export first, or pass --force after reading the files it
# lists. The very first run needs --baseline (there is no earlier sync commit).
set -euo pipefail

LOVABLE_REPO="${LOVABLE_REPO:-https://github.com/UtakarshBluMacawTech/macaw-bloom-renew.git}"
MARKER="Sync from react-blumacaw@"
# Left as Lovable has them: its committed .env. This repo is public and CI
# supplies those values as secrets, so it has no .env to copy.
LOVABLE_ONLY=(.env)
# Never copied to Lovable: deploy config only this repo runs. A workflow there
# would run on every Lovable commit in Utakarsh's account and fail to deploy.
REACT_ONLY=(.github .firebaserc firebase.json)

push=false force=false baseline=false ported=""
for arg in "$@"; do
  case "$arg" in
    --push) push=true ;;
    --force) force=true ;;
    --baseline) baseline=true ;;
    --ported=*) ported="${arg#--ported=}" ;;
    *) echo "unknown option: $arg" >&2; exit 2 ;;
  esac
done

root=$(git rev-parse --show-toplevel)
cd "$root"
if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree has uncommitted changes. Only committed files are synced; commit or stash first." >&2
  exit 1
fi
sha=$(git rev-parse --short HEAD)
subject=$(git log -1 --format=%s)
branch=$(git rev-parse --abbrev-ref HEAD)
[ "$branch" = main ] || echo "note: syncing branch '$branch', not main" >&2

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
git clone --quiet --branch main "$LOVABLE_REPO" "$work/lovable"
mkdir "$work/react"
git archive HEAD | tar -x -C "$work/react"
cd "$work/lovable"

skipped() {
  local p
  for p in "${LOVABLE_ONLY[@]}" "${REACT_ONLY[@]}"; do
    case "$1" in "$p" | "$p"/*) return 0 ;; esac
  done
  return 1
}

last=$(git log --format=%H --grep="^$MARKER" -1)
if [ -n "$ported" ]; then
  head=$(git rev-parse HEAD)
  case "$head" in
    "$ported"*) echo "Lovable's main is $ported, the export that was ported: its edits are all in this repo." ;;
    *)
      echo "Lovable's main has moved past $ported since that export:" >&2
      git log --oneline "$ported"..HEAD 2>/dev/null | head -20 >&2 || git log --oneline -5 >&2
      echo "Port the newer export first." >&2
      exit 1
      ;;
  esac
elif [ -n "$last" ]; then
  # A file Lovable changed since the last sync is safe to overwrite only if
  # this repo already has Lovable's version of it, i.e. the export was ported.
  unported=()
  while IFS= read -r f; do
    skipped "$f" && continue
    if [ -e "$f" ] || [ -e "$work/react/$f" ]; then
      cmp -s "$f" "$work/react/$f" 2>/dev/null || unported+=("$f")
    fi
  done < <(git diff --name-only "$last" HEAD)
  if [ ${#unported[@]} -gt 0 ]; then
    echo "Lovable changed ${#unported[@]} file(s) since the last sync ($(git log -1 --format='%h %cs' "$last")) that differ here:" >&2
    printf '  %s\n' "${unported[@]}" | head -30 >&2
    git log --oneline "$last"..HEAD | head -10 >&2
    if ! $force; then
      echo "Port the latest Lovable export first, then re-run. If the differences are deliberate (e.g. a" >&2
      echo "placeholder image replaced by the real file), re-run with --force; it overwrites Lovable's version." >&2
      exit 1
    fi
  fi
elif ! $baseline; then
  echo "No earlier sync commit in Lovable's repo. For the first sync, check that Lovable's main matches" >&2
  echo "the latest export you ported, then re-run with --baseline." >&2
  exit 1
fi

excludes=(--exclude=/.git)
for p in "${LOVABLE_ONLY[@]}" "${REACT_ONLY[@]}"; do excludes+=("--exclude=/$p"); done
rsync -a --delete "${excludes[@]}" "$work/react/" "$work/lovable/"

git add -A
if git diff --cached --quiet; then
  echo "Lovable's main already matches $sha — nothing to sync."
  exit 0
fi
echo "Changes for Lovable's main (react-blumacaw@$sha):"
git diff --cached --stat | tail -40

if ! $push; then
  echo
  echo "Dry run. Re-run with --push to commit and push this to Lovable."
  exit 0
fi

message="$MARKER$sha

$subject

Pushed by scripts/sync-to-lovable.sh from adminblumacaw/react-blumacaw so that
Lovable edits start from the code that is live on blumacawtech.com."
[ -n "${SYNC_COMMIT_TRAILER:-}" ] && message="$message

$SYNC_COMMIT_TRAILER"
git commit --quiet -m "$message"
git push --quiet origin HEAD:main
echo "Pushed $(git rev-parse --short HEAD) to Lovable's main. Lovable picks it up within a minute or so."
