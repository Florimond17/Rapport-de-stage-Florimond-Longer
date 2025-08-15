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
                        <strong>Organisation mise en place :</strong>
                        <span>Chaque membre de l'équipe logistique était affilié a une tache, et nous changions de poste tous les matins :</span>
                            <ul>
                                <li>Aller chercher les candidats à la gare.</li>
                                <li>S'occuper de L'accueil à l'extérieur de l'établissement afin de converger tous les candidats dans le hall B.</li>
                                <li>Accueil intérieur pour guider les candidats dans la procédure d'enregistrement et leur donner des informations sur les potentielles questions.</li>
                                <li>Scanner les QR codes qui justifiaient la présence du candidat pour la journée.</li>
                                <li>Le stand informations pour l'explication du déroulement de la journée.</li>
                                <li>Le stand petit déjeuner, qui était mis en place pour détendre les candidats et discuter avec eux.</li>
                                <li>Le "volant" : ce poste servait de renfort si d'autres collègues avaient besoin d'aide (dû au nombre de candidats par exemple)</li>
                            </ul>
                    </div>
                    <div class="highlight">
                        <strong>Durée :</strong>
                        <span>tous les matins de 9 h à 12 h</span>
                    </div>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>Des avis positifs et une journée inoubliable pour chaque candidat.</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Défis relevés :</h5>
                    <ul>
                        <li>Ne pas perdre et oublier des candidats à la gare.</li>
                        <li>Gérer les candidats en retard ou perdus.</li>
                        <li>Prise en charge des parents.</li>
                        <li>Les faire patienter en attendant l'arrivée de tout le monde pour commencer la journée.</li>
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
                    <h5>exemples de conseil que j'ai rencontré :</h5>
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
                    <h5>Connaissance essentielles :</h5>
                    <ul>
                        <li>Le programme BBA voie Générale et la voie Doubles diplômes</li>
                        <li>Le programme TEMA avec ses spécificités et ses débouchés</li>
                        <li>Des différentes associations</li>
                        <li>De l'influence de l'école et des différents services qu'elle propose </li>
                    </ul>
                </div>
            </div>
        `
    },
    4: {
        title: "🔒 Représentant du programme TEMA",
        content: `
            <div class="modal-details">
                <p>La promotion du programme TEMA faisait partie de mes missions les plus importantes, car la promotion 2024-2025 était la toute première sur le campus de Rouen.
                Nous n’étions que deux étudiants du programme TEMA à faire partie de l’équipe des admisseurs. Les autres admisseurs connaissaient peu le programme et n’étaient pas à l’aise pour en parler.<p>
                <p>De ce fait, à chaque fois qu’un(e) candidat(e) manifestait de l’intérêt pour le programme, c’était à moi de répondre à ses questions. Il m’est arrivé à plusieurs reprises d’avoir 5 à 6 candidats en face de moi, me posant de nombreuses questions sur le contenu du programme, les débouchés ou encore la vie étudiante.</p>
                
                <div class="technical-details">
                    <h5>Rôle particulier :</h5>
                    <ul>
                        <li>être appelé à chaque intérrogation des étudiants</li>
                        <li>Représanter le programme auprès des autres admisseurs</li>
                        <li>Faire un sptich durant l'amphi de présentation sur mon expérience du programme</li>
                    </ul>
                </div>
            </div>
        `
    },
    5: {
        title: "🚀 Animation",
        content: `
            <div class="modal-details">
                <p>Une autre de mes missions, bien que moins centrale, consistait à animer ponctuellement certaines activités proposées aux candidats admissibles.</p>
                
                <div class="achievement-highlights">
                    <div class="highlight">
                        <strong>Ces animations avaient pour objectif de créer un moment convivial permettant aux candidats de mieux faire connaissance avec nous.</strong>
                        <span>Ce temps d’échange informel était également l’occasion de détendre l’atmosphère et de renforcer les liens entre admissibles et admisseurs.</span>
                    </div>
                </div>
            </div>
        `
    },
    6: {
        title: "📊 Organisation",
        content: `
            <div class="modal-details">
                <p>L’organisation des après-midis représentait la partie la plus complexe et la plus importante de chaque journée.
Nous avions mis en place un tableau regroupant l’ensemble des informations essentielles : les horaires de passage, l’attribution des salles, ainsi que les affectations des étudiants.

Pour assurer un bon déroulement, nous communiquions en continu via un groupe privé, ce qui nous permettait de faire circuler rapidement les informations, notamment en cas de retard ou lorsqu’un candidat était introuvable. Cette coordination était essentielle pour garantir la fluidité du planning et éviter les perturbations.</p>
                    <div class="highlight">
                        <strong>Résultat :</strong>
                        <span>L’équipe pédagogique s’est montrée ravie qu’aucun retard n’ait été constaté durant toute la période, et l’équipe des admissions a également exprimé sa satisfaction qu’aucun incident n’ait été signalé.</span>
                    </div>
                </div>
                
                <div class="technical-details">
                    <h5>Organisation</h5>
                    <ul>
                        <li>2 étudiants au tableau à lister les candidats</li>
                        <li>3 étudiants dans le hall à appeler les vagues horraires et les étudiants en retard</li>
                        <li>7 étudiants à faire des allé retours dans les étages pour déposer les adilissbles dans leurs salles de concours</li>
                        <li>1 étudiant par étage pour discuter avec les admissibles qui patientaient</li>
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

