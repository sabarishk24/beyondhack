/* Care Verified – one shared header for every page */
(function () {
  var PAGES = [
    { href: "index.html",     label: "Find care" },
    { href: "community.html", label: "Community desk" }
  ];
  var user = null;
  try { user = JSON.parse(localStorage.getItem("cv-user")); } catch (e) {}
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  // fonts (Tamil glyphs + icons)
  var f = document.createElement("link");
  f.rel = "stylesheet";
  f.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap";
  document.head.appendChild(f);

  var css = [
    ".cv-h{position:sticky;top:0;z-index:9999;background:rgba(255,255,255,.97);backdrop-filter:blur(8px);border-bottom:1px solid #dfe5e3;font-family:'Plus Jakarta Sans','Noto Sans Tamil',system-ui,sans-serif;box-shadow:0 1px 8px rgba(0,0,0,.04)}",
    ".cv-h *{box-sizing:border-box}",
    ".cv-in{max-width:1280px;margin:0 auto;height:68px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:16px}",
    ".cv-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:#005c55}",
    ".cv-logo{width:38px;height:38px;border-radius:10px;background:#0f766e;color:#fff;display:flex;align-items:center;justify-content:center}",
    ".cv-bn{display:flex;flex-direction:column;line-height:1.1}",
    ".cv-bn b{font-size:17px;font-weight:700;letter-spacing:-.01em;color:#005c55}",
    ".cv-bn small{font-size:11px;font-weight:500;color:#5b6b68;margin-top:3px}",
    ".cv-nav{display:flex;align-items:center;gap:6px}",
    ".cv-nav a{padding:9px 16px;border-radius:10px;font-size:14px;font-weight:600;color:#3e4947;text-decoration:none;transition:background .15s,color .15s}",
    ".cv-nav a:hover{background:#eef3f2;color:#131b2e}",
    ".cv-nav a.on{background:#0f766e;color:#fff}",
    ".cv-right{display:flex;align-items:center;gap:10px}",
    ".cv-lang{display:flex;background:#eef3f2;border-radius:10px;padding:3px}",
    ".cv-lang button{border:0;background:transparent;padding:7px 12px;border-radius:8px;font:600 13px 'Plus Jakarta Sans','Noto Sans Tamil',sans-serif;color:#3e4947;cursor:pointer}",
    ".cv-lang button.on{background:#fff;color:#005c55;box-shadow:0 1px 3px rgba(0,0,0,.12)}",
    ".cv-btn{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 16px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap}",
    ".cv-sos{background:#ffdad6;color:#93000a}",
    ".cv-sos:hover{background:#ffc9c3}",
    ".cv-sign{background:#005c55;color:#fff}",
    ".cv-sign:hover{background:#0f766e}",
    ".cv-sign.on{outline:2px solid #9cf2e8}",
    ".cv-avatar{width:42px;height:42px;border-radius:50%;background:#005c55;color:#fff;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border:2px solid #fff;box-shadow:0 0 0 2px #9cf2e8;transition:transform .15s,box-shadow .15s}",
    ".cv-avatar:hover{background:#0f766e;transform:scale(1.05)}",
    ".cv-avatar.on{box-shadow:0 0 0 3px #0f766e}",
    ".cv-burger{display:none;border:1px solid #dfe5e3;background:#fff;border-radius:10px;width:42px;height:42px;cursor:pointer;align-items:center;justify-content:center}",
    ".cv-panel{display:none;border-top:1px solid #dfe5e3;padding:12px 24px 16px;background:#fff}",
    ".cv-panel a{display:block;padding:12px 8px;font-weight:600;font-size:15px;color:#131b2e;text-decoration:none;border-radius:8px}",
    ".cv-panel a.on{background:#e6f4f1;color:#005c55}",
    ".cv-panel .cv-row{display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap}",
    "@media(max-width:900px){.cv-nav,.cv-right .cv-btn,.cv-right .cv-lang{display:none}.cv-right .cv-avatar{width:38px;height:38px}.cv-burger{display:flex}.cv-panel.open{display:block}.cv-in{padding:0 16px}}",
    "html[lang='ta'] .cv-bn small{display:none}",
    "html[lang='ta'] body :not(.material-symbols-outlined){font-family:'Noto Sans Tamil','Plus Jakarta Sans','IBM Plex Sans',system-ui,sans-serif}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var shield = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>';
  var links = PAGES.map(function (p) {
    return '<a href="' + p.href + '"' + (p.href === here ? ' class="on"' : '') + '>' + p.label + '</a>';
  }).join("");
  var signOn = here === "signin.html" ? " on" : "";
  var profOn = here === "account.html" ? " on" : "";
  var personSvg = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>';
  var authBtn = user
    ? '<a class="cv-avatar' + profOn + '" href="account.html" title="My profile" aria-label="My profile">' + personSvg + '</a>'
    : '<a class="cv-btn cv-sign' + signOn + '" href="signin.html">Sign in</a>';
  var authLink = user
    ? '<a href="account.html"' + (profOn ? ' class="on"' : '') + '>My profile</a>'
    : '<a href="signin.html"' + (signOn ? ' class="on"' : '') + '>Sign in</a>';
  var langBtns = '<div class="cv-lang" data-i18n-skip="1"><button type="button" data-l="en">English</button><button type="button" data-l="ta">தமிழ்</button></div>';

  var h = document.createElement("header");
  h.className = "cv-h";
  h.innerHTML =
    '<div class="cv-in">' +
      '<a class="cv-brand" href="index.html"><span class="cv-logo">' + shield + '</span>' +
        '<span class="cv-bn"><b>Care Verified</b><small>கேர் வெரிஃபைட்</small></span></a>' +
      '<nav class="cv-nav">' + links + '</nav>' +
      '<div class="cv-right">' + langBtns +
        '<a class="cv-btn cv-sos" href="tel:108">Emergency 108</a>' +
        authBtn +
        '<button class="cv-burger" type="button" aria-label="Menu" id="cv-burger"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#131b2e" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '</div>' +
    '</div>' +
    '<div class="cv-panel" id="cv-panel">' + links +
      authLink +
      '<div class="cv-row">' + langBtns + '<a class="cv-btn cv-sos" href="tel:108" style="display:inline-flex">Emergency 108</a></div>' +
    '</div>';
  document.body.insertBefore(h, document.body.firstChild);

  document.getElementById("cv-burger").addEventListener("click", function () {
    document.getElementById("cv-panel").classList.toggle("open");
  });
  h.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-l]");
    if (b && window.cvSetLang) window.cvSetLang(b.getAttribute("data-l"));
  });
})();
