// New Era SaaS Site - Ultra Minimal Professional Design
// Advanced interaction system with performance optimization

class FluxSite {
    constructor() {
        this.isLoaded = false;
        this.scrollPosition = 0;
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initNavigation();
            this.initAnimations();
            this.initInteractions();
            this.initPerformanceOptimizations();
        });
        
        window.addEventListener('load', () => {
            this.isLoaded = true;
            this.triggerLoadAnimations();
        });
    }
    
    // Advanced Navigation System
    initNavigation() {
        const navbar = document.querySelector('.navbar');
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Ultra-smooth navbar scroll effect
        this.handleScroll = () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    
                    if (scrollY > 20) {
                        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.08)';
                        navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
                    } else {
                        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
                        navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.04)';
                    }
                    
                    this.updateActiveSection();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        };
        
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        
        // Enhanced mobile menu
        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu?.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Smooth scrolling with offset
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 64;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    hamburger?.classList.remove('active');
                    navMenu?.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }
    
    // Advanced Animation System
    initAnimations() {
        // Intersection Observer with advanced options
        const observerOptions = {
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '-50px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    this.triggerElementAnimation(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(
            '.feature-card.minimal, .pricing-card.minimal, .testimonial-card.floating, ' +
            '.hero-dashboard, .feature-window, .company-stat'
        );
        
        animatableElements.forEach(el => {
            this.observer.observe(el);
        });
        
        // Advanced chart animations
        this.initChartAnimations();
    }
    
    triggerElementAnimation(element) {
        element.classList.add('animate-in');
        
        // Special animations for specific elements
        if (element.classList.contains('hero-dashboard')) {
            this.animateDashboard(element);
        }
        
        if (element.classList.contains('company-stat')) {
            this.animateStatNumbers(element);
        }
    }
    
    animateDashboard(dashboard) {
        const chartLine = dashboard.querySelector('.chart-line');
        const chartGradient = dashboard.querySelector('.chart-gradient');
        const chartPoints = dashboard.querySelectorAll('.chart-point');
        const metricValues = dashboard.querySelectorAll('.metric-value');
        
        // Animate chart elements in sequence
        setTimeout(() => {
            chartLine?.style.setProperty('animation', 'drawLine 1.5s ease forwards');
        }, 500);
        
        setTimeout(() => {
            chartGradient?.style.setProperty('animation', 'drawLine 1.5s ease forwards');
        }, 800);
        
        chartPoints.forEach((point, index) => {
            setTimeout(() => {
                point.style.setProperty('animation', 'popIn 0.4s ease forwards');
            }, 1200 + (index * 150));
        });
        
        // Animate metric values
        metricValues.forEach((metric, index) => {
            setTimeout(() => {
                this.animateMetricValue(metric);
            }, 1500 + (index * 200));
        });
    }
    
    animateMetricValue(element) {
        const text = element.textContent;
        const hasK = text.includes('K');
        const hasDollar = text.includes('$');
        const hasPercent = text.includes('%');
        
        let targetValue = parseFloat(text.replace(/[^\d.]/g, ''));
        if (hasK) targetValue *= 1000;
        
        this.countUpAnimation(element, 0, targetValue, 1000, text);
    }
    
    countUpAnimation(element, start, end, duration, originalText) {
        const startTime = performance.now();
        const hasK = originalText.includes('K');
        const hasDollar = originalText.includes('$');
        const hasPercent = originalText.includes('%');
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            
            let displayValue = Math.floor(current);
            if (hasK && end >= 1000) {
                displayValue = (current / 1000).toFixed(1) + 'K';
            }
            
            let finalText = '';
            if (hasDollar) finalText += '$';
            finalText += displayValue;
            if (hasPercent) finalText += '%';
            
            element.textContent = finalText;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = originalText;
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    animateStatNumbers(statContainer) {
        const statValue = statContainer.querySelector('.stat-value');
        if (statValue) {
            const text = statValue.textContent;
            let targetValue = parseFloat(text.replace(/[^\d.]/g, ''));
            
            if (text.includes('ms')) {
                this.countUpAnimation(statValue, 0, targetValue, 1200, text);
            } else if (text.includes('M')) {
                targetValue *= 1000000;
                this.countUpAnimation(statValue, 0, targetValue, 1500, text);
            } else if (text.includes('%')) {
                this.countUpAnimation(statValue, 0, targetValue, 1000, text);
            }
        }
    }
    
    initChartAnimations() {
        // Advanced chart animation system
        const codeLines = document.querySelectorAll('.code-line');
        codeLines.forEach((line, index) => {
            line.style.animationDelay = `${1 + (index * 0.3)}s`;
        });
    }
    
    // Sophisticated Interaction System
    initInteractions() {
        this.initButtonInteractions();
        this.initCardInteractions();
        this.initHoverEffects();
        this.initPricingToggle();
    }
    
    initButtonInteractions() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Advanced ripple effect
            button.addEventListener('click', (e) => {
                this.createAdvancedRipple(e);
                this.handleButtonAction(button);
            });
            
            // Magnetic effect for large buttons
            if (button.classList.contains('btn-large')) {
                this.addMagneticEffect(button);
            }
        });
    }
    
    createAdvancedRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleExpand 0.6s ease-out forwards;
            pointer-events: none;
            z-index: 0;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
    
    addMagneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    }
    
    handleButtonAction(button) {
        const text = button.textContent;
        
        if (text.includes('Start Building') || text.includes('Get Started')) {
            this.showNotification('🚀 Welcome to Flux! Your journey begins now.', 'success');
        } else if (text.includes('Demo') || text.includes('Action')) {
            this.showNotification('🎬 Demo coming soon! Stay tuned.', 'info');
        } else if (text.includes('Contact Sales')) {
            this.showNotification('📞 Sales team will be in touch shortly.', 'info');
        }
    }
    
    initCardInteractions() {
        // Advanced 3D card effects
        const cards = document.querySelectorAll('.feature-card.minimal, .pricing-card.minimal');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                this.apply3DEffect(card, e);
            });
            
            card.addEventListener('mouseleave', () => {
                this.reset3DEffect(card);
            });
        });
        
        // Hero dashboard interaction
        const heroDashboard = document.querySelector('.hero-dashboard');
        if (heroDashboard) {
            heroDashboard.addEventListener('mousemove', (e) => {
                this.applyDashboard3D(heroDashboard, e);
            });
            
            heroDashboard.addEventListener('mouseleave', () => {
                heroDashboard.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(2deg)';
            });
        }
    }
    
    apply3DEffect(element, e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        element.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(10px)
            scale(1.02)
        `;
    }
    
    reset3DEffect(element) {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    }
    
    applyDashboard3D(element, e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;
        
        element.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
        `;
    }
    
    initHoverEffects() {
        // Sophisticated hover effects for pricing cards
        const pricingCards = document.querySelectorAll('.pricing-card.minimal');
        
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (card.classList.contains('featured')) {
                    card.style.transform = 'translateY(-8px) scale(1.03)';
                } else {
                    card.style.transform = 'translateY(-6px) scale(1.02)';
                }
                card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                if (card.classList.contains('featured')) {
                    card.style.transform = 'scale(1.02)';
                } else {
                    card.style.transform = 'scale(1)';
                }
                card.style.boxShadow = '';
            });
        });
        
        // Floating testimonial interaction
        const floatingCard = document.querySelector('.testimonial-card.floating');
        if (floatingCard) {
            floatingCard.addEventListener('mouseenter', () => {
                floatingCard.style.transform = 'rotate(0deg) scale(1.05)';
            });
            
            floatingCard.addEventListener('mouseleave', () => {
                floatingCard.style.transform = 'rotate(-2deg) scale(1)';
            });
        }
    }
    
    initPricingToggle() {
        const toggle = document.getElementById('pricing-toggle');
        const priceAmounts = document.querySelectorAll('.price-amount');
        
        const monthlyPrices = ['$0', '$49', 'Custom'];
        const annualPrices = ['$0', '$39', 'Custom'];
        
        toggle?.addEventListener('change', () => {
            const isAnnual = toggle.checked;
            
            priceAmounts.forEach((amount, index) => {
                if (index < monthlyPrices.length) {
                    const newPrice = isAnnual ? annualPrices[index] : monthlyPrices[index];
                    this.animateTextChange(amount, newPrice);
                }
            });
        });
    }
    
    animateTextChange(element, newText) {
        element.style.transform = 'translateY(-10px)';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.textContent = newText;
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }, 150);
    }
    
    // Performance Optimizations
    initPerformanceOptimizations() {
        // Lazy load images with intersection observer
        const images = document.querySelectorAll('img[src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.4s ease';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                    
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Preload critical resources
        this.preloadCriticalResources();
    }
    
    preloadCriticalResources() {
        // Preload fonts
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);
    }
    
    // Advanced notification system
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const icons = {
            success: '✓',
            info: 'ℹ',
            warning: '⚠',
            error: '✕'
        };
        
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-icon">${icons[type]}</div>
            <div class="notification-message">${message}</div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 24px;
            background: white;
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 16px 20px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(400px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            max-width: 320px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });
        
        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
    
    // Section tracking for navigation
    updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Load animations
    triggerLoadAnimations() {
        document.body.classList.add('loaded');
        
        // Trigger hero animations
        const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-buttons, .hero-social-proof');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Trigger dashboard animation
        setTimeout(() => {
            const dashboard = document.querySelector('.hero-dashboard');
            if (dashboard) {
                this.animateDashboard(dashboard);
            }
        }, 800);
    }
}

