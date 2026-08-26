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

  function normalizePath(path) {
    if (!path) return "/";
    return path.replace(/\/index\.html$/i, "").replace(/\/$/, "") || "/";
  }

  function setMenuOpen(item, toggle, menu, willOpen) {
    item.classList.toggle("is-open", willOpen);
    toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    if (willOpen) {
      menu.removeAttribute("hidden");
    } else {
      menu.setAttribute("hidden", "");
    }
  }

  document.querySelectorAll(".task-nav-item").forEach(function (item) {
    var toggle = item.querySelector(".task-nav-toggle");
    var menu = item.querySelector(".task-section-menu");
    var taskLink = item.querySelector(".task-btn");
    if (!toggle || !menu || !taskLink) return;

    function toggleMenu() {
      setMenuOpen(item, toggle, menu, !item.classList.contains("is-open"));
    }

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu();
    });

    taskLink.addEventListener("click", function (event) {
      var currentPath = normalizePath(window.location.pathname);
      var targetPath = normalizePath(taskLink.pathname);
      if (currentPath === targetPath) {
        event.preventDefault();
        toggleMenu();
      }
    });
  });

  document.querySelectorAll(".video-embed--youtube").forEach(function (embed) {
    var facade = embed.querySelector(".video-facade");
    var videoId = embed.getAttribute("data-youtube-id");
    if (!facade || !videoId) return;

    facade.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(videoId) +
        "?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&color=white&cc_load_policy=0";
      iframe.title = "Task trailer";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "100%");
      embed.replaceChildren(iframe);
    });
  });
})();
