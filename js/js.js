/* ================= SELECTORS ================= */
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const links = nav.querySelectorAll("a");
const sections = document.querySelectorAll("section[id]");


/* ================= MENU ================= */
const closeMenu = () => {
  toggle.classList.remove("active");
  nav.classList.remove("active");
};

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    closeMenu();
  }
});

/* ================= HEADER SCROLL ================= */
const onScrollHeader = () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

/* ================= ACTIVE LINK SCROLL ================= */
const onScrollActiveLink = () => {
  let current = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = 140;

    if (rect.top <= offset && rect.bottom >= offset) {
      current = section.id;
    }
  });

  //FIX FOOTER
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
    current = "contacto";
  }

  if (!current) return;

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
};

/* ================= SCROLL EVENTS ================= */
window.addEventListener("scroll", () => {
  onScrollHeader();
  onScrollActiveLink();

  if (nav.classList.contains("active")) closeMenu();
}, { passive: true });

/* ================= MODAL IMAGE ================= */
const modal = document.getElementById("global-modal");
const modalImg = document.getElementById("modal-image");

/* abrir modal */
document.querySelectorAll("[data-modal-img]").forEach(btn => {
  btn.addEventListener("click", () => {
    modalImg.src = btn.dataset.modalImg;
    modal.classList.add("is-active");
  });
});

/* cerrar modal */
document.querySelectorAll("[data-modal-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});

/* cerrar al clickear fondo */
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("is-active");
  }
});


// Form submission
const form = document.getElementById("contact-form");
const status = document.querySelector(".footer__form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.textContent = "Mensaje enviado correctamente. ¡Gracias!";
      status.classList.add("success");
      form.reset();
    } else {
      status.textContent =
        "Ups, hubo un problema al enviar el mensaje. Intentá nuevamente.";
      status.classList.add("error");
    }
  } catch (error) {
    status.textContent =
      "Error de conexión. Revisá tu internet e intentá más tarde.";
    status.classList.add("error");
  }
});

/* ================= CARRUSEL PROYECTOS ================= */
const carousel = document.querySelector("[data-carousel]");
const track = carousel.querySelector(".projects-carousel__track");
const slides = carousel.querySelectorAll(".project-slide");
const indicators = carousel.querySelectorAll("[data-slide]");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach(s => s.classList.remove("is-active"));
  indicators.forEach(i => i.classList.remove("is-active"));

  slides[index].classList.add("is-active");
  indicators[index].classList.add("is-active");
}

/* CONTROLES */
carousel.querySelector("[data-next]").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

carousel.querySelector("[data-prev]").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

/* INDICADORES */
indicators.forEach(btn => {
  btn.addEventListener("click", () => {
    index = Number(btn.dataset.slide);
    updateCarousel();
  });
});

/* SWIPE MOBILE */
let startX = 0;

track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) index = (index + 1) % slides.length;
  if (endX - startX > 50) index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

/* ================= ANIMACIÓN HERO ================= */
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hero.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(hero);
});
