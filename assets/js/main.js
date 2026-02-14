document.addEventListener("DOMContentLoaded", function () {

  /* ================= MOBILE NAVBAR ================= */
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  /* ================= ACCORDION ================= */
  const accordions = document.querySelectorAll(".accordion-title");

  accordions.forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;

      document.querySelectorAll(".accordion-content").forEach(item => {
        if (item !== content) item.style.display = "none";
      });

      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  /* ================= SERVICES CLICK DISPLAY ================= */
  document.querySelectorAll(".service-slide").forEach(slide => {
    slide.addEventListener("click", () => {
      const target = slide.getAttribute("data-target");

      document.querySelectorAll(".service-info").forEach(info => {
        info.classList.remove("active");
      });

      const activeService = document.getElementById(target);

      if (activeService) {
        activeService.classList.add("active");

        activeService.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
