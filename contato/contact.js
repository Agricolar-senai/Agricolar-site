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

  function alertForms(){
    
  }

  function alertForms() {
    const contactForm = document.getElementById('contactform');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            
            // Captura os dados do formulário
            const formData = {
                name: contactForm.querySelector('input[name="Name"]').value,
                email: contactForm.querySelector('input[name="Email"]').value,
                message: contactForm.querySelector('textarea[name="Phone"]').value,
            };

            // Envia os dados para o JSON Server
            fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    alert("Formulário enviado com sucesso!");
                    contactForm.reset(); // Limpa o formulário após o envio
                } else {
                    alert("Erro ao enviar o formulário. Tente novamente.");
                }
            })
            .catch(() => alert("Não foi possível enviar os dados. Verifique sua conexão."));
        });
    }
}
  
// Inicializa a função de alert do formulário
alertForms();

