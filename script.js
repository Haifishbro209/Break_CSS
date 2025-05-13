        // Toggle-Funktion für Notion-Toggles
        document.querySelectorAll('.notion-toggle-header').forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('open');
                const content = header.nextElementSibling;
                content.classList.toggle('open');
            });
        });

        // Tab-Wechsel
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Aktiven Tab deaktivieren
                document.querySelector('.tab.active').classList.remove('active');
                // Neuen Tab aktivieren
                tab.classList.add('active');
            });
        });

        // Thema-Umschalter
        const themeSwitch = document.querySelector('.theme-switch');
        themeSwitch.addEventListener('click', () => {
            themeSwitch.classList.toggle('dark');
        });

        // Reveal-Animation beim Scrollen
        const revealElements = document.querySelectorAll('.reveal');
        function checkReveal() {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', checkReveal);
        window.addEventListener('load', checkReveal);