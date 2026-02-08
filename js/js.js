// Toggle menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

const closeMenu = () => {
  toggle.classList.remove("active");
  nav.classList.remove("active");
};

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});

/* cerrar al tocar un link */
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* cerrar al clickear fuera */
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    closeMenu();
  }
});

/* cerrar al scrollear la página */
window.addEventListener("scroll", () => {
  if (nav.classList.contains("active")) {
    closeMenu();
  }
});

/* Modal functionality EDUCACIÓN */
document.querySelectorAll("[data-modal-open]").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.modalOpen);
    modal.classList.add("is-active");
  });
});

document.querySelectorAll("[data-modal-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("is-active");
  });
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("is-active");
    }
  });
});


