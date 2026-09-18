# Welcome to your Lovable project

## How this site ships (read before editing)

- **Production** is blumacawtech.com, deployed from
  [adminblumacaw/react-blumacaw](https://github.com/adminblumacaw/react-blumacaw) `main`
  (Firebase Hosting). Lovable's own publish is not the live site.
- **Lovable** edits [UtakarshBluMacawTech/macaw-bloom-renew](https://github.com/UtakarshBluMacawTech/macaw-bloom-renew).
  Updates move to production as ZIP exports of that repo, which are checked
  (`npm run check:export`, the build, `npm run check:a11y`) before deploy.
- **Changes made directly in react-blumacaw** are pushed back into Lovable's
  repo with `npm run sync:lovable -- --push`, so Lovable always edits the live code.

When editing in Lovable, keep what the live site depends on:

- New pages need a route in `src/App.tsx` **and** `src/entry-server.tsx`, and an entry in
  `scripts/prerender.mjs`. The build prerenders every route for search and AI crawlers.
- Search titles are 60 characters at most. If a headline is longer, add a short one to
  `src/lib/seoTitles.ts`; the build fails otherwise.
- Keep `SEOHead`'s JSON-LD and head collector, `hydrateRoot` in `src/main.tsx`, the
  click-to-load hero video (`YouTubeFacade`) and the hero without a fade-in animation.
- Use the colour tokens in `src/index.css`. Teal (`--accent`) is a fill colour; teal text uses
  `text-accent`, which maps to a darker teal that meets contrast rules.
- Images must be real files in `src/assets` (not `.asset.json` placeholders).

## Project info

**URL**: https://lovable.dev/projects/75c72a9f-955d-44bc-afc1-0cd6e66333e9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/75c72a9f-955d-44bc-afc1-0cd6e66333e9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/75c72a9f-955d-44bc-afc1-0cd6e66333e9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