// === SOLUTION COMPLÈTE POUR LES MODALES ===

// Variables globales pour le modal
let currentModal = null;
let isModalOpen = false;

// === INITIALISATION DU SYSTÈME DE MODALES ===
function initializeModalSystem() {
    console.log('🔧 Initialisation du système de modales...');
    
    // Créer le modal s'il n'existe pas
    createModalIfNotExists();
    
    // Attendre que le DOM soit complètement chargé
    setTimeout(() => {
        setupModalEventListeners();
        console.log('✅ Système de modales initialisé');
    }, 100);
}

// === CRÉER LE MODAL DANS LE DOM ===
function createModalIfNotExists() {
    let modal = document.getElementById('missionModal');
    
    if (!modal) {
        console.log('📝 Création du modal dans le DOM...');
        modal = document.createElement('div');
        modal.id = 'missionModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" type="button" aria-label="Fermer">&times;</button>
                <div class="modal-body">
                    <h3 id="modalTitle"></h3>
                    <div id="modalContent"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    currentModal = modal;
}

// === CONFIGURATION DES EVENT LISTENERS ===
function setupModalEventListeners() {
    if (!currentModal) {
        console.error('❌ Modal non trouvé');
        return;
    }
    
    // 1. Bouton fermer
    const closeBtn = currentModal.querySelector('.modal-close');
    if (closeBtn) {
        // Supprimer les anciens listeners
        closeBtn.removeEventListener('click', handleCloseClick);
        // Ajouter le nouveau
        closeBtn.addEventListener('click', handleCloseClick);
        console.log('✅ Event listener bouton fermer ajouté');
    } else {
        console.error('❌ Bouton fermer non trouvé');
    }
    
    // 2. Clic en dehors du modal
    currentModal.removeEventListener('click', handleOverlayClick);
    currentModal.addEventListener('click', handleOverlayClick);
    console.log('✅ Event listener overlay ajouté');
    
    // 3. Empêcher la propagation sur le contenu
    const modalContent = currentModal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.removeEventListener('click', handleContentClick);
        modalContent.addEventListener('click', handleContentClick);
        console.log('✅ Event listener contenu ajouté');
    }
    
    // 4. Touche Échap (global)
    document.removeEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyDown);
    console.log('✅ Event listener clavier ajouté');
}

// === GESTIONNAIRES D'ÉVÉNEMENTS ===
function handleCloseClick(e) {
    console.log('🖱️ Clic sur bouton fermer');
    e.preventDefault();
    e.stopPropagation();
    closeMissionModal();
}

function handleOverlayClick(e) {
    console.log('🖱️ Clic sur overlay', e.target.className);
    // Fermer seulement si on clique sur l'overlay lui-même
    if (e.target === currentModal || e.target.classList.contains('modal-overlay')) {
        closeMissionModal();
    }
}

function handleContentClick(e) {
    console.log('🖱️ Clic sur contenu - propagation stoppée');
    e.stopPropagation();
}

function handleKeyDown(e) {
    if (e.key === 'Escape' && isModalOpen) {
        console.log('⌨️ Touche Échap pressée');
        closeMissionModal();
    }
}

// === OUVERTURE DU MODAL ===
function openMissionModal(missionId) {
    console.log('🚀 Ouverture modal pour mission:', missionId);
    
    if (!currentModal) {
        console.error('❌ Modal non disponible');
        return;
    }
    
    const modalTitle = currentModal.querySelector('#modalTitle');
    const modalContent = currentModal.querySelector('#modalContent');
    
    if (!modalTitle || !modalContent) {
        console.error('❌ Éléments modal non trouvés');
        return;
    }
    
    const mission = missionData[missionId];
    if (!mission) {
        console.error('❌ Mission non trouvée:', missionId);
        return;
    }
    
    // Mise à jour du contenu
    modalTitle.textContent = mission.title;
    modalContent.innerHTML = mission.content;
    
    // Affichage
    currentModal.style.display = 'flex';
    requestAnimationFrame(() => {
        currentModal.classList.add('active');
        isModalOpen = true;
        document.body.style.overflow = 'hidden';
        console.log('✅ Modal ouvert');
    });
}

// === FERMETURE DU MODAL ===
function closeMissionModal() {
    console.log('🔒 Fermeture du modal');
    
    if (!currentModal || !isModalOpen) {
        console.log('⚠️ Modal déjà fermé ou non disponible');
        return;
    }
    
    // Animation de fermeture
    currentModal.classList.remove('active');
    isModalOpen = false;
    
    // Restaurer le scroll
    document.body.style.overflow = 'auto';
    
    // Masquer après l'animation
    setTimeout(() => {
        if (currentModal) {
            currentModal.style.display = 'none';
            
            // Nettoyer le contenu
            const modalContent = currentModal.querySelector('#modalContent');
            const modalTitle = currentModal.querySelector('#modalTitle');
            
            if (modalContent) modalContent.innerHTML = '';
            if (modalTitle) modalTitle.textContent = '';
        }
        console.log('✅ Modal fermé');
    }, 300);
}

