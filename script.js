// JavaScript for hamburger menu and smooth scrolling
      document.addEventListener('DOMContentLoaded', function() {
        // Hamburger menu functionality
        const hamburger = document.querySelector('.hamburger-icon');
        const nav = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', function() {
          hamburger.classList.toggle('active');
          nav.classList.toggle('active');
        });

        // Close menu when clicking on a nav item
        const navItems = document.querySelectorAll('.help, .login');
        navItems.forEach(item => {
          item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
          });
        });
        
        // Add header scroll effect
        window.addEventListener('scroll', function() {
          const header = document.querySelector('.header');
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
              const target = document.querySelector(targetId);
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }
          });
        });

        // Initialize AOS (Animate On Scroll)
        AOS.init({
          duration: 800,      // animation duration in ms
          easing: 'ease-out', // animation easing
          once: true,         // whether animation should happen only once
          offset: 100,        // offset (in px) from the original trigger point
          delay: 100,         // values from 0 to 3000, with step 50ms
          anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
      });