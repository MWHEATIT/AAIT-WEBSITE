/* ============================================================
   ABOVE ALL IT — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* Progressive enhancement: hide .reveal elements only when JS is running */
  document.documentElement.classList.add('reveal-js');

  /* ---- Navigation ---- */
  const nav         = document.getElementById('mainNav');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  // Scroll: add .scrolled class to nav
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Mobile menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      // Prevent body scroll when menu open
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on mobile link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---- Active nav link ---- */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (
      href === page ||
      (page === '' && href === 'index.html') ||
      (page === 'index.html' && href === 'index.html')
    ) {
      a.classList.add('active');
    }
  });

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  var allRevealEls = [];

  function revealElement(el) {
    var delay = el.dataset.delay ? el.dataset.delay + 'ms' : '0ms';
    el.style.transitionDelay = delay;
    el.classList.add('in-view');
  }

  if ('IntersectionObserver' in window) {
    var revealIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px 200px 0px' }
    );

    // Observe all .reveal elements
    document.querySelectorAll('.reveal').forEach(function (el) {
      allRevealEls.push(el);
      revealIO.observe(el);
    });

    // Auto-stagger children of .stagger-parent
    document.querySelectorAll('.stagger-parent').forEach(function (parent) {
      Array.from(parent.children).forEach(function (child, i) {
        child.classList.add('reveal');
        child.dataset.delay = String(i * 80);
        allRevealEls.push(child);
        revealIO.observe(child);
      });
    });
  }

  // Fallback: if IntersectionObserver fails or elements remain hidden, force reveal
  setTimeout(function () {
    document.querySelectorAll('.reveal:not(.in-view)').forEach(function (el) {
      el.classList.add('in-view');
    });
  }, 1200);

  /* ---- Smooth anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY;
        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
          10
        ) || 72;
        window.scrollTo({ top: top - navHeight - 16, behavior: 'smooth' });
      }
    });
  });

  /* ---- Contact form: basic client-side validation feedback ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const submitBtn = contactForm.querySelector('[type="submit"]');
      if (!submitBtn) return;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      // Formspree will handle the actual submission; re-enable after 4s fallback
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }, 4000);
    });
  }

})();
