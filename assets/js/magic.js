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

  var mobileToggle = document.querySelector(".mobile-menu-toggle");
  var sidebar = document.querySelector(".sidebar");
  var overlay = document.querySelector(".nav-overlay");
  var mobileMq = window.matchMedia("(max-width: 768px)");

  function setMobileNavOpen(open, options) {
    options = options || {};
    if (!mobileToggle || !sidebar) return;

    if (!mobileMq.matches) {
      document.body.classList.remove("nav-open");
      mobileToggle.setAttribute("aria-expanded", "false");
      sidebar.removeAttribute("aria-hidden");
      if ("inert" in sidebar) sidebar.inert = false;
      return;
    }

    document.body.classList.toggle("nav-open", open);
    mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
    sidebar.setAttribute("aria-hidden", open ? "false" : "true");
    if ("inert" in sidebar) sidebar.inert = !open;

    if (!open && options.focusToggle) {
      mobileToggle.focus();
    }
  }

  if (mobileToggle && sidebar) {
    setMobileNavOpen(false);

    mobileToggle.addEventListener("click", function () {
      setMobileNavOpen(!document.body.classList.contains("nav-open"));
    });

    if (overlay) {
      overlay.addEventListener("click", function () {
        setMobileNavOpen(false, { focusToggle: true });
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
        setMobileNavOpen(false, { focusToggle: true });
      }
    });

    sidebar.querySelectorAll(".section-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (mobileMq.matches) {
          setMobileNavOpen(false);
        }
      });
    });

    function onBreakpointChange() {
      setMobileNavOpen(false);
    }

    if (typeof mobileMq.addEventListener === "function") {
      mobileMq.addEventListener("change", onBreakpointChange);
    } else if (typeof mobileMq.addListener === "function") {
      mobileMq.addListener(onBreakpointChange);
    }
  }

  var youtubeApiReady = null;

  function whenYouTubeApiReady(callback) {
    if (window.YT && window.YT.Player) {
      callback();
      return;
    }
    if (!youtubeApiReady) {
      youtubeApiReady = [];
      var previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (typeof previous === "function") previous();
        youtubeApiReady.forEach(function (fn) {
          fn();
        });
        youtubeApiReady = null;
      };
      if (!document.getElementById("youtube-iframe-api")) {
        var script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
    }
    youtubeApiReady.push(callback);
  }

  function formatTime(totalSeconds) {
    var seconds = Math.max(0, Math.floor(totalSeconds || 0));
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
  }

  function setupYouTubePlayer(embed) {
    var facade = embed.querySelector(".video-facade");
    var host = embed.querySelector(".video-player-host");
    var chrome = embed.querySelector(".video-chrome");
    var centerBtn = embed.querySelector(".video-chrome-center");
    var toggleBtn = embed.querySelector(".video-chrome-toggle");
    var track = embed.querySelector(".video-chrome-track");
    var fill = embed.querySelector(".video-chrome-track-fill");
    var timeLabel = embed.querySelector(".video-chrome-time");
    var videoId = embed.getAttribute("data-youtube-id");
    if (!facade || !host || !chrome || !videoId) return;

    var player = null;
    var progressTimer = null;
    var seeking = false;

    function setPlayingUi(isPlaying) {
      embed.classList.toggle("is-playing", isPlaying);
      embed.classList.toggle("is-paused", !isPlaying);
      toggleBtn.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
      centerBtn.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
    }

    function updateProgress() {
      if (!player || typeof player.getCurrentTime !== "function") return;
      var current = player.getCurrentTime() || 0;
      var duration = player.getDuration() || 0;
      var percent = duration ? (current / duration) * 100 : 0;
      if (!seeking) {
        fill.style.width = percent + "%";
        track.setAttribute("aria-valuenow", String(Math.round(percent)));
      }
      timeLabel.textContent =
        formatTime(current) + (duration ? " / " + formatTime(duration) : "");
    }

    function startProgressTimer() {
      window.clearInterval(progressTimer);
      progressTimer = window.setInterval(updateProgress, 250);
    }

    function stopProgressTimer() {
      window.clearInterval(progressTimer);
      progressTimer = null;
    }

    function togglePlayback() {
      if (!player || typeof player.getPlayerState !== "function") return;
      if (player.getPlayerState() === window.YT.PlayerState.PLAYING) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }

    function seekFromEvent(event) {
      if (!player || typeof player.getDuration !== "function") return;
      var rect = track.getBoundingClientRect();
      var ratio = rect.width
        ? Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
        : 0;
      var duration = player.getDuration() || 0;
      player.seekTo(duration * ratio, true);
      fill.style.width = ratio * 100 + "%";
      updateProgress();
    }

    embed.addEventListener("mouseenter", function () {
      embed.classList.add("is-hovering");
    });

    embed.addEventListener("mouseleave", function () {
      embed.classList.remove("is-hovering");
      seeking = false;
    });

    centerBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      togglePlayback();
    });

    toggleBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      togglePlayback();
    });

    track.addEventListener("pointerdown", function (event) {
      seeking = true;
      seekFromEvent(event);
      track.setPointerCapture(event.pointerId);
    });

    track.addEventListener("pointermove", function (event) {
      if (!seeking) return;
      seekFromEvent(event);
    });

    track.addEventListener("pointerup", function () {
      seeking = false;
      updateProgress();
    });

    track.addEventListener("pointercancel", function () {
      seeking = false;
    });

    chrome.addEventListener("click", function (event) {
      if (event.target === chrome) {
        togglePlayback();
      }
    });

    facade.addEventListener("click", function () {
      if (player) return;

      facade.hidden = true;
      facade.setAttribute("aria-hidden", "true");
      host.hidden = false;
      chrome.hidden = false;
      embed.classList.add("is-active", "is-hovering", "is-paused");

      whenYouTubeApiReady(function () {
        player = new window.YT.Player(host, {
          videoId: videoId,
          width: "100%",
          height: "100%",
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            cc_load_policy: 0,
            origin: window.location.origin
          },
          events: {
            onReady: function (event) {
              event.target.playVideo();
              updateProgress();
            },
            onStateChange: function (event) {
              var state = event.data;
              if (state === window.YT.PlayerState.PLAYING) {
                setPlayingUi(true);
                startProgressTimer();
              } else if (
                state === window.YT.PlayerState.PAUSED ||
                state === window.YT.PlayerState.ENDED
              ) {
                setPlayingUi(false);
                stopProgressTimer();
                updateProgress();
              } else if (state === window.YT.PlayerState.BUFFERING) {
                updateProgress();
              }
            }
          }
        });
      });
    });
  }

  document.querySelectorAll(".video-embed--youtube").forEach(setupYouTubePlayer);
})();