// Initialize the site
const fluxSite = new FluxSite();

// Add advanced CSS animations
const advancedStyles = document.createElement('style');
advancedStyles.textContent = `
    @keyframes rippleExpand {
        to {
            transform: scale(1);
            opacity: 0;
        }
    }
    
    @keyframes drawLine {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }
    
    @keyframes popIn {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
    
    @keyframes typeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.7;
            transform: scale(1.1);
        }
    }
    
    /* Advanced hover states */
    .nav-link {
        position: relative;
        overflow: hidden;
    }
    
    .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent);
        transition: left 0.5s ease;
    }
    
    .nav-link:hover::before {
        left: 100%;
    }
    
    /* Mobile menu enhancements */
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            padding: 32px;
            gap: 24px;
            border-bottom: 1px solid var(--border);
            animation: slideDown 0.3s ease;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        body.menu-open {
            overflow: hidden;
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Enhanced loading states */
    .loaded .hero-badge { animation: fadeInUp 0.6s ease 0.2s both; }
    .loaded .hero-title { animation: fadeInUp 0.6s ease 0.4s both; }
    .loaded .hero-subtitle { animation: fadeInUp 0.6s ease 0.6s both; }
    .loaded .hero-buttons { animation: fadeInUp 0.6s ease 0.8s both; }
    .loaded .hero-social-proof { animation: fadeInUp 0.6s ease 1s both; }
    .loaded .hero-visual { animation: fadeInRight 0.8s ease 0.4s both; }
    
    /* Smooth transitions for all interactive elements */
    * {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Focus improvements */
    .btn:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }
    
    .nav-link:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 4px;
        border-radius: 4px;
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

document.head.appendChild(advancedStyles);