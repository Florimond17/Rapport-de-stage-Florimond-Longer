// Animation du background au scroll
const animatedBg = document.getElementById('animatedBg');
const animatedBg2 = document.getElementById('animatedBg2');
const sections = document.querySelectorAll('section');
const navDots = document.querySelectorAll('.nav-dot');

// Parallax effect pour les backgrounds
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (animatedBg) {
        animatedBg.style.transform = `translateY(${rate}px)`;
    }
    
    if (animatedBg2) {
        // Background de la section 2 bouge avec un décalage différent
        const section2Top = document.getElementById('section2').offsetTop;
        const section2Rate = (scrolled - section2Top) * -0.3;
        animatedBg2.style.transform = `translateY(${section2Rate}px)`;
    }
    
    // Update navigation dots
    updateActiveNavDot();
});

// Fonction pour mettre à jour les points de navigation actifs
function updateActiveNavDot() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[index].classList.add('active');
        }
    });
}

// Navigation par les points
navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const targetSection = document.getElementById(dot.dataset.section);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animation d'entrée pour les cards de service
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInFromBottomCards 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observer les cards de service
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.animationDelay = `${index * 0.2}s`;
    observer.observe(card);
});

// Effet de particules sur les sections 1 et 2
function createParticles(sectionId) {
    const section = document.getElementById(sectionId);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 1;
        `;
        section.appendChild(particle);
    }
}

// Gestion de l'indicateur de scroll
function handleScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > window.innerHeight * 0.5) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
}

// Gestion des clics sur les boutons de service
function handleServiceButtons() {
    document.querySelectorAll('.service-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Animation de clic
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1.05)';
            }, 100);
            
            // Vous pouvez ajouter ici la logique de navigation
            console.log('Bouton cliqué:', e.target.textContent);
        });
    });
}

// Effet de parallaxe avancé pour les backgrounds
function advancedParallax() {
    const scrolled = window.pageYOffset;
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    
    // Parallaxe pour section 1
    if (scrolled < window.innerHeight) {
        const rate1 = scrolled * 0.5;
        if (animatedBg) {
            animatedBg.style.transform = `translateY(${rate1}px) scale(${1 + scrolled * 0.0001})`;
        }
    }
    
    // Parallaxe pour section 2
    const section2Top = section2.offsetTop;
    if (scrolled >= section2Top - window.innerHeight && scrolled <= section2Top + window.innerHeight) {
        const rate2 = (scrolled - section2Top) * 0.3;
        if (animatedBg2) {
            animatedBg2.style.transform = `translateY(${rate2}px) scale(${1 + Math.abs(rate2) * 0.0002})`;
        }
    }
}

// Animation de typing pour le texte de bienvenue
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Détection du mouvement de la souris pour des effets dynamiques
function handleMouseMove() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Effet subtil sur les backgrounds
        if (animatedBg) {
            const translateX = (mouseX - 0.5) * 20;
            const translateY = (mouseY - 0.5) * 20;
            animatedBg.style.filter = `hue-rotate(${mouseX * 30}deg)`;
        }
        
        if (animatedBg2) {
            const translateX = (mouseX - 0.5) * 15;
            const translateY = (mouseY - 0.5) * 15;
            animatedBg2.style.filter = `hue-rotate(${mouseX * 30}deg)`;
        }
    });
}

// Initialisation au chargement de la page
window.addEventListener('load', () => {
    // Créer les particules pour les sections 1 et 2
    createParticles('section1');
    createParticles('section2');
    
    // Initialiser les gestionnaires d'événements
    handleServiceButtons();
    handleMouseMove();
    
    // Animation initiale du texte
    setTimeout(() => {
        const welcomeTitle = document.querySelector('.welcome-text h1');
        const welcomeSubtitle = document.querySelector('.welcome-text p');
        
        if (welcomeTitle && welcomeSubtitle) {
            welcomeTitle.style.opacity = '1';
            welcomeSubtitle.style.opacity = '1';
        }
    }, 500);
});

// Gestionnaire de scroll optimisé avec throttling
let ticking = false;

function updateOnScroll() {
    const scrolled = window.pageYOffset;
    
    // Parallaxe standard
    const rate = scrolled * -0.5;
    if (animatedBg) {
        animatedBg.style.transform = `translateY(${rate}px)`;
    }
    
    // Parallaxe pour section 2
    const section2Top = document.getElementById('section2').offsetTop;
    const section2Rate = (scrolled - section2Top) * -0.3;
    if (animatedBg2) {
        animatedBg2.style.transform = `translateY(${section2Rate}px)`;
    }
    
    // Autres effets
    handleScrollIndicator();
    updateActiveNavDot();
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    // Recalculer les positions si nécessaire
    updateActiveNavDot();
});

// Préchargement des images pour améliorer les performances
function preloadImages() {
    const imageUrls = [
        'https://via.placeholder.com/200x200/0082c8/ffffff?text=Photo',
        'https://via.placeholder.com/180x180/ffffff/0082c8?text=Profil'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialiser le préchargement
preloadImages();

// Fonction pour ajouter des effets sonores (optionnel)
function addSoundEffects() {
    // Vous pouvez ajouter des sons pour les interactions
    // Cette fonction est prête pour une future implémentation
    console.log('Sound effects ready to be implemented');
}

// Effet de smooth scroll personnalisé pour les navigations
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.getElementById(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}