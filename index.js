// ==============================
// Scroll suave para links da navegação
// ==============================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // remove #
        const targetEl = document.getElementById(targetId);
        if(targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==============================
// Destacar link ativo ao rolar
// ==============================
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==============================
// Toggle para mostrar/ocultar imagens ou blocos de código
// ==============================
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetSelector = btn.dataset.target;
        const target = document.querySelector(targetSelector);
        if(target) {
            target.style.display = target.style.display === 'none' ? 'block' : 'none';
        }
    });
});

// ==============================
// Classe CSS para link ativo
// ==============================
const style = document.createElement('style');
style.innerHTML = `
nav a.active {
    color: #10b981;
    font-weight: bold;
}
`;
document.head.appendChild(style);
