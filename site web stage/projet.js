// === VARIABLES GLOBALES ===
let isScrolling = false;
let isGalleryPaused = false;
let gallerySpeed = 1;
const sections = document.querySelectorAll('.content-section');
const quickLinks = document.querySelectorAll('.quick-link');

// Données pour les modales des réalisations
const missionData = {
    1: {
        title: "Architecture & Conception",
        content: `
            <div class="modal-details">
                <h4>🏗️ Conception de l'Architecture Technique</h4>
                <p>Cette phase cruciale a consisté à définir l'architecture globale du système et la structure des bases de données. J'ai analysé les besoins fonctionnels et techniques pour créer une fondation solide.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>Technologies utilisées :</strong>
                        <span>Node.js, PostgreSQL, Redis, Docker</span>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>3 mois</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>Architecture scalable supportant 10k+ utilisateurs simultanés</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Défis relevés :</h5>
                    <ul>
                        <li>Conception d'une architecture microservices</li>
                        <li>Optimisation des requêtes base de données</li>
                        <li>Mise en place d'un système de cache distribué</li>
                        <li>Planification de la montée en charge</li>
                    </ul>
                </div>
            </div>
        `
    },
    2: {
        title: "Développement Frontend",
        content: `
            <div class="modal-details">
                <h4>💻 Création d'Interfaces Modernes</h4>
                <p>Développement d'interfaces utilisateur responsives et intuitives en utilisant les dernières technologies frontend. Focus sur l'expérience utilisateur et les performances.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>Technologies utilisées :</strong>
                        <span>React, TypeScript, Sass, Webpack</span>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>4 mois</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>Interface responsive avec score Lighthouse > 95</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Fonctionnalités développées :</h5>
                    <ul>
                        <li>Dashboard interactif avec graphiques en temps réel</li>
                        <li>Système de notifications push</li>
                        <li>Interface mobile-first responsive</li>
                        <li>Animations et micro-interactions fluides</li>
                    </ul>
                </div>
            </div>
        `
    },
    3: {
        title: "Backend & API",
        content: `
            <div class="modal-details">
                <h4>⚙️ Services Backend Robustes</h4>
                <p>Développement d'une API RESTful complète avec authentification, gestion des données, et services métier. Architecture orientée services pour une maintenance optimale.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>Technologies utilisées :</strong>
                        <span>Node.js, Express, JWT, Mongoose</span>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>5 mois</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>API complète avec 50+ endpoints documentés</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Services développés :</h5>
                    <ul>
                        <li>Système d'authentification sécurisé (JWT + 2FA)</li>
                        <li>API de gestion des utilisateurs et permissions</li>
                        <li>Service de notifications en temps réel</li>
                        <li>Intégration avec services tiers (paiement, email)</li>
                    </ul>
                </div>
            </div>
        `
    },
    4: {
        title: "Sécurité & Tests",
        content: `
            <div class="modal-details">
                <h4>🔒 Sécurisation et Qualité</h4>
                <p>Implémentation des meilleures pratiques de sécurité et mise en place d'une suite de tests complète pour garantir la fiabilité du système.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>Technologies utilisées :</strong>
                        <span>Jest, Cypress, Helmet, bcrypt</span>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>2 mois</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>Couverture de tests > 90%, Sécurité OWASP</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Mesures implémentées :</h5>
                    <ul>
                        <li>Tests unitaires et d'intégration automatisés</li>
                        <li>Chiffrement des données sensibles</li>
                        <li>Protection contre les attaques OWASP Top 10</li>
                        <li>Audit de sécurité et penetration testing</li>
                    </ul>
                </div>
            </div>
        `
    },
    5: {
        title: "Déploiement & CI/CD",
        content: `
            <div class="modal-details">
                <h4>🚀 Infrastructure et Automatisation</h4>
                <p>Mise en place d'une infrastructure cloud scalable avec pipeline de déploiement automatisé. Configuration de monitoring et alertes pour assurer la disponibilité.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>Technologies utilisées :</strong>
                        <span>AWS, Docker, GitHub Actions, Nginx</span>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>2 mois</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>Déploiement automatisé avec 99.9% uptime</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Infrastructure mise en place :</h5>
                    <ul>
                        <li>Conteneurisation complète avec Docker</li>
                        <li>Pipeline CI/CD avec tests automatisés</li>
                        <li>Load balancing et auto-scaling</li>
                        <li>Sauvegarde automatique et disaster recovery</li>
                    </ul>
                </div>
            </div>
        `
    },
    6: {
        title: "Analytics & Monitoring",
        content: `
            <div class="modal-details">
                <h4>📊 Surveillance et Optimisation</h4>
                <p>Implémentation d'un système complet de monitoring et d'analytics pour suivre les performances, détecter les problèmes et optimiser l'expérience utilisateur.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>Technologies utilisées :</strong>
                        <span>Grafana, Prometheus, Google Analytics, Sentry</span>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>2 mois</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>Dashboard temps réel avec alertes automatiques</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Métriques surveillées :</h5>
                    <ul>
                        <li>Performance et temps de réponse</li>
                        <li>Utilisation des ressources système</li>
                        <li>Comportement utilisateur et conversion</li>
                        <li>Détection proactive des erreurs</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// === INITIALISATION ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initialisation de la page Mon Projet Personnel...');
    
    initializeQuickNavigation();
    initializeScrollAnimations();
    initializeStatCounters();
    initializeMobileMenu();
    initializeHeaderScroll();
    initializeRealisationCards();
    initializeCircularGallery();
    initializeModalSystem();
    initializeParallaxEffects();
    initializeAccessibility();
    
    console.log('✅ Page initialisée avec succès !');
});

// === NAVIGATION RAPIDE ===
function initializeQuickNavigation() {
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            quickLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const quickNavHeight = document.querySelector('.quick-nav').offsetHeight;
                const offset = headerHeight + quickNavHeight + 20;
                
                const targetPosition = targetElement.offsetTop - offset;
                
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
    
    sections.forEach((section) => {
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
    
    const animatedElements = document.querySelectorAll(
        '.description-creative, .objectives-pyramid, .realisations-grid, .difficulties-compact, .trajectory-card, .circular-gallery'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// === COMPTEURS ANIMÉS ===
function initializeStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toString();
            }
        }, 16);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target;
                if (!numberElement.classList.contains('animated')) {
                    numberElement.classList.add('animated');
                    const originalText = numberElement.textContent;
                    const number = parseInt(originalText);
                    
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
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// === HEADER AU SCROLL ===
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        updateActiveNavigation();
    }, 100));
}

// === CARTES DE RÉALISATIONS INTERACTIVES ===
function initializeRealisationCards() {
    const realisationCards = document.querySelectorAll('.realisation-card');
    
    realisationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 130, 195, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('click', function() {
            const missionId = this.getAttribute('data-mission');
            openMissionModal(missionId);
        });
    });
}

// === SYSTÈME DE MODALES ===
function initializeModalSystem() {
    const modal = document.getElementById('missionModal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeMissionModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMissionModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeMissionModal();
        }
    });
}

function openMissionModal(missionId) {
    const modal = document.getElementById('missionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const mission = missionData[missionId];
    if (mission) {
        modalTitle.textContent = mission.title;
        modalContent.innerHTML = mission.content;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animation d'entrée
        setTimeout(() => {
            modal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(1)';
            modal.querySelector('.modal-content').style.opacity = '1';
        }, 10);
    }
}

function closeMissionModal() {
    const modal = document.getElementById('missionModal');
    const modalContentEl = modal.querySelector('.modal-content');
    
    modalContentEl.style.transform = 'translate(-50%, -50%) scale(0.9)';
    modalContentEl.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 300);
}

// === GALERIE CIRCULAIRE ===
function initializeCircularGallery() {
    const gallery = document.querySelector('.circular-gallery');
    if (!gallery) return;
    
    startGalleryRotation();
    
    // Pause au survol
    gallery.addEventListener('mouseenter', () => {
        if (!isGalleryPaused) {
            pauseRotation();
        }
    });
    
    gallery.addEventListener('mouseleave', () => {
        if (!isGalleryPaused) {
            resumeRotation();
        }
    });
}

function startGalleryRotation() {
    const orbits = document.querySelectorAll('.gallery-orbit');
    
    orbits.forEach((orbit, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const speed = (index + 1) * 20 * gallerySpeed;
        
        orbit.style.animation = `rotate${direction > 0 ? 'Clockwise' : 'Counter'} ${speed}s linear infinite`;
    });
}

function pauseRotation() {
    const orbits = document.querySelectorAll('.gallery-orbit');
    orbits.forEach(orbit => {
        orbit.style.animationPlayState = 'paused';
    });
    isGalleryPaused = true;
}

function resumeRotation() {
    const orbits = document.querySelectorAll('.gallery-orbit');
    orbits.forEach(orbit => {
        orbit.style.animationPlayState = 'running';
    });
    isGalleryPaused = false;
}

function changeSpeed() {
    gallerySpeed = gallerySpeed === 1 ? 0.5 : gallerySpeed === 0.5 ? 2 : 1;
    
    if (!isGalleryPaused) {
        startGalleryRotation();
    }
    
    // Feedback visuel
    const speedBtn = document.querySelector('.gallery-btn[onclick="changeSpeed()"]');
    if (speedBtn) {
        const speedText = gallerySpeed === 0.5 ? 'Lent' : gallerySpeed === 2 ? 'Rapide' : 'Normal';
        speedBtn.textContent = `⚡ ${speedText}`;
        
        setTimeout(() => {
            speedBtn.textContent = '⚡ Vitesse';
        }, 1000);
    }
}

// === MENU MOBILE ===
function initializeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        createMobileMenuButton();
    }
    
    window.addEventListener('resize', throttle(() => {
        if (window.innerWidth <= 768) {
            createMobileMenuButton();
        } else {
            removeMobileMenuButton();
        }
    }, 250));
}

function createMobileMenuButton() {
    if (document.querySelector('.mobile-menu-btn')) return;
    
    const container = document.querySelector('.header .container');
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '☰';
    mobileBtn.setAttribute('aria-label', 'Ouvrir le menu de navigation');
    
    container.appendChild(mobileBtn);
    
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = 'none';
    
    mobileBtn.addEventListener('click', () => {
        const isOpen = navMenu.style.display === 'flex';
        
        if (!isOpen) {
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
            mobileBtn.setAttribute('aria-label', 'Fermer le menu de navigation');
        } else {
            navMenu.style.display = 'none';
            mobileBtn.innerHTML = '☰';
            mobileBtn.setAttribute('aria-label', 'Ouvrir le menu de navigation');
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

// === EFFETS PARALLAX ===
function initializeParallaxEffects() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        if (hero) {
            const speed = 0.3;
            hero.style.transform = `translateY(${scrolled * speed}px)`;
        }
        
        // Effet parallax sur les éléments flottants
        const floatingIcons = document.querySelectorAll('.floating-icon');
        floatingIcons.forEach((icon, index) => {
            const speed = 0.1 + (index % 3) * 0.05;
            const yPos = -(scrolled * speed);
            icon.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    }, 16));
}

// === ACCESSIBILITÉ ===
function initializeAccessibility() {
    // Navigation au clavier
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Focus visible pour les éléments interactifs
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            if (document.body.classList.contains('keyboard-navigation')) {
                this.style.outline = '2px solid #0082c3';
                this.style.outlineOffset = '2px';
            }
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // ARIA labels pour les éléments interactifs
    const realisationCards = document.querySelectorAll('.realisation-card');
    realisationCards.forEach((card, index) => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Voir les détails de la réalisation ${index + 1}`);
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// === SMOOTH SCROLLING ===
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

// === UTILITAIRES ===
function throttle(func, wait) {
    let timeout;
    let lastTime = 0;
    
    return function executedFunction(...args) {
        const now = Date.now();
        
        if (now - lastTime >= wait) {
            func.apply(this, args);
            lastTime = now;
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
                lastTime = Date.now();
            }, wait - (now - lastTime));
        }
    };
}

