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

  document.querySelectorAll(".task-nav-item").forEach(function (item) {
    var toggle = item.querySelector(".task-nav-toggle");
    var menu = item.querySelector(".task-section-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var willOpen = !item.classList.contains("is-open");
      item.classList.toggle("is-open", willOpen);
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");

      if (willOpen) {
        menu.removeAttribute("hidden");
      } else {
        menu.setAttribute("hidden", "");
      }
    });
  });
})();
