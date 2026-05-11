(function () {
  "use strict";

  /* Page loader */
  var loader = document.getElementById("sn-loader");
  if (loader) {
    var min = 400;
    var start = performance.now();
    var finished = false;
    function scheduleExit() {
      if (finished) return;
      finished = true;
      var elapsed = performance.now() - start;
      setTimeout(function () {
        loader.classList.add("is-exit");
        setTimeout(function () {
          loader.remove();
        }, 700);
      }, Math.max(0, min - elapsed));
    }
    if (document.readyState === "complete") {
      scheduleExit();
    } else {
      document.addEventListener("DOMContentLoaded", scheduleExit, { once: true });
      window.addEventListener("load", scheduleExit, { once: true });
    }
    setTimeout(scheduleExit, 4500);
  }

  /* Nav mobile */
  var nav = document.getElementById("sn-nav");
  var toggle = document.getElementById("sn-nav-toggle");
  var panel = document.getElementById("sn-nav-panel");
  var backdrop = document.getElementById("sn-nav-backdrop");

  function setNavOpen(open) {
    if (!panel || !toggle) return;
    panel.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    document.body.classList.toggle("sn-nav-open", open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    if (backdrop) {
      backdrop.classList.toggle("is-open", open);
      backdrop.setAttribute("aria-hidden", open ? "false" : "true");
    }
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = !panel.classList.contains("is-open");
      setNavOpen(open);
    });
    if (backdrop) {
      backdrop.addEventListener("click", function () {
        setNavOpen(false);
      });
    }
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) {
        setNavOpen(false);
      }
    });
  }

  function onScrollNav() {
    if (!nav) return;
    nav.classList.toggle("sn-nav-scrolled", window.scrollY > 24);
  }
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  /* Reveal sections */
  if ("IntersectionObserver" in window) {
    document.querySelectorAll(".sn-reveal").forEach(function (el) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              el.classList.add("is-visible");
              io.disconnect();
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".sn-reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Scroll top */
  var fabTop = document.getElementById("sn-scroll-top");
  if (fabTop) {
    function updFab() {
      fabTop.classList.toggle("is-visible", window.scrollY > 560);
    }
    updFab();
    window.addEventListener("scroll", updFab, { passive: true });
  }

  /* Contact form → mailto */
  var form = document.getElementById("sn-contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var name = String(fd.get("name") || "").trim();
      var email = String(fd.get("email") || "").trim();
      var phone = String(fd.get("phone") || "").trim();
      var eventType = String(fd.get("eventType") || "").trim();
      var date = String(fd.get("date") || "").trim();
      var message = String(fd.get("message") || "").trim();
      var body =
        "Nom : " +
        name +
        "\nE-mail : " +
        email +
        "\nTéléphone : " +
        phone +
        "\nType d'événement : " +
        eventType +
        "\nDate envisagée : " +
        date +
        "\n\nMessage :\n" +
        message;
      var subject = "Devis Signature Nomade";
      var url =
        "mailto:contact@signature-nomade.fr?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = url;
    });
  }
})();
