// Behaviour for the one-page homepage (_pages/home.html).
// Everything here is progressive enhancement: the page is complete without it.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (selector, root) {
    return (root || document).querySelector(selector);
  };
  var $$ = function (selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  };

  // --- Navigation: scrolled state, progress bar, mobile menu, active link ---
  var nav = $("#nav");
  var progressBar = $("#progress-bar");
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (nav) nav.classList.toggle("is-scrolled", y > 12);
      if (progressBar) progressBar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = $("#nav-toggle");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });
    $$("#nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  var navLinks = $$("#nav-links a");
  if ("IntersectionObserver" in window && navLinks.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(function (link) {
      var section = $(link.getAttribute("href"));
      if (section) sectionObserver.observe(section);
    });
    // The hero has no nav link, so reaching it clears the highlight.
    var heroSection = $(".hero");
    if (heroSection) sectionObserver.observe(heroSection);
  }

  // --- Scroll reveal, with a small stagger between siblings ---
  var revealItems = $$("[data-reveal]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (reduceMotion || !isFinite(target) || target < 2) return;
    var start = null;
    var duration = 1400;
    function step(now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function show(el) {
    el.classList.add("is-in");
    $$("[data-count]", el).forEach(animateCount);
  }
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        var shown = 0;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.style.setProperty("--delay", shown * 70 + "ms");
          shown += 1;
          show(entry.target);
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealItems.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealItems.forEach(show);
  }
  // Format the static numbers the same way the counter does.
  $$("[data-count]").forEach(function (el) {
    var value = parseFloat(el.getAttribute("data-count"));
    if (isFinite(value)) el.textContent = value.toLocaleString("en-US");
  });

  // --- Copy email address ---
  var copyButton = $("#copy-email");
  if (copyButton && navigator.clipboard) {
    var copyLabel = $("span", copyButton);
    var original = copyLabel.textContent;
    copyButton.addEventListener("click", function () {
      navigator.clipboard.writeText(copyButton.getAttribute("data-email")).then(function () {
        copyLabel.textContent = "Copied";
        setTimeout(function () {
          copyLabel.textContent = original;
        }, 1800);
      });
    });
  } else if (copyButton) {
    copyButton.hidden = true;
  }
})();
