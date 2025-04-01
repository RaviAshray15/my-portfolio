const navLinks = document.querySelectorAll('.navbar a');
        const sections = document.querySelectorAll('.section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 

                navLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));

                link.classList.add('active');

                const sectionId = link.getAttribute('data-section');
                const targetSection = document.getElementById(sectionId);
                targetSection.classList.add('active');
            });
        });