function debounce(func, wait) {
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

// === GESTION DES ERREURS ===
window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.error);
    // En production, vous pourriez envoyer l'erreur à un service de monitoring
});

// === FONCTIONS GLOBALES (pour les boutons HTML) ===
function toggleGalleryPause() {
    if (isGalleryPaused) {
        resumeRotation();
        const btn = document.querySelector('.gallery-btn[onclick="toggleGalleryPause()"]');
        if (btn) btn.textContent = '⏸️ Pause';
    } else {
        pauseRotation();
        const btn = document.querySelector('.gallery-btn[onclick="toggleGalleryPause()"]');
        if (btn) btn.textContent = '▶️ Play';
    }
}

function resetGallery() {
    gallerySpeed = 1;
    if (!isGalleryPaused) {
        startGalleryRotation();
    }
    
    const speedBtn = document.querySelector('.gallery-btn[onclick="changeSpeed()"]');
    if (speedBtn) speedBtn.textContent = '⚡ Vitesse';
    
    const resetBtn = document.querySelector('.gallery-btn[onclick="resetGallery()"]');
    if (resetBtn) {
        resetBtn.textContent = '🔄 Reset';
        setTimeout(() => {
            resetBtn.textContent = '🔄 Reset';
        }, 1000);
    }
}

// === PERFORMANCE ET OPTIMISATION ===
function optimizePerformance() {
    // Lazy loading pour les images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Optimisation des animations en fonction des préférences utilisateur
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition', 'none');
        const animatedElements = document.querySelectorAll('[style*="animation"]');
        animatedElements.forEach(el => {
            el.style.animation = 'none';
        });
    }
}

