(function () {
  var sectionLinks = document.querySelectorAll(".section-link");

  function setActiveFromHash() {
    var hash = window.location.hash.replace("#", "");
    sectionLinks.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var linkHash = href.split("#")[1] || "";
      link.classList.toggle("is-active", hash !== "" && linkHash === hash);
    });
  }

  sectionLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      window.setTimeout(setActiveFromHash, 0);
    });
  });

  window.addEventListener("hashchange", setActiveFromHash);
  setActiveFromHash();
})();
