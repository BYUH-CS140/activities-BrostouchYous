document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('open'); 
        });

        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 640) { 
                    navLinks.classList.remove('active');
                    hamburgerMenu.classList.remove('open');
                }
            });
        });
    }

   
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    const currentPath = window.location.pathname.split('/').pop();
    const navLinksList = document.querySelectorAll('.nav-link');

    navLinksList.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        
        
        if ((currentPath === '' && linkHref === 'index.html') ||
            (currentPath === 'index.html' && linkHref === 'index.html') ||
            (currentPath === 'about.html' && linkHref === 'about.html')) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
});