// === GESTION DU THÈME SOMBRE (BONUS) ===
function initializeThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('aria-label', 'Basculer le thème sombre');
    themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: var(--primary-blue);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1001;
        transition: var(--transition);
        box-shadow: 0 4px 15px rgba(0, 130, 195, 0.3);
    `;
    
    document.body.appendChild(themeToggle);
    
    // Charger le thème sauvegardé (sans localStorage dans Claude.ai)
    let isDarkMode = false;
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        toggleDarkMode(isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', 
            isDarkMode ? 'Basculer vers le thème clair' : 'Basculer vers le thème sombre'
        );
    });
    
    themeToggle.addEventListener('mouseenter', () => {
        themeToggle.style.transform = 'translateY(-50%) scale(1.1)';
    });
    
    themeToggle.addEventListener('mouseleave', () => {
        themeToggle.style.transform = 'translateY(-50%) scale(1)';
    });
}

function toggleDarkMode(isDark) {
    const root = document.documentElement;
    
    if (isDark) {
        root.style.setProperty('--primary-blue', '#66b3ff');
        root.style.setProperty('--secondary-blue', '#4da6ff');
        root.style.setProperty('--white', '#1a1a1a');
        root.style.setProperty('--light-gray', '#2a2a2a');
        root.style.setProperty('--text-dark', '#e0e0e0');
        root.style.setProperty('--shadow', 'rgba(255, 255, 255, 0.1)');
        document.body.style.background = 'linear-gradient(-45deg, #1a1a1a, #2a2a3a, #1a2a3a, #1a1a1a)';
    } else {
        root.style.setProperty('--primary-blue', '#0082c3');
        root.style.setProperty('--secondary-blue', '#0066cc');
        root.style.setProperty('--white', '#ffffff');
        root.style.setProperty('--light-gray', '#f5f5f5');
        root.style.setProperty('--text-dark', '#333333');
        root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)');
        document.body.style.background = 'linear-gradient(-45deg, #ffffff, #f0f8ff, #e6f3ff, #ffffff)';
    }
}

// === NOTIFICATIONS TOAST ===
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--green-accent)' : 
                    type === 'error' ? '#ff4444' : 'var(--primary-blue)'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 2001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(toast);
    
    // Animation d'entrée
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 10);
    
    // Animation de sortie
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
    
    // Permettre la fermeture manuelle
    toast.addEventListener('click', () => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    });
}

// === GESTION DU SCROLL FLUIDE AVANCÉ ===
function initializeAdvancedScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        
        // Barre de progression du scroll
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, var(--primary-blue), var(--orange-accent));
                z-index: 1002;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = `${scrollPercent * 100}%`;
        
        // Effet de parallax sur les sections
        const parallaxElements = document.querySelectorAll('.content-section');
        parallaxElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const speed = 0.5 + (index % 3) * 0.1;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(window.scrollY * speed * 0.1);
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// === EASTER EGGS ET INTERACTIONS CACHÉES ===
function initializeEasterEggs() {
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateEasterEgg();
            konamiCode = [];
        }
    });
    
    // Click secret sur le logo
    const logo = document.querySelector('.logo-placeholder');
    if (logo) {
        let clickCount = 0;
        logo.addEventListener('click', () => {
            clickCount++;
            if (clickCount >= 5) {
                showConfetti();
                clickCount = 0;
            }
        });
    }
}

function activateEasterEgg() {
    showToast('🎉 Code Konami activé ! Mode développeur ON', 'success', 5000);
    
    // Effet spécial sur toute la page
    document.body.style.animation = 'rainbow 2s ease-in-out';
    
    // Ajouter l'animation rainbow
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            25% { filter: hue-rotate(90deg); }
            50% { filter: hue-rotate(180deg); }
            75% { filter: hue-rotate(270deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

function showConfetti() {
    const colors = ['#ff6600', '#0082c3', '#00cc66', '#ffcc00', '#ff3366'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                z-index: 2002;
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        }, i * 50);
    }
    
    // Animation de chute des confettis
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// === INITIALISATION COMPLÈTE ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initialisation de la page Mon Projet Personnel...');
    
    initializeQuickNavigation();
    initializeScrollAnimations();
    initializeStatCounters();
    initializeMobileMenu();
    initializeHeaderScroll();
    initializeRealisationCards();
    initializeCircularGallery();
    initializeModalSystem();
    initializeParallaxEffects();
    initializeAccessibility();
    
    // Nouvelles fonctionnalités
    optimizePerformance();
    initializeThemeToggle();
    initializeAdvancedScrollEffects();
    initializeEasterEggs();
    
    console.log('✅ Page initialisée avec succès !');
    
    // Message de bienvenue
    setTimeout(() => {
        showToast('🎯 Bienvenue sur mon projet personnel !', 'success', 4000);
    }, 1000);
});

// === NETTOYAGE ET OPTIMISATION MÉMOIRE ===
window.addEventListener('beforeunload', function() {
    // Nettoyage des event listeners et des timers
    const galleryOrbits = document.querySelectorAll('.gallery-orbit');
    galleryOrbits.forEach(orbit => {
        orbit.style.animation = 'none';
    });
    
    // Suppression des toasts actifs
    const toasts = document.querySelectorAll('.toast');
    toasts.forEach(toast => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    });
    
    console.log('🧹 Nettoyage effectué avant fermeture');
});