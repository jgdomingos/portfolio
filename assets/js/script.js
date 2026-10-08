const languageToggle = document.getElementById("languageToggle");

async function changeLanguage(language) {
  const response = await fetch(`./assets/translations/${language}.json`);
  const translations = await response.json();

  // Traduz textos normais
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[key] || key;
  });

  // Traduz placeholders dos inputs
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = translations[key] || key;
  });

  document.documentElement.lang = language;
  localStorage.setItem("language", language);

  if (languageToggle) {
    languageToggle.textContent = language === "pt" ? "EN" : "PT";
  }
}

const savedLanguage = localStorage.getItem("language") || "en";
changeLanguage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage =
      document.documentElement.lang === "pt" ? "en" : "pt";

    changeLanguage(nextLanguage);
  });
}

// Menu hambúrguer (mobile)
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Fecha o menu ao clicar em algum link (útil no mobile)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Atualiza o ano do footer automaticamente
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Certificate carousels
document.querySelectorAll(".certCarousel").forEach((carousel) => {
  const track = carousel.querySelector(".certTrack");
  const slides = carousel.querySelectorAll(".certSlide");
  const previousButton = carousel.querySelector(".certPrev");
  const nextButton = carousel.querySelector(".certNext");
  const dots = carousel.querySelector(".certDots");
  let currentSlide = 0;

  if (!track || !slides.length || !previousButton || !nextButton || !dots) {
    return;
  }

  const updateCarousel = (slideIndex) => {
    currentSlide = (slideIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    previousButton.disabled = slides.length < 2;
    nextButton.disabled = slides.length < 2;

    dots.querySelectorAll(".certDot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
      dot.setAttribute("aria-current", index === currentSlide ? "true" : "false");
    });
  };

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "certDot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to certificate ${index + 1}`);
    dot.addEventListener("click", () => updateCarousel(index));
    dots.appendChild(dot);
  });

  previousButton.addEventListener("click", () => updateCarousel(currentSlide - 1));
  nextButton.addEventListener("click", () => updateCarousel(currentSlide + 1));
  updateCarousel(0);
});

// Certificate PDF viewer
const certificateModal = document.getElementById("certificateModal");
const certificateViewer = document.getElementById("certificateViewer");
const certificateModalClose = document.getElementById("certificateModalClose");
let lastCertificateTrigger = null;

const closeCertificateModal = () => {
  if (!certificateModal || !certificateViewer) {
    return;
  }

  certificateModal.hidden = true;
  certificateViewer.removeAttribute("src");
  document.body.classList.remove("modal-open");
  lastCertificateTrigger?.focus();
};

if (certificateModal && certificateViewer && certificateModalClose) {
  document.querySelectorAll("[data-certificate]").forEach((certificate) => {
    certificate.addEventListener("click", () => {
      const certificatePath = certificate.dataset.certificate;

      if (!certificatePath) {
        return;
      }

      lastCertificateTrigger = certificate;
      certificateViewer.src = certificatePath;
      certificateModal.hidden = false;
      document.body.classList.add("modal-open");
      certificateModalClose.focus();
    });
  });

  certificateModalClose.addEventListener("click", closeCertificateModal);

  certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) {
      closeCertificateModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !certificateModal.hidden) {
      closeCertificateModal();
    }
  });
}

// Formulário de contato -> abre o cliente de e-mail do visitante já preenchido
// (sem back-end. Para não depender do cliente de e-mail, troque por Formspree/EmailJS/Web3Forms)
const contactForm = document.getElementById("contactForm");
 
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
 
    if (!name || !email || !message) {
      return;
    }
 
    const subject = encodeURIComponent(`Contato via portfólio - ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nNome: ${name}\nE-mail: ${email}`);
 
    window.location.href = `mailto:jgsdomingoss@gmail.com?subject=${subject}&body=${body}`;
  });
}

// Button to return to the top
const btnTop = document.getElementById('btnTop');

if (btnTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTop.classList.add('active');
    } else {
      btnTop.classList.remove('active');
    }
  });

  btnTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Center section navigation, including links from the footer and other pages.
const centerSection = (sectionId, behavior = "smooth") => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  section.scrollIntoView({
    behavior,
    block: "center"
  });
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll('a[href*="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = new URL(link.href, window.location.href);

    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", url.hash);
    centerSection(url.hash.slice(1), prefersReducedMotion ? "auto" : "smooth");
  });
});

window.addEventListener("load", () => {
  if (window.location.hash) {
    centerSection(window.location.hash.slice(1), "auto");
  }
});