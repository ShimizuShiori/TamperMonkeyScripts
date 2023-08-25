// ==UserScript==
// @name         AutoRefreshGlowDev
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Refresh GLOW dev page if source is changed
// @author       Felix.Fei
// @match        */Glow/dev/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.localhost
// @grant        none
// @updateURL    https://github.com/ShimizuShiori/TamperMonkeyScripts/edit/main/Wtg/AutoRefreshGlowDev.user.js
// @downloadURL  https://github.com/ShimizuShiori/TamperMonkeyScripts/edit/main/Wtg/AutoRefreshGlowDev.user.js
// ==/UserScript==

(function () {
  "use strict";

  function getWatchedUri() {
    const url = window.location.href;
    if (url.endsWith("Glow/dev/logs")) return "/Glow/odata/Logs/Logs";
    return url;
  }

  async function getContentLength() {
    let res = await fetch(getWatchedUri());
    return (await res.text()).length;
  }

  document.querySelector("h1").innerText += " @ " + new Date();

  getContentLength().then((currentContentLength) => {
    setInterval(() => {
      getContentLength()
        .then((len) => {
          return len === currentContentLength;
        })
        .then((b) => {
          if (!b) {
            window.location.href = window.location.href;
          }
        });
    }, 10000);
  });
})();
