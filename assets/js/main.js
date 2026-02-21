(function () {
  const body = document.body;
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primaryMenu');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        const firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    nav.addEventListener('click', (event) => {
      if (event.target.matches('.nav-link') && window.matchMedia('(max-width: 759px)').matches) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const modal = document.getElementById('enquiryModal');
  const modalOpeners = document.querySelectorAll('[data-open-enquiry]');
  const modalClose = document.querySelector('[data-close-modal]');
  let lastFocused = null;

  const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select';

  function trapFocus(event) {
    if (!modal || !modal.classList.contains('open') || event.key !== 'Tab') return;
    const focusable = modal.querySelectorAll(focusableSelector);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openModal() {
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.add('open');
    body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input, select, textarea, button');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  modalOpeners.forEach((btn) => btn.addEventListener('click', openModal));
  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
    trapFocus(event);
  });

  const quickForm = document.getElementById('quickEnquiryForm');
  if (quickForm) {
    quickForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(quickForm);
      const lines = [
        `Name: ${data.get('name') || ''}`,
        `Phone / WhatsApp: ${data.get('phone') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Trip Type: ${data.get('tripType') || ''}`,
        `Destination: ${data.get('destination') || ''}`,
        `Dates: ${data.get('dates') || ''}`,
        `Travelers: ${data.get('travelers') || ''}`,
        `Budget: ${data.get('budget') || ''}`,
        `Message: ${data.get('message') || ''}`
      ];
      const subject = encodeURIComponent('Enquiry from Annapurna Tourism website');
      const bodyText = encodeURIComponent(lines.join('\n'));
      window.location.href = `mailto:annapurnatourism5@gmail.com?subject=${subject}&body=${bodyText}`;
      const msg = quickForm.querySelector('.success-msg');
      if (msg) msg.textContent = 'Your email app opened with your enquiry draft.';
    });
  }

  const filters = document.querySelectorAll('.filter-pill');
  const tourCards = document.querySelectorAll('[data-tour-category]');
  if (filters.length && tourCards.length) {
    filters.forEach((btn) => {
      btn.addEventListener('click', () => {
        filters.forEach((item) => item.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.filter;

        tourCards.forEach((card) => {
          const match = target === 'all' || card.dataset.tourCategory === target;
          card.hidden = !match;
        });
      });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const lines = [
        `Name: ${data.get('name') || ''}`,
        `Phone / WhatsApp: ${data.get('phone') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Trip Type: ${data.get('tripType') || ''}`,
        `Destination: ${data.get('destination') || ''}`,
        `Dates: ${data.get('dates') || ''}`,
        `Travelers: ${data.get('travelers') || ''}`,
        `Budget Range: ${data.get('budget') || ''}`,
        `Message: ${data.get('message') || ''}`
      ];

      const subject = encodeURIComponent('Quote request: Annapurna Tourism');
      const bodyText = encodeURIComponent(lines.join('\n'));
      window.location.href = `mailto:annapurnatourism5@gmail.com?subject=${subject}&body=${bodyText}`;

      const msg = document.getElementById('contactSuccess');
      if (msg) msg.textContent = 'Your email app opened with a prefilled enquiry. We will get back to you soon.';

      const whatsappBtn = document.getElementById('whatsappChat');
      if (whatsappBtn) {
        const number = '918240387303';
        const text = encodeURIComponent(
          `Hi Annapurna Tourism, I'd like a quote for ${data.get('destination') || 'my trip'} on ${data.get('dates') || 'my preferred dates'}.`
        );
        whatsappBtn.href = `https://wa.me/${number}?text=${text}`;
      }
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const heroRotator = document.getElementById('heroRotator');
  if (heroRotator) {
    const slides = (heroRotator.dataset.slides || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    let index = 0;

    if (slides.length > 1) {
      setInterval(() => {
        index = (index + 1) % slides.length;
        const wrapper = heroRotator.closest('.hero-media');
        if (wrapper) wrapper.classList.add('fading');
        setTimeout(() => {
          heroRotator.src = slides[index];
          if (wrapper) wrapper.classList.remove('fading');
        }, 220);
      }, 5000);
    }
  }
})();
