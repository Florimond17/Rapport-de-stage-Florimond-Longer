// === VARIABLES GLOBALES ===
let isScrolling = false;
let currentBackgroundMode = 'gradient';
const sections = document.querySelectorAll('.content-section');
const quickLinks = document.querySelectorAll('.quick-link');

// === INITIALISATION ===
document.addEventListener('DOMContentLoaded', function() {
    initializeQuickNavigation();
    initializeScrollAnimations();
    initializeStatCounters();
    initializeMobileMenu();
    initializeHeaderScroll();
    initializeTimlineAnimations();
    initializePracticeCards();
    initializeBackgroundControls();
    initializeParallaxEffects();
});

// === NAVIGATION RAPIDE ===
function initializeQuickNavigation() {
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Supprimer la classe active de tous les liens
            quickLinks.forEach(l => l.classList.remove('active'));
            
            // Ajouter la classe active au lien cliqué
            this.classList.add('active');
            
            // Obtenir la cible
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const quickNavHeight = document.querySelector('.quick-nav').offsetHeight;
                const offset = headerHeight + quickNavHeight + 20;
                
                const targetPosition = targetElement.offsetTop - offset;
                
                // Scroll fluide
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === MISE À JOUR DE LA NAVIGATION ACTIVE ===
function updateActiveNavigation() {
    if (isScrolling) return;
    
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const quickNavHeight = document.querySelector('.quick-nav').offsetHeight;
    const offset = headerHeight + quickNavHeight + 100;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            quickLinks.forEach(link => link.classList.remove('active'));
            const correspondingLink = document.querySelector(`a[href="#${section.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// === ANIMATIONS AU SCROLL ===
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observer tous les éléments animables
    const animatedElements = document.querySelectorAll(
        '.content-card, .practice-card, .stat-card, .timeline-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// === COMPTEURS ANIMÉS ===
function initializeStatCounters() {
    const statCards = document.querySelectorAll('.stat-card');
    
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(start));
            }
        }, 16);
    };
    
    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'k';
        }
        return num.toString();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.stat-number');
                if (numberElement && !numberElement.classList.contains('animated')) {
                    numberElement.classList.add('animated');
                    const originalText = numberElement.textContent;
                    const number = parseInt(originalText.replace(/\D/g, ''));
                    
                    if (!isNaN(number)) {
                        numberElement.textContent = '0';
                        setTimeout(() => {
                            animateCounter(numberElement, number);
                        }, 200);
                    }
                }
            }
        });
    }, { threshold: 0.5 });
    
    statCards.forEach(card => observer.observe(card));
}

// === HEADER AU SCROLL ===
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Header qui se cache/apparaît
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        updateActiveNavigation();
    });
}

// === ANIMATIONS TIMELINE ===
function initializeTimlineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = 'all 0.6s ease';
        item.style.transitionDelay = `${index * 0.2}s`;
        
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        
        observer.observe(item);
    });
}

// === CARTES PRATIQUES INTERACTIVES ===
function initializePracticeCards() {
    const practiceCards = document.querySelectorAll('.practice-card');
    
    practiceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 130, 195, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

// === MENU MOBILE ===
function initializeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    
    // Créer le bouton hamburger si l'écran est petit
    if (window.innerWidth <= 768) {
        createMobileMenuButton();
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            createMobileMenuButton();
        } else {
            removeMobileMenuButton();
        }
    });
}

function createMobileMenuButton() {
    if (document.querySelector('.mobile-menu-btn')) return;
    
    const navBrand = document.querySelector('.nav-brand');
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '☰';
    mobileBtn.style.cssText = `
        background: var(--primary-blue);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 1.2rem;
        cursor: pointer;
        display: block;
    `;
    
    navBrand.parentNode.insertBefore(mobileBtn, navBrand.nextSibling);
    
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = 'none';
    
    mobileBtn.addEventListener('click', () => {
        if (navMenu.style.display === 'none') {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'white';
            navMenu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            navMenu.style.padding = '20px';
            navMenu.style.zIndex = '1000';
            mobileBtn.innerHTML = '✕';
        } else {
            navMenu.style.display = 'none';
            mobileBtn.innerHTML = '☰';
        }
    });
}

function removeMobileMenuButton() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.remove();
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = 'static';
        navMenu.style.background = 'transparent';
        navMenu.style.boxShadow = 'none';
        navMenu.style.padding = '0';
    }
}


    // Ajouter les styles du panneau
    const style = document.createElement('style');
    style.textContent = `
        .background-controls {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            z-index: 1001;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 8px 25px rgba(0, 130, 195, 0.2);
            border: 1px solid rgba(0, 130, 195, 0.1);
            transition: all 0.3s ease;
        }
        
        .background-controls:hover {
            box-shadow: 0 12px 35px rgba(0, 130, 195, 0.3);
        }
        
        .control-panel h4 {
            margin: 0 0 15px 0;
            color: var(--primary-blue);
            font-size: 0.9rem;
            text-align: center;
        }
        
        .bg-btn {
            display: block;
            width: 100%;
            margin: 8px 0;
            padding: 8px 12px;
            border: 1px solid var(--primary-blue);
            background: transparent;
            color: var(--primary-blue);
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .bg-btn:hover {
            background: var(--primary-blue);
            color: white;
            transform: translateX(-2px);
        }
        
        .bg-btn.active {
            background: var(--primary-blue);
            color: white;
        }
        
        @media (max-width: 768px) {
            .background-controls {
                right: 10px;
                padding: 15px;
            }
            
            .control-panel h4 {
                font-size: 0.8rem;
            }
            
            .bg-btn {
                font-size: 0.7rem;
                padding: 6px 10px;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(controlPanel);
}

function setBackgroundMode(mode) {
    currentBackgroundMode = mode;
    const body = document.body;
    
    // Supprimer toutes les classes de fond
    body.classList.remove('bg-gradient', 'bg-particles', 'bg-waves', 'bg-geometric');
    
    // Ajouter la nouvelle classe
    body.classList.add(`bg-${mode}`);
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.bg-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });
    
    // Appliquer les styles correspondants
    applyBackgroundStyles(mode);
}

function applyBackgroundStyles(mode) {
    const existingStyle = document.getElementById('dynamic-bg-style');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    const style = document.createElement('style');
    style.id = 'dynamic-bg-style';
    
    switch(mode) {
        case 'gradient':
            style.textContent = `
                body.bg-gradient {
                    background: linear-gradient(-45deg, #ffffff, #f0f8ff, #e6f3ff, #ffffff);
                    background-size: 400% 400%;
                    animation: gradientShift 15s ease infinite;
                }
            `;
            break;
            
        case 'particles':
            style.textContent = `
                body.bg-particles {
                    background: #f8fbff;
                    position: relative;
                }
                
                body.bg-particles::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        radial-gradient(circle at 25% 25%, rgba(0, 130, 195, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(0, 130, 195, 0.05) 0%, transparent 50%);
                    animation: particlesFloat 20s ease-in-out infinite;
                    z-index: -1;
                    pointer-events: none;
                }
                
                @keyframes particlesFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
            `;
            break;
            
        case 'waves':
            style.textContent = `
                body.bg-waves {
                    background: linear-gradient(45deg, #f0f8ff, #ffffff);
                    position: relative;
                }
                
                body.bg-waves::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: 
                        radial-gradient(ellipse at 0% 50%, rgba(0, 130, 195, 0.1) 0%, transparent 50%),
                        radial-gradient(ellipse at 100% 50%, rgba(0, 130, 195, 0.1) 0%, transparent 50%);
                    animation: wavesMove 8s ease-in-out infinite;
                    z-index: -1;
                    pointer-events: none;
                }
                
                @keyframes wavesMove {
                    0%, 100% { transform: translateX(0) scaleY(1); }
                    50% { transform: translateX(20px) scaleY(1.2); }
                }
            `;
            break;
            
        case 'geometric':
            style.textContent = `
                body.bg-geometric {
                    background: #ffffff;
                    position: relative;
                }
                
                body.bg-geometric::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(45deg, rgba(0, 130, 195, 0.05) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(0, 130, 195, 0.05) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(255, 102, 0, 0.05) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(255, 102, 0, 0.05) 75%);
                    background-size: 60px 60px;
                    background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
                    animation: geometricShift 25s linear infinite;
                    z-index: -1;
                    pointer-events: none;
                }
                
                @keyframes geometricShift {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(60px, 60px); }
                }
            `;
            break;
    }
    
    document.head.appendChild(style);
}

function changeBackgroundMode() {
    const modes = ['gradient', 'particles', 'waves', 'geometric'];
    const currentIndex = modes.indexOf(currentBackgroundMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setBackgroundMode(modes[nextIndex]);
}

// === EFFETS PARALLAX LÉGERS ===
function initializeParallaxEffects() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero) {
            const speed = 0.3;
            hero.style.transform = `translateY(${scrolled * speed}px)`;
        }
        
        // Effet parallax sur les cartes
        const cards = document.querySelectorAll('.content-card, .practice-card');
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const speed = 0.1 + (index % 3) * 0.05;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled * speed);
                card.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

// === SMOOTH SCROLLING POUR TOUS LES LIENS ANCRES ===
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const quickNavHeight = document.querySelector('.quick-nav').offsetHeight;
            const offset = headerHeight + quickNavHeight + 20;
            
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    }
});

// === GESTION DES ERREURS D'IMAGES ===
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// === AMÉLIORATION DE L'ACCESSIBILITÉ ===
document.addEventListener('keydown', function(e) {
    // Navigation au clavier
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// === GESTION DU FOCUS POUR L'ACCESSIBILITÉ ===
const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
);

focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-blue)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// === PERFORMANCE - THROTTLE SCROLL ===
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Appliquer le throttle aux événements de scroll
window.addEventListener('scroll', throttle(updateActiveNavigation, 100));

// === EASTER EGG - KONAMI CODE ===
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    const body = document.body;
    body.style.animation = 'rainbow 2s infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        body.style.animation = '';
        document.head.removeChild(style);
    }, 5000);
    
    console.log('🎉 Easter Egg activé ! Vous avez trouvé le code Konami !');
}

// === LAZY LOADING POUR LES IMAGES ===
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// === INITIALISATION FINALE ===
console.log('🚀 Page Decathlon initialisée avec succès !');
console.log('💡 Essayez le code Konami pour une surprise...');
console.log('🎨 Utilisez le panneau de contrôle à droite pour changer les animations de fond !');

// Exposer les fonctions globalement pour les boutons
window.setBackgroundMode = setBackgroundMode;
