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