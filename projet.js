// === VARIABLES GLOBALES ===
let isScrolling = false;
let isGalleryPaused = false;
let gallerySpeed = 1;
const sections = document.querySelectorAll('.content-section');
const quickLinks = document.querySelectorAll('.quick-link');

// Données pour les modales des réalisations
const missionData = {
    1: {
        title: "🏗️ Accueil candidat",
        content: `
            <div class="modal-details">
                <p>L'accueil candidat était une partie importante de chaque journée en tant qu’admisseur. En effet, il s’agissait du premier contact entre l’école et les candidats,
                 et il était essentiel de créer une atmosphère chaleureuse et rassurante afin de leur permettre de vivre une expérience positive dès leur arrivée. 
                 Cela impliquait d’être ponctuel, souriant, disponible pour répondre aux questions, et capable de transmettre l’image dynamique et accueillante de l’établissement.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>organisation mise en place :</strong>
                        <span>Chaque membre de l'équipe logistique était affilié a une tache, et nous changions de poste tout les matins :</span>
                            <ul>
                                <li>Aller chercher les candidats a la gare.</li>
                                <li>S'occuper de L'accueil a l'extérieur de l'établissement afin de convergé tout les candidat dans le hall B.</li>
                                <li>Accueil intérieur pour guidé les candidats dans la procédure d'enregistrement et leur données des informations sur les potentiel questions.</li>
                                <li>Scanner les QR code qui justifiait la dit présence du candidat pour la journée.</li>
                                <li>Le stand informations pour l'explication du déroulement de la journée.</li>
                                <li>Le stand petit déjeuner, qui était mis en place pour détendre les candidats et discuter avec eux.</li>
                                <li>Le volant cette personne était la en renfort si au autre poste avait besoin d'aide du a un sur nombre de candidats</li>
                            </ul>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>tout les matins de 9 h à 12 h</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>Des avis positifs et une journée inoubliable pour chaque candidats.</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Défis relevés :</h5>
                    <ul>
                        <li>Ne pas perdre et oublié des candidats a la gare.</li>
                        <li>Gérer les candidats en retard ou perdu.</li>
                        <li>Prise en charges des parents.</li>
                        <li>Les faire patienter en attendant l'arrivé de tout le monde pour commencer la journée.</li>
                    </ul>
                </div>
            </div>
        `
    },
    2: {
        title: "💻 Conseil",
        content: `
            <div class="modal-details">
                <p>L’un des aspects les plus importants du rôle des admisseurs réside dans l’accompagnement des candidats, au-delà de la simple logistique de la journée. Ce rôle peut survenir à tout moment, souvent de manière spontanée, au détour d’une conversation avec un admissible.
                    Il s’agit d’un moment délicat, car il implique d’entrer, parfois sans s’y attendre, dans une certaine forme d’intimité avec le candidat. Ce dernier exprime souvent ses doutes, ses hésitations, et cherche avant tout un regard bienveillant ou un conseil rassurant.
                    Toute la difficulté réside alors dans l’équilibre à trouver : il ne s’agit pas de l’influencer ou de prendre une décision à sa place, mais de lui offrir un espace d’écoute, de l’aider à formuler ses propres réflexions, et de lui présenter de manière neutre et objective les différentes options qui s’offrent à lui.
                    Dans ces échanges, l’admisseur devient un véritable point d’appui temporaire. Ce rôle demande de la sensibilité, de la discrétion et une grande capacité d’adaptation pour répondre à des situations parfois très personnelles, tout en restant fidèle à une posture de neutralité.</p>
                
                <div class="technical-details">
                    <h5>exemples de conseil que j'ai rencontrer :</h5>
                    <ul>
                        <li>Une étudiante m’a confié avoir grandi dans un milieu où l’on lui avait toujours enseigné que seule une classe préparatoire était une voie possible pour son avenir.
                            Elle m’a avoué ne pas se sentir capable d’en suivre une, c’est pourquoi elle se retrouvait à passer les concours post-bac.
                            Je ne pouvais pas donner mon avis sur la question, car cela aurait pu influencer son choix. Je lui ai donc présenté des exemples concrets des deux parcours qui s’offraient à elle : soit elle intégrait une prépa pour ensuite rejoindre une grande école via les admissions parallèles, soit elle choisissait directement une formation post-bac, ce qui lui permettrait de vivre d'autres expériences tout en avançant dans son parcours.
                            À la fin de notre conversation, je l’ai sentie plus confiante et elle semblait avoir fait un pas vers la décision qui lui correspondait le mieux.</li>
                        <li>Un autre exemple fréquent que j’ai rencontré au cours de mes journées en tant qu’admisseur concerne les candidats hésitant entre plusieurs écoles du concours SESAME. L’un d’eux, par exemple, doutait entre deux établissements et me demandait mon avis pour l’aider à trancher.
                            Dans ce type de situation, mon rôle est de valoriser NEOMA sans jamais dénigrer les autres écoles. Il est essentiel de rester professionnel et objectif, tout en mettant en avant les points forts de mon établissement.
                            Pour cela, je prends le temps d’écouter le candidat, de comprendre ce qui le motive, ce qu’il recherche dans une école, et quelles sont ses priorités (vie associative, spécialisation, ouverture à l’international, ambiance, etc.).
                            Une fois ses attentes identifiées, je peux mieux cibler les éléments de l’offre NEOMA qui pourraient y répondre, en lui présentant les spécificités du programme, les opportunités à l’étranger, ou encore la richesse de la vie étudiante.
                            Cet échange permet souvent au candidat de mieux se projeter, tout en lui laissant la liberté de faire un choix éclairé, basé sur ses propres critères.</li>
                    </ul>
                </div>
            </div>
        `
    },
    3: {
        title: "⚙️ Vente",
        content: `
            <div class="modal-details">
                <p>En tant qu’admisseur chez NEOMA, l’une des missions principales est de représenter l’école et de contribuer à sa promotion auprès des candidats admissibles. Cela implique une véritable posture de "vente", dans le sens noble du terme : il s’agit de valoriser l’établissement, ses programmes, ses valeurs et son environnement, tout en répondant aux attentes spécifiques des candidats.
                    Cette mission demande de bien connaître les atouts de NEOMA (international, excellence académique, vie associative, réseau d’alumni, etc.) afin de les mettre en avant de manière adaptée à chaque profil. Elle repose sur une écoute active : comprendre les motivations, les doutes ou les objectifs d’un candidat permet de mieux orienter le discours et de montrer en quoi NEOMA peut répondre à ses ambitions.
                    L’objectif n’est pas de convaincre à tout prix, mais de donner envie, d’éclairer les choix, et surtout de transmettre une image authentique et positive de l’école. Dans ce cadre, l’admisseur devient un véritable ambassadeur, jouant un rôle-clé dans l’attractivité de NEOMA.
                </p>

                 <div class="technical-details">
                    <h5>Connaisance essentiel :</h5>
                    <ul>
                        <li>Le programme BBA voie Générale et la voie Doubles diplomes</li>
                        <li>Le programme TEMA avec ces spécificités et des débouchés</li>
                        <li>Des différentes associations</li>
                        <li>De l'influence de l'école et des différentes services quelle propose </li>
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

// JavaScript pour la galerie circulaire
class CircularGallery {
    constructor() {
        this.gallery = document.getElementById('circularGallery');
        this.items = document.querySelectorAll('.gallery-item');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        
        this.currentIndex = 0;
        this.totalItems = this.items.length;
        this.isAnimating = false;
        this.autoRotateInterval = null;
        this.autoRotateDelay = 4000; // 4 secondes
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateGallery();
        this.startAutoRotate();
        
        // Pause auto-rotation on hover
        this.gallery.addEventListener('mouseenter', () => this.pauseAutoRotate());
        this.gallery.addEventListener('mouseleave', () => this.startAutoRotate());
    }
    
    setupEventListeners() {
        // Boutons de navigation
        this.prevBtn.addEventListener('click', () => this.previousItem());
        this.nextBtn.addEventListener('click', () => this.nextItem());
        
        // Indicateurs
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToItem(index));
        });
        
        // Clic sur les items
        this.items.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (index !== this.currentIndex) {
                    this.goToItem(index);
                } else {
                    this.handleItemClick(item);
                }
            });
        });
        
        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousItem();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextItem();
            }
        });
        
        // Touch/swipe support pour mobile
        this.setupTouchEvents();
    }
    
    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        let isTouch = false;
        
        this.gallery.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isTouch = true;
        }, { passive: true });
        
        this.gallery.addEventListener('touchmove', (e) => {
            if (!isTouch) return;
            e.preventDefault();
        }, { passive: false });
        
        this.gallery.addEventListener('touchend', (e) => {
            if (!isTouch) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Vérifier si c'est un swipe horizontal
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.previousItem();
                } else {
                    this.nextItem();
                }
            }
            
            isTouch = false;
        }, { passive: true });
    }
    
    nextItem() {
        if (this.isAnimating) return;
        this.currentIndex = (this.currentIndex + 1) % this.totalItems;
        this.updateGallery();
    }
    
    previousItem() {
        if (this.isAnimating) return;
        this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        this.updateGallery();
    }
    
    goToItem(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        this.currentIndex = index;
        this.updateGallery();
    }
    
    updateGallery() {
        this.isAnimating = true;
        
        // Calculer l'angle de rotation
        const angle = -(this.currentIndex * (360 / this.totalItems));
        
        // Appliquer la rotation à la galerie
        this.gallery.style.transform = `rotate(${angle}deg)`;
        
        // Mettre à jour les items
        this.items.forEach((item, index) => {
            // Calculer l'angle de l'item pour le garder droit
            const itemAngle = (index * (360 / this.totalItems)) + angle;
            item.style.transform = `rotate(${-itemAngle}deg)`;
            
            // Gérer les classes active
            item.classList.toggle('active', index === this.currentIndex);
            
            // Ajouter un effet de profondeur
            const distance = Math.abs(index - this.currentIndex);
            const minDistance = Math.min(distance, this.totalItems - distance);
            const opacity = 1 - (minDistance * 0.2);
            const scale = 1 - (minDistance * 0.1);
            
            item.style.opacity = opacity;
            if (index !== this.currentIndex) {
                item.style.transform += ` scale(${scale})`;
            }
        });
        
        // Mettre à jour les indicateurs
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
        
        // Animation terminée
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    handleItemClick(item) {
        // Ajouter un effet de clic
        item.style.transform += ' scale(0.95)';
        setTimeout(() => {
            this.updateGallery();
        }, 150);
        
        // Vous pouvez ajouter ici d'autres actions (modal, zoom, etc.)
        console.log('Item cliqué:', item.querySelector('h3').textContent);
    }
    
    startAutoRotate() {
        this.pauseAutoRotate();
        this.autoRotateInterval = setInterval(() => {
            this.nextItem();
        }, this.autoRotateDelay);
    }
    
    pauseAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }
    
    // Méthode pour ajouter dynamiquement des items
    addItem(imageSrc, title, description) {
        const newItem = document.createElement('div');
        newItem.className = 'gallery-item';
        newItem.setAttribute('data-index', this.totalItems);
        
        newItem.innerHTML = `
            <img src="${imageSrc}" alt="${title}" />
            <div class="item-info">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        `;
        
        this.gallery.appendChild(newItem);
        
        // Ajouter un indicateur
        const newIndicator = document.createElement('span');
        newIndicator.className = 'indicator';
        newIndicator.setAttribute('data-index', this.totalItems);
        document.getElementById('galleryIndicators').appendChild(newIndicator);
        
        this.totalItems++;
        this.items = document.querySelectorAll('.gallery-item');
        this.indicators = document.querySelectorAll('.indicator');
        
        // Reconfigurer les événements
        this.setupEventListeners();
        this.repositionItems();
    }
    
    repositionItems() {
        const angleStep = 360 / this.totalItems;
        this.items.forEach((item, index) => {
            const angle = index * angleStep;
            const radian = (angle * Math.PI) / 180;
            const radius = 200; // Ajustez selon vos besoins
            
            const x = Math.sin(radian) * radius;
            const y = -Math.cos(radian) * radius;
            
            item.style.left = `calc(50% + ${x}px)`;
            item.style.top = `calc(50% + ${y}px)`;
            item.style.transform = 'translate(-50%, -50%)';
        });
    }
    
    // Méthodes utilitaires
    getCurrentItem() {
        return this.items[this.currentIndex];
    }
    
    getTotalItems() {
        return this.totalItems;
    }
    
    getCurrentIndex() {
        return this.currentIndex;
    }
}

// Initialisation de la galerie quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si la galerie existe sur la page
    if (document.getElementById('circularGallery')) {
        const gallery = new CircularGallery();
        
        // Exposer l'instance globalement si nécessaire
        window.circularGallery = gallery;
        
        // Ajouter des animations d'entrée
        setTimeout(() => {
            document.querySelector('.circular-gallery-wrapper').style.opacity = '1';
            document.querySelector('.circular-gallery-wrapper').style.transform = 'translateY(0)';
        }, 100);
    }
});

// Fonction utilitaire pour lazy loading des images
function setupLazyLoading() {
    const images = document.querySelectorAll('.gallery-item img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', debounce(() => {
    if (window.circularGallery) {
        window.circularGallery.updateGallery();
    }
}, 250));

// Fonction utilitaire de debounce
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
