// ===== DAY/NIGHT MODE TOGGLE =====
// Theme toggle removed - Dark mode only
const body = document.body;

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const subject = document.getElementById('subject')?.value;
    const message = document.getElementById('message')?.value;
    
    // Create mailto link with Noble's actual email
    const mailtoLink = `mailto:noblenyina@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client will open.');
    
    // Reset form
    this.reset();
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.highlight, .artwork, .document-card').forEach(el => {
    observer.observe(el);
});

// ===== COUNTER ANIMATION FOR STATS =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Observe stat numbers for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.textContent === '0') {
            animateCounter(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// ===== GALLERY ZOOM FUNCTIONALITY =====
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalMedium = document.getElementById('modalMedium');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const artworks = document.querySelectorAll('.artwork');
let currentIndex = 0;

// Open modal with clicked image
artworks.forEach(artwork => {
    artwork.addEventListener('click', () => {
        currentIndex = parseInt(artwork.getAttribute('data-index'));
        updateModal();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal?.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the image
modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Navigation between images
prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    updateModal();
});

nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % artworks.length;
    updateModal();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal?.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
            updateModal();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % artworks.length;
            updateModal();
        } else if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    // Close all modals with ESC
    if (e.key === 'Escape') {
        // Close document modals
        document.querySelectorAll('.document-modal').forEach(modal => {
            modal.classList.remove('active');
        });
        // Close video modal
        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.classList.remove('active');
            const modalVideo = document.getElementById('modalVideo');
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
        }
        document.body.style.overflow = 'auto';
    }
});

// Update modal content
function updateModal() {
    const currentArtwork = artworks[currentIndex];
    const imgSrc = currentArtwork.querySelector('.artwork-img').src;
    const title = currentArtwork.querySelector('.artwork-title').textContent;
    const medium = currentArtwork.querySelector('.artwork-medium').textContent;
    
    modalImage.src = imgSrc;
    modalTitle.textContent = title;
    modalMedium.textContent = medium;
}

// ===== DOCUMENT MODALS =====
function toggleDocument(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDocument(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside content
document.querySelectorAll('.document-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// ===== NAVBAR SCROLL EFFECT ===== (Disabled to keep gradient)
// Navbar now keeps its colorful gradient at all times

// ===== SCROLL-TRIGGERED SLIDE IN ANIMATIONS =====
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Alternate slide direction
            const index = Array.from(sections).indexOf(entry.target);
            if (index % 2 === 0) {
                entry.target.classList.add('slide-in-left');
            } else {
                entry.target.classList.add('slide-in-right');
            }
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px'
});

// Observe all sections except hero (it's always visible)
sections.forEach((section, index) => {
    if (index > 0) { // Skip hero section
        sectionObserver.observe(section);
    }
});

// ===== VIDEO HOVER PREVIEW & CLICK TO PLAY =====
const videoCards = document.querySelectorAll('.video-card');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const videoModalTitle = document.getElementById('videoModalTitle');
const videoModalDesc = document.getElementById('videoModalDesc');
const closeVideoBtn = document.getElementById('closeVideo');

const videoData = [
    { title: 'Painting Process', desc: 'Time-lapse Creation', src: 'picutres/-2203191984748892253.mov' },
    { title: 'Studio Tour', desc: 'Behind The Scenes', src: 'picutres/-8249189339771023376.mov' },
    { title: 'Art Techniques', desc: 'Tutorial & Tips', src: 'picutres/-8982945302246698508.mov' }
];

videoCards.forEach((card, index) => {
    const video = card.querySelector('.video-preview');
    const wrapper = card.querySelector('.video-wrapper');
    
    // Hover to play preview
    wrapper.addEventListener('mouseenter', () => {
        if (video) {
            video.play().catch(e => console.log('Preview play prevented:', e));
        }
    });
    
    // Leave to pause
    wrapper.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
    
    // Click to open full video
    wrapper.addEventListener('click', () => {
        if (videoData[index]) {
            modalVideo.src = videoData[index].src;
            videoModalTitle.textContent = videoData[index].title;
            videoModalDesc.textContent = videoData[index].desc;
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            modalVideo.play();
        }
    });
});

// Close video modal
closeVideoBtn?.addEventListener('click', () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    modalVideo.pause();
    modalVideo.currentTime = 0;
});

// Close when clicking outside
videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        modalVideo.pause();
        modalVideo.currentTime = 0;
    }
});

// Close video with ESC key (already handled in existing ESC listener)

// ===== MINI CONTACT CARDS REVEAL ON SCROLL =====
const miniContactCards = document.querySelectorAll('.mini-contact-card');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.5
});

miniContactCards.forEach(card => {
    contactObserver.observe(card);
});

// ===== CONSOLE MESSAGE =====
console.log('%c Welcome to Noble Danso\'s Art Portfolio! ', 'background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold;');
console.log('%c Contemporary Artist • Creative Visionary ', 'background: #4ECDC4; color: white; font-size: 14px; padding: 5px; border-radius: 3px;');
console.log('%c Watch Gallery Flag Waves • Hover Videos to Preview • Scroll to Reveal Contact ', 'background: #FFE66D; color: #292F36; font-size: 11px; padding: 5px; border-radius: 3px;');
