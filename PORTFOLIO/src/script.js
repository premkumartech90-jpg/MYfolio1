 // Form functionality
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simulate form submission
            const submitBtn = this.querySelector('.form-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '⏳ Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '✅ Message Sent!';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animate skill bars on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-card').forEach(card => {
            observer.observe(card);
        });

        // Form field focus effects
        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#8b5cf6';
                this.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                this.style.boxShadow = 'none';
            });
        });

        // Contact item click functionality
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('click', function() {
                const text = this.querySelector('p').textContent;
                
                if (this.querySelector('.phone')) {
                    window.location.href = `tel:${text}`;
                } else if (this.querySelector('.email')) {
                    window.location.href = `mailto:${text}`;
                } else if (this.querySelector('.github')) {
                    window.open(`https://github.com/${text}`, '_blank');
                }
            });
        });