(function () {
  var introBtn = document.querySelector(".intro-btn");
  var taskButtons = document.querySelectorAll(".task-btn");
  var sectionLinks = document.querySelectorAll(".section-link");
  var taskNavItems = document.querySelectorAll(".task-nav-item");
  var panels = document.querySelectorAll(".task-panel");
  var taskHeader = document.getElementById("task-header");
  var taskTitle = document.getElementById("task-title");
  var content = document.getElementById("main-content");

  var taskColors = {
    "busy-board": "#ec4899",
    "scientific-reasoning": "#f97316",
    "crafting": "#eab308",
    "alternate-uses": "#06b6d4"
  };

  function scrollToSection(taskId, sectionId) {
    var panel = document.querySelector('.task-panel[data-task="' + taskId + '"]');
    if (!panel) {
      return;
    }

    var section = panel.querySelector('[data-section="' + sectionId + '"]');
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function setActiveSection(taskId, sectionId) {
    sectionLinks.forEach(function (link) {
      var isMatch = link.dataset.task === taskId && link.dataset.section === sectionId;
      link.classList.toggle("is-active", isMatch);
    });
  }

  function showView(viewId, taskName, sectionId) {
    if (introBtn) {
      introBtn.classList.toggle("is-active", viewId === "intro");
    }

    taskNavItems.forEach(function (item) {
      var isActive = item.dataset.task === viewId;
      item.classList.toggle("is-active", isActive);

      var btn = item.querySelector(".task-btn");
      if (btn) {
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-expanded", isActive ? "true" : "false");
      }
    });

    panels.forEach(function (panel) {
      panel.classList.toggle("is-visible", panel.dataset.task === viewId);
    });

    var isIntro = viewId === "intro";

    if (taskHeader) {
      taskHeader.hidden = isIntro;
    }

    if (content) {
      content.classList.toggle("content--intro", isIntro);
    }

    if (taskTitle && !isIntro && taskName) {
      taskTitle.textContent = taskName;
      taskTitle.style.color = taskColors[viewId] || "";
    }

    if (!isIntro && sectionId) {
      window.requestAnimationFrame(function () {
        scrollToSection(viewId, sectionId);
      });
      setActiveSection(viewId, sectionId);
    } else if (!isIntro) {
      sectionLinks.forEach(function (link) {
        link.classList.remove("is-active");
      });
    } else {
      sectionLinks.forEach(function (link) {
        link.classList.remove("is-active");
      });
    }
  }

  if (introBtn) {
    introBtn.addEventListener("click", function () {
      showView("intro");
    });
  }

  taskButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showView(btn.dataset.task, btn.dataset.taskTitle);
    });
  });

  sectionLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      showView(link.dataset.task, link.dataset.taskTitle, link.dataset.section);
    });
  });

  if (introBtn && introBtn.classList.contains("is-active")) {
    showView("intro");
  } else if (taskButtons.length > 0) {
    var initialTask = document.querySelector(".task-btn.is-active");
    if (initialTask) {
      showView(initialTask.dataset.task, initialTask.dataset.taskTitle);
    }
  }
})();
