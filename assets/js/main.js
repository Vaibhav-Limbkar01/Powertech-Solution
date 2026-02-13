// ACCORDION
document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    const isOpen = content.style.display === "block";

    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });

    content.style.display = isOpen ? "none" : "block";
  });
});

// SERVICES CLICK DISPLAY
document.querySelectorAll(".service-slide").forEach(slide => {
  slide.addEventListener("click", () => {
    const target = slide.getAttribute("data-target");

    document.querySelectorAll(".service-info").forEach(info => {
      info.classList.remove("active");
    });

    const activeService = document.getElementById(target);
    activeService.classList.add("active");

    activeService.scrollIntoView({
      behavior: "smooth"
    });
  });
});
