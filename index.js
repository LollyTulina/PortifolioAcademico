document.addEventListener('DOMContentLoaded', () => {

    // Rolagem suave para links de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validação do formulário de contato
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        const name = this.elements['name'].value;
        const email = this.elements['email'].value;
        const message = this.elements['message'].value;

        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
            this.reset(); // Limpa o formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Animação dos cards de projeto ao rolar a página
    const projectCards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
