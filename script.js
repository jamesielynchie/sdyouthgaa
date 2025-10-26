// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.sport-card, .session-card, .principle, .level, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.href && this.href.includes('#')) {
            // Only add loading effect for non-hash links
            return;
        }
        
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.style.pointerEvents = 'none';
        
        // Reset after 2 seconds (adjust based on actual form handling)
        setTimeout(() => {
            this.textContent = originalText;
            this.style.pointerEvents = 'auto';
        }, 2000);
    });
});

// Add hover effects to cards
document.querySelectorAll('.sport-card, .session-card, .principle, .level').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Add click tracking for analytics (placeholder)
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const buttonText = this.textContent;
        const section = this.closest('section')?.id || 'unknown';
        trackEvent('button_click', {
            button_text: buttonText,
            section: section
        });
    });
});

// Track form interactions
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('focus', function() {
        trackEvent('form_field_focus', {
            field_name: this.name,
            field_type: this.type
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu on escape
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('focus', function() {
        this.style.outline = '2px solid #2c5530';
        this.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Preload critical images (if any are added later)
function preloadImages() {
    const imageUrls = [
        // Add image URLs here when available
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    
    // Add a small delay to ensure smooth animations
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add error handling for form submission
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

// Add service worker registration for future PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker registration can be added here if needed
        console.log('Service worker support detected');
    });
}