// === INITIALISATION DES CARTES ===
function initializeRealisationCards() {
    console.log('🃏 Initialisation des cartes...');
    
    const realisationCards = document.querySelectorAll('.realisation-card');
    console.log('📊 Nombre de cartes trouvées:', realisationCards.length);
    
    realisationCards.forEach((card, index) => {
        // Supprimer les anciens listeners
        card.removeEventListener('click', handleCardClick);
        
        // Ajouter le nouveau listener
        card.addEventListener('click', handleCardClick);
        
        // Effets hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 130, 195, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        console.log(`✅ Carte ${index + 1} initialisée`);
    });
}

function handleCardClick(e) {
    const card = e.currentTarget;
    const missionId = card.getAttribute('data-mission');
    console.log('🃏 Clic sur carte, mission ID:', missionId);
    
    if (missionId) {
        openMissionModal(missionId);
    } else {
        console.error('❌ Mission ID non trouvé sur la carte');
    }
}

// === FONCTION DE DEBUG ===
function debugModal() {
    console.log('🐛 Debug Modal:');
    console.log('- Modal element:', currentModal);
    console.log('- Modal open:', isModalOpen);
    console.log('- Modal classes:', currentModal?.className);
    console.log('- Modal display:', currentModal?.style.display);
    
    const closeBtn = currentModal?.querySelector('.modal-close');
    console.log('- Close button:', closeBtn);
    
    const cards = document.querySelectorAll('.realisation-card');
    console.log('- Cards found:', cards.length);
    
    cards.forEach((card, i) => {
        console.log(`- Card ${i}:`, card.getAttribute('data-mission'));
    });
}

// === EXPOSITION GLOBALE POUR DEBUG ===
window.debugModal = debugModal;
window.closeMissionModal = closeMissionModal;
window.openMissionModal = openMissionModal;

// === INITIALISATION AUTOMATIQUE ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM chargé, initialisation des modales...');
    
    setTimeout(() => {
        initializeModalSystem();
        initializeRealisationCards();
        
        // Debug automatique
        setTimeout(() => {
            console.log('🔍 Debug automatique:');
            debugModal();
        }, 500);
    }, 100);
});


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

// === GALLERY SCROLL FUNCTIONALITY === 
document.addEventListener('DOMContentLoaded', function() {
    const galleryScroll = document.getElementById('galleryScroll');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const progressBar = document.getElementById('progressBar');
    
    const cardWidth = 320 + 32; // card width + gap
    
    // Scroll Left
    scrollLeftBtn.addEventListener('click', () => {
        galleryScroll.scrollBy({
            left: -cardWidth * 2,
            behavior: 'smooth'
        });
    });
    
    // Scroll Right
    scrollRightBtn.addEventListener('click', () => {
        galleryScroll.scrollBy({
            left: cardWidth * 2,
            behavior: 'smooth'
        });
    });
    
    // Update Progress Bar
    function updateProgressBar() {
        const scrollLeft = galleryScroll.scrollLeft;
        const scrollWidth = galleryScroll.scrollWidth - galleryScroll.clientWidth;
        const progress = (scrollLeft / scrollWidth) * 100;
        progressBar.style.width = `${Math.max(20, progress)}%`;
    }
    
    // Progress bar update on scroll
    galleryScroll.addEventListener('scroll', updateProgressBar);
    
    // Touch/Mouse drag scrolling
    let isDown = false;
    let startX;
    let scrollLeftStart;
    
    galleryScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        galleryScroll.style.cursor = 'grabbing';
        startX = e.pageX - galleryScroll.offsetLeft;
        scrollLeftStart = galleryScroll.scrollLeft;
        e.preventDefault();
    });
    
    galleryScroll.addEventListener('mouseleave', () => {
        isDown = false;
        galleryScroll.style.cursor = 'grab';
    });
    
    galleryScroll.addEventListener('mouseup', () => {
        isDown = false;
        galleryScroll.style.cursor = 'grab';
    });
    
    galleryScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryScroll.offsetLeft;
        const walk = (x - startX) * 2;
        galleryScroll.scrollLeft = scrollLeftStart - walk;
    });
    
    // Auto-scroll on hover pause
    let autoScrollInterval;
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (galleryScroll.scrollLeft >= galleryScroll.scrollWidth - galleryScroll.clientWidth) {
                galleryScroll.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                galleryScroll.scrollBy({ left: 1, behavior: 'auto' });
            }
        }, 50);
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    
    // Start auto-scroll
    startAutoScroll();
    
    // Pause on hover
    galleryScroll.addEventListener('mouseenter', stopAutoScroll);
    galleryScroll.addEventListener('mouseleave', startAutoScroll);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            scrollLeftBtn.click();
        } else if (e.key === 'ArrowRight') {
            scrollRightBtn.click();
        }
    });
    
    // Intersection Observer for card animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.gallery-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Initialize progress bar
    updateProgressBar();
});
