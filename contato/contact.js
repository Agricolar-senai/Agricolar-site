class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactform');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            
            // Captura os dados do formulário (opcional, para uso posterior)
            const formData = {
                name: contactForm.querySelector('input[name="Name"]').value,
                email: contactForm.querySelector('input[name="Email"]').value,
                message: contactForm.querySelector('textarea[name="Phone"]').value,
            };

            // Exibe o alerta de sucesso
            alert("Formulário enviado com sucesso!");
            
            // Limpa o formulário
            contactForm.reset();
        });
    }
});
