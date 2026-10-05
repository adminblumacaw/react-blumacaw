// The BMT Public API reference page. See index.html for why this is a frame.
//
// The link from the app's Settings → Public API page carries a signed token
// after the "#", so it never reaches a server log or another site's Referer
// header. This sends it to the app, which checks the signature, the expiry and
// that the store still has Public API access, and answers with the reference.
(function () {
  "use strict";

  // Where each app lives. A link names its app ("app=staging"); anything else
  // is production. Only these origins are ever asked, so a crafted link cannot
  // point the page at someone else's server.
  var APPS = {
    production: "https://app.blumacawtech.com",
    staging: "https://staging-shopify-app-cr-808779870972.us-central1.run.app",
  };

  var GET_A_LINK =
    "In Shopify admin, open BMT, go to Settings → Public API and choose Open API reference.";

  var MESSAGES = {
    missing: {
      title: "Open this page from the BMT app",
      body: "The Public API reference is for stores that use the Public API. " + GET_A_LINK,
    },
    link_invalid: {
      title: "This link isn't valid",
      body: "It may have been copied incompletely. " + GET_A_LINK,
    },
    link_expired: {
      title: "This link has expired",
      body: "Links to the reference last 7 days. " + GET_A_LINK,
    },
    no_access: {
      title: "This store no longer has Public API access",
      body: "The store owner can see why in BMT under Settings → Public API.",
    },
    rate_limited: {
      title: "Too many requests",
      body: "Wait a minute, then try again.",
      retry: true,
    },
    failed: {
      title: "Couldn't load the reference",
      body: "Check your connection, then try again.",
      retry: true,
    },
  };

  var main = document.getElementById("main");
  var notice = document.getElementById("notice");
  var noticeTitle = document.getElementById("notice-title");
  var noticeBody = document.getElementById("notice-body");
  var noticeAction = document.getElementById("notice-action");
  var meta = document.getElementById("meta");
  var toc = document.getElementById("toc");
  var reference = document.getElementById("reference");

  document.getElementById("reload").addEventListener("click", load);
  window.addEventListener("hashchange", load);

  function show(kind) {
    var message = MESSAGES[kind] || MESSAGES.failed;
    noticeTitle.textContent = message.title;
    noticeBody.textContent = message.body;
    noticeAction.hidden = !message.retry;
    notice.hidden = false;
    // A link changed in place (#) must not leave the previous answer in the page.
    toc.textContent = "";
    reference.textContent = "";
    toc.hidden = true;
    reference.hidden = true;
    meta.hidden = true;
    main.setAttribute("aria-busy", "false");
    document.title = message.title + " · BMT";
  }

  function slug(text, used) {
    var base = text
      .toLowerCase()
      .replace(/[`'"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section";
    var id = base;
    for (var n = 2; used[id]; n++) id = base + "-" + n;
    used[id] = true;
    return id;
  }

  // Headings get ids and a contents list; wide tables scroll inside their own
  // box instead of widening the page on a phone.
  function decorate() {
    var used = {};
    var list = document.createElement("ol");
    var headings = reference.querySelectorAll("h2, h3");
    for (var i = 0; i < headings.length; i++) {
      var heading = headings[i];
      heading.id = slug(heading.textContent, used);
      var item = document.createElement("li");
      item.className = heading.tagName === "H3" ? "toc-sub" : "toc-main";
      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      // In-page links must not replace the hash that carries the token.
      link.addEventListener("click", jumpTo(heading));
      item.appendChild(link);
      list.appendChild(item);
    }
    toc.textContent = "";
    var label = document.createElement("p");
    label.className = "toc-label";
    label.textContent = "On this page";
    toc.appendChild(label);
    toc.appendChild(list);

    var tables = reference.querySelectorAll("table");
    for (var j = 0; j < tables.length; j++) {
      var wrap = document.createElement("div");
      wrap.className = "table-wrap";
      tables[j].parentNode.insertBefore(wrap, tables[j]);
      wrap.appendChild(tables[j]);
    }
  }

  function jumpTo(heading) {
    return function (event) {
      event.preventDefault();
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  function load() {
    var params = new URLSearchParams(window.location.hash.slice(1));
    var token = params.get("t");
    if (!token) return show("missing");
    var app = APPS[params.get("app")] || APPS.production;

    main.setAttribute("aria-busy", "true");
    noticeTitle.textContent = "Loading the reference…";
    noticeBody.textContent = "";
    noticeAction.hidden = true;

    fetch(app + "/api/public/reference", {
      headers: { Authorization: "Bearer " + token },
      cache: "no-store",
      credentials: "omit",
      referrerPolicy: "no-referrer",
    })
      .then(function (response) {
        return response.json().then(
          function (body) { return { status: response.status, body: body }; },
          function () { return { status: response.status, body: null }; }
        );
      })
      .then(function (result) {
        var data = result.body && result.body.data;
        if (result.status !== 200 || !data || typeof data.html !== "string") {
          var code = result.body && result.body.error && result.body.error.code;
          return show(MESSAGES[code] ? code : "failed");
        }
        // The app renders this from its own Markdown; nothing in it comes
        // from a store or a visitor, and this page's policy runs no script it
        // could carry.
        reference.innerHTML = data.html;
        decorate();
        var expires = new Date(data.expires_at);
        meta.textContent =
          data.shop + " · link valid until " +
          expires.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
        meta.hidden = false;
        notice.hidden = true;
        toc.hidden = false;
        reference.hidden = false;
        main.setAttribute("aria-busy", "false");
        document.title = "Public API reference · BMT";
      })
      .catch(function () {
        show("failed");
      });
  }

  load();
})();
