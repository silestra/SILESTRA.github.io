document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('header nav ul li a');
    const contactForm = document.getElementById('contact-form');
    const wikiLinks = document.querySelectorAll('.wiki-nav ul li a');
    const wikiSections = document.querySelectorAll('.wiki-content .wiki-section');
    const wikiSearch = document.getElementById('wiki-search');
    const wikiEditors = document.querySelectorAll('.wiki-editor');
    const wikiSaveButtons = document.querySelectorAll('.wiki-save');

    themeToggle.addEventListener('change', function () {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    // Подсветка текущего раздела
    function setActiveLink(link) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    }
    function checkActiveSection() {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const scroll = window.scrollY + 100;

            if (scroll >= top && scroll < bottom) {
                const targetLink = document.querySelector(`header nav ul li a[href="#${section.id}"]`);
                if (targetLink) {
                    setActiveLink(targetLink);
                }
            }
        });
    }
    window.addEventListener('scroll', checkActiveSection);
    checkActiveSection();
});


