/**
 * Delta Sports Emporium - Header & Off-Canvas Drawer Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const primaryNav = document.getElementById('primaryNav');
  const dropdownParents = document.querySelectorAll('.dropdown-parent');

  /**
   * Open the Off-Canvas Drawer
   */
  const openDrawer = () => {
    document.body.classList.add('drawer-open');
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
    if (primaryNav) {
      primaryNav.setAttribute('aria-hidden', 'false');
    }
    if (drawerOverlay) {
      drawerOverlay.setAttribute('aria-hidden', 'false');
    }
  };

  /**
   * Close the Off-Canvas Drawer
   */
  const closeDrawer = () => {
    document.body.classList.remove('drawer-open');
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
    if (primaryNav) {
      primaryNav.setAttribute('aria-hidden', 'true');
    }
    if (drawerOverlay) {
      drawerOverlay.setAttribute('aria-hidden', 'true');
    }
  };

  // Media Query matching CSS drawer breakpoint (<= 1200px)
  const drawerMediaQuery = window.matchMedia('(max-width: 1200px)');
  const isDrawerMode = () => drawerMediaQuery.matches;

  // 1. Toggle Button Click (Open)
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      openDrawer();
    });
  }

  // 2. Drawer Close Button Click (Close)
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  // 3. Click Backdrop Overlay (Close)
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', () => {
      closeDrawer();
    });
  }

  const products = {
    'mrf-cricket-bat': {
      category: 'Cricket',
      lead: 'A full-size Kashmir willow bat for club matches and net practice. The blade has a pressed face, a rounded toe, and a cane handle with a rubber grip.',
      specs: [
        ['Brand', 'MRF'],
        ['Willow', 'Kashmir willow'],
        ['Size', 'Full size, short handle'],
        ['Weight', 'About 1.15–1.25 kg'],
        ['Grip', 'Rubber grip on a cane handle'],
        ['Best for', 'Leather-ball club cricket and nets']
      ]
    },
    'leather-cricket-ball': {
      category: 'Cricket',
      lead: 'A four-piece leather match ball with a raised seam. It holds its shape for club games and is sold ready for play.',
      specs: [
        ['Type', 'Four-piece leather'],
        ['Weight', '156 g (5.5 oz)'],
        ['Colour', 'Red'],
        ['Seam', 'Hand-stitched, raised'],
        ['Best for', 'Club and school leather-ball cricket']
      ]
    },
    'cricket-helmet': {
      category: 'Cricket',
      lead: 'A cricket helmet with a steel grille and rear adjuster. It covers the face for batting and close-in fielding.',
      specs: [
        ['Shell', 'Hard outer shell with inner padding'],
        ['Grill', 'Steel, removable'],
        ['Fit', 'Rear dial, adjustable'],
        ['Best for', 'Batting and close fielding']
      ]
    },
    'batting-gloves': {
      category: 'Cricket',
      lead: 'A pair of batting gloves with padded fingers and a leather palm. The wrist strap keeps them in place through a long innings.',
      specs: [
        ['Sold as', 'One pair'],
        ['Palm', 'Leather'],
        ['Fingers', 'High-density foam padding'],
        ['Closure', 'Wrist strap'],
        ['Best for', 'Right-hand batting']
      ]
    },
    'cricket-stumps': {
      category: 'Cricket',
      lead: 'A full set of three wooden stumps and two bails. The set is light enough to carry to a ground or a practice pitch.',
      specs: [
        ['Includes', '3 stumps and 2 bails'],
        ['Material', 'Wood'],
        ['Use', 'Matches and practice'],
        ['Packing', 'Tied set']
      ]
    },
    'cosco-football': {
      category: 'Football',
      lead: 'A size 5 Cosco football with stitched panels. It is the match size used from school games up to adult play.',
      specs: [
        ['Brand', 'Cosco'],
        ['Size', '5'],
        ['Build', 'Stitched panels'],
        ['Best for', 'Grass, turf, and school matches']
      ]
    },
    'football-boots': {
      category: 'Football',
      lead: 'Firm-ground football boots with moulded studs. The upper is light, and the sole grips a dry or damp grass pitch.',
      specs: [
        ['Surface', 'Firm ground'],
        ['Studs', 'Moulded'],
        ['Closure', 'Lace-up'],
        ['Note', 'Sizes confirmed at the store']
      ]
    },
    'dunlop-tennis-ball': {
      category: 'Tennis',
      lead: 'A Dunlop tennis ball for practice and club play. The felt cover keeps a predictable bounce on a hard court.',
      specs: [
        ['Brand', 'Dunlop'],
        ['Type', 'Pressurised felt ball'],
        ['Colour', 'Optic yellow'],
        ['Best for', 'Practice and club tennis']
      ]
    },
    'tennis-racket': {
      category: 'Tennis',
      lead: 'A pre-strung aluminium tennis racket for beginners and club players. The head is balanced for control on the first serve.',
      specs: [
        ['Frame', 'Aluminium'],
        ['Strings', 'Pre-strung'],
        ['Grip', 'Cushion wrap'],
        ['Best for', 'Beginners and club play']
      ]
    },
    'yonex-badminton-racket': {
      category: 'Badminton',
      lead: 'A Yonex badminton racket with a light frame and a strung head. It suits singles and doubles, from school courts to clubs.',
      specs: [
        ['Brand', 'Yonex'],
        ['Frame', 'Light graphite-feel frame'],
        ['Strings', 'Pre-strung'],
        ['Best for', 'Singles and doubles']
      ]
    },
    'feather-shuttlecocks': {
      category: 'Badminton',
      lead: 'A tube of feather shuttlecocks for match play. They fly slower than nylon shuttles and are the usual choice for tournaments.',
      specs: [
        ['Type', 'Goose-feather skirt'],
        ['Base', 'Cork'],
        ['Pack', 'Tube'],
        ['Best for', 'Indoor match play']
      ]
    },
    'badminton-set': {
      category: 'Badminton',
      lead: 'A ready pair of rackets with shuttlecocks, so two people can start a game without buying each piece separately.',
      specs: [
        ['Includes', '2 rackets and shuttlecocks'],
        ['Strings', 'Pre-strung'],
        ['Best for', 'Home, school, and casual games']
      ]
    },
    'sports-backpack': {
      category: 'Accessories',
      lead: 'A sports backpack with a padded laptop sleeve and a wet pocket for shoes or a kit. The shoulder straps are padded for a full kit.',
      specs: [
        ['Pockets', 'Main, front, and side'],
        ['Sleeve', 'Fits a laptop'],
        ['Straps', 'Padded, adjustable'],
        ['Best for', 'Kit, school, and travel']
      ]
    },
    'champion-trophy': {
      category: 'Trophies',
      lead: 'A gold-cup trophy on a black base. The plate can be engraved with the event name, year, and winner.',
      specs: [
        ['Finish', 'Gold cup'],
        ['Base', 'Black pedestal'],
        ['Plate', 'Engraving space on the front'],
        ['Best for', 'School and club prize-giving']
      ]
    },
    'boxing-gloves': {
      category: 'Boxing',
      lead: 'A pair of training gloves with thick foam over the knuckle and a wide wrist strap. Use them on a bag or for pad work.',
      specs: [
        ['Sold as', 'One pair'],
        ['Padding', 'Multi-layer foam'],
        ['Closure', 'Hook-and-loop wrist strap'],
        ['Best for', 'Bag work and pad training']
      ]
    },
    basketball: {
      category: 'Other Sports',
      lead: 'An outdoor rubber basketball with deep channels. The cover grips in dry weather and stands up to concrete courts.',
      specs: [
        ['Size', '7'],
        ['Cover', 'Rubber'],
        ['Best for', 'Outdoor courts']
      ]
    },
    'basketball-volleyball': {
      category: 'Other Sports',
      lead: 'One basketball and one volleyball, sold together. Useful for a school, a club, or a ground that needs both games.',
      specs: [
        ['Includes', '1 basketball and 1 volleyball'],
        ['Basketball', 'Outdoor rubber, size 7'],
        ['Volleyball', 'Soft-touch training ball'],
        ['Best for', 'Schools and multi-sport clubs']
      ]
    }
  };

  const overlay = document.createElement('div');
  overlay.className = 'product-overlay';
  overlay.hidden = false;

  const drawer = document.createElement('aside');
  drawer.className = 'product-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-labelledby', 'productDrawerTitle');
  drawer.innerHTML = `
    <div class="product-drawer-top">
      <p class="product-drawer-eyebrow">Product details</p>
      <button type="button" class="product-drawer-close" data-pd-close aria-label="Close product details">
        <i class="ri-close-line" aria-hidden="true"></i>
      </button>
    </div>
    <div class="product-drawer-body">
      <div class="product-drawer-photo"><img alt="" width="1024" height="1024"></div>
      <p class="product-drawer-cat" data-pd-cat></p>
      <h2 class="product-drawer-title" id="productDrawerTitle"></h2>
      <p class="product-drawer-price" data-pd-price></p>
      <p class="product-drawer-lead" data-pd-lead></p>
      <h3 class="product-drawer-specs-title">Details</h3>
      <dl class="product-specs" data-pd-specs></dl>
      <p class="product-drawer-note">Ask for this item at Stall No. 3, Satish Samanta Marketing Complex, Mahishadal. Sizes and stock are confirmed in the shop.</p>
      <div class="product-drawer-actions">
        <a class="product-drawer-call" href="tel:9732800416"><i class="ri-phone-fill" aria-hidden="true"></i> Call store</a>
        <a class="product-drawer-wa" data-pd-wa href="https://wa.me/918637506933" target="_blank" rel="noopener noreferrer"><i class="ri-whatsapp-fill" aria-hidden="true"></i> WhatsApp</a>
        <button type="button" class="product-drawer-buy" data-pd-buy><i class="ri-shopping-bag-3-line" aria-hidden="true"></i> Buy now</button>
      </div>
    </div>
  `;
  document.body.append(overlay, drawer);
  drawer.inert = true;

  const drawerImg = drawer.querySelector('img');
  const drawerCat = drawer.querySelector('[data-pd-cat]');
  const drawerTitle = drawer.querySelector('#productDrawerTitle');
  const drawerPrice = drawer.querySelector('[data-pd-price]');
  const drawerLead = drawer.querySelector('[data-pd-lead]');
  const drawerSpecs = drawer.querySelector('[data-pd-specs]');
  const drawerWa = drawer.querySelector('[data-pd-wa]');
  const drawerBuy = drawer.querySelector('[data-pd-buy]');
  const drawerClose = drawer.querySelector('[data-pd-close]');
  let lastFocus = null;
  let inquiryReturn = null;
  let currentPrice = '';

  const inquiryOverlay = document.createElement('div');
  inquiryOverlay.className = 'inquiry-overlay';
  inquiryOverlay.hidden = true;

  const inquiry = document.createElement('div');
  inquiry.className = 'inquiry';
  inquiry.setAttribute('role', 'dialog');
  inquiry.setAttribute('aria-modal', 'true');
  inquiry.setAttribute('aria-labelledby', 'inquiryTitle');
  inquiry.hidden = true;
  inquiry.innerHTML = `
    <div class="inquiry-top">
      <div>
        <h2 class="inquiry-title" id="inquiryTitle">Product inquiry</h2>
        <p class="inquiry-lead">Tell us how to reach you. The shop gets this message on WhatsApp.</p>
      </div>
      <button type="button" class="inquiry-close" data-inquiry-close aria-label="Close inquiry form">
        <i class="ri-close-line" aria-hidden="true"></i>
      </button>
    </div>
    <form class="inquiry-form" novalidate>
      <label>Name
        <input name="name" type="text" autocomplete="name" required maxlength="80">
      </label>
      <label>Phone number
        <input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="16" placeholder="10-digit mobile number">
      </label>
      <label>Product name
        <input name="product" type="text" readonly>
      </label>
      <label>Note
        <textarea name="note" rows="3" maxlength="500" placeholder="Size, colour, or anything the shop should know"></textarea>
      </label>
      <p class="inquiry-error" data-inquiry-error hidden></p>
      <div class="inquiry-actions">
        <button type="button" class="inquiry-cancel" data-inquiry-close>Cancel</button>
        <button type="submit" class="inquiry-send">Send inquiry</button>
      </div>
    </form>
    <div class="inquiry-done" data-inquiry-done hidden>
      <p>Your inquiry is ready. Send it on WhatsApp so the shop can confirm stock and price.</p>
      <a class="inquiry-wa" data-inquiry-wa target="_blank" rel="noopener noreferrer" href="https://wa.me/918637506933"><i class="ri-whatsapp-fill" aria-hidden="true"></i> Open WhatsApp</a>
    </div>
  `;
  document.body.append(inquiryOverlay, inquiry);
  inquiry.inert = true;

  const inquiryForm = inquiry.querySelector('form');
  const inquiryError = inquiry.querySelector('[data-inquiry-error]');
  const inquiryDone = inquiry.querySelector('[data-inquiry-done]');
  const inquiryWa = inquiry.querySelector('[data-inquiry-wa]');
  const inquiryName = inquiryForm.elements.name;
  const inquiryPhone = inquiryForm.elements.phone;
  const inquiryProduct = inquiryForm.elements.product;
  const inquiryNote = inquiryForm.elements.note;

  const closeInquiry = () => {
    if (inquiry.hidden) return;
    inquiry.hidden = true;
    inquiryOverlay.hidden = true;
    inquiry.setAttribute('aria-hidden', 'true');
    inquiry.inert = true;
    if (inquiryReturn && typeof inquiryReturn.focus === 'function') inquiryReturn.focus();
  };

  const openInquiry = (productName, price) => {
    inquiryForm.hidden = false;
    inquiryDone.hidden = true;
    inquiryError.hidden = true;
    inquiryError.textContent = '';
    inquiryProduct.value = productName || drawerTitle.textContent;
    if (price) currentPrice = price;
    inquiryNote.value = '';
    inquiry.hidden = false;
    inquiryOverlay.hidden = false;
    inquiry.setAttribute('aria-hidden', 'false');
    inquiry.inert = false;
    inquiryReturn = document.activeElement;
    inquiryName.focus();
  };

  const setProductParam = (id) => {
    const next = new URL(window.location.href);
    if (id) next.searchParams.set('product', id);
    else next.searchParams.delete('product');
    window.history.replaceState({}, '', next);
  };

  const closeProduct = () => {
    closeInquiry();
    document.body.classList.remove('product-open');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.inert = true;
    setProductParam('');
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
  };

  const openProduct = (id, source) => {
    const info = products[id];
    const card = source || document.querySelector(`.product-card[data-id="${CSS.escape(id)}"]`);
    if (!info || !card) return;
    const img = card.querySelector('img');
    const name = card.dataset.name || card.querySelector('.product-name').textContent.trim();
    const price = card.querySelector('.product-price').textContent.trim();
    drawerImg.src = img ? img.getAttribute('src') : '';
    drawerImg.alt = img ? img.alt : name;
    drawerCat.textContent = info.category;
    drawerTitle.textContent = name;
    drawerPrice.textContent = price;
    drawerLead.textContent = info.lead;
    drawerSpecs.replaceChildren();
    info.specs.forEach(([label, value]) => {
      const row = document.createElement('div');
      row.className = 'product-spec-row';
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value;
      row.append(term, detail);
      drawerSpecs.append(row);
    });
    currentPrice = price;
    const message = `Hi, I want to know about ${name} (${price}).`;
    drawerWa.href = `https://wa.me/918637506933?text=${encodeURIComponent(message)}`;
    drawer.querySelector('.product-drawer-body').scrollTop = 0;
    lastFocus = document.activeElement;
    if (document.body.classList.contains('drawer-open')) closeDrawer();
    document.body.classList.add('product-open');
    drawer.setAttribute('aria-hidden', 'false');
    drawer.inert = false;
    setProductParam(id);
    drawerClose.focus();
  };

  document.querySelectorAll('.product-view').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      if (card && card.dataset.id) openProduct(card.dataset.id, card);
    });
  });

  drawerClose.addEventListener('click', closeProduct);
  overlay.addEventListener('click', closeProduct);
  drawerBuy.addEventListener('click', () => {
    openInquiry(drawerTitle.textContent.trim(), currentPrice);
  });
  document.querySelectorAll('.product-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const card = button.closest('.product-card');
      if (!card) return;
      const name = (card.dataset.name || card.querySelector('.product-name').textContent).trim();
      const price = card.querySelector('.product-price').textContent.trim();
      openInquiry(name, price);
    });
  });
  inquiryOverlay.addEventListener('click', closeInquiry);
  inquiry.querySelectorAll('[data-inquiry-close]').forEach((button) => {
    button.addEventListener('click', closeInquiry);
  });

  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inquiryName.value.trim();
    const phone = inquiryPhone.value.trim();
    const product = inquiryProduct.value.trim();
    const note = inquiryNote.value.trim();
    const digits = phone.replace(/\D/g, '');
    inquiryError.hidden = true;
    if (name.length < 2) {
      inquiryError.textContent = 'Enter your name.';
      inquiryError.hidden = false;
      inquiryName.focus();
      return;
    }
    if (digits.length < 10 || digits.length > 13) {
      inquiryError.textContent = 'Enter a valid phone number.';
      inquiryError.hidden = false;
      inquiryPhone.focus();
      return;
    }
    const lines = [
      'Product inquiry — Delta Sports Emporium',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Product: ${product}`,
      `Price: ${currentPrice}`,
      `Note: ${note || '—'}`
    ];
    const url = `https://wa.me/918637506933?text=${encodeURIComponent(lines.join('\n'))}`;
    inquiryWa.href = url;
    inquiryForm.hidden = true;
    inquiryDone.hidden = false;
    const opened = window.open(url, '_blank', 'noopener');
    if (!opened) inquiryWa.focus();
  });

  inquiry.addEventListener('keydown', (event) => {
    if (inquiry.hidden || event.key !== 'Tab') return;
    const items = [...inquiry.querySelectorAll('button, a, input, textarea')].filter((item) => !item.closest('[hidden]'));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  drawer.addEventListener('keydown', (event) => {
    if (!inquiry.hidden) return;
    if (event.key !== 'Tab' || !document.body.classList.contains('product-open')) return;
    const items = [...drawer.querySelectorAll('button, a')];
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const requested = new URLSearchParams(window.location.search).get('product');
  if (requested && products[requested]) openProduct(requested);

  // 4. Press Escape Key (Close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !inquiry.hidden) {
      closeInquiry();
      return;
    }
    if (e.key === 'Escape' && document.body.classList.contains('product-open')) {
      closeProduct();
      return;
    }
    if (e.key === 'Escape' && document.body.classList.contains('drawer-open')) {
      closeDrawer();
    }
  });

  // 5. Close drawer when a regular menu link is clicked
  const navLinks = document.querySelectorAll('.nav-menu-link:not(.dropdown-parent > a)');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isDrawerMode()) {
        closeDrawer();
      }
    });
  });

  // 6. Submenu accordion toggle in Drawer Menu (mobile/tablet/laptop)
  dropdownParents.forEach((parent) => {
    const toggleLink = parent.querySelector('a');
    if (toggleLink) {
      toggleLink.addEventListener('click', (e) => {
        if (isDrawerMode()) {
          e.preventDefault();
          parent.classList.toggle('dropdown-open');
        }
      });
    }
  });

  // 7. Auto close drawer when resizing from drawer mode to wide desktop
  window.addEventListener('resize', () => {
    if (!isDrawerMode() && document.body.classList.contains('drawer-open')) {
      closeDrawer();
    }
  });

  const catalog = document.querySelector('[data-catalog]');
  if (catalog) {
    const cards = [...catalog.querySelectorAll('[data-product]')];
    const filters = [...catalog.querySelectorAll('[data-filter]')];
    const input = catalog.querySelector('[data-catalog-search]');
    const empty = catalog.querySelector('[data-catalog-empty]');
    const count = catalog.querySelector('[data-catalog-count]');
    const headerForm = document.getElementById('site-search-form');
    const headerInput = document.getElementById('site-search');
    const params = new URLSearchParams(window.location.search);
    let category = params.get('cat') || 'all';

    if (params.get('q')) {
      if (input) input.value = params.get('q');
      if (headerInput) headerInput.value = params.get('q');
    }
    if (!filters.some((button) => button.dataset.filter === category)) {
      category = 'all';
    }

    const applyCatalog = () => {
      const query = (input ? input.value : '').trim().toLowerCase();
      let shown = 0;
      cards.forEach((card) => {
        const name = (card.dataset.name || '').toLowerCase();
        const matchesCategory = category === 'all' || card.dataset.category === category;
        const matchesQuery = !query || name.includes(query);
        const visible = matchesCategory && matchesQuery;
        card.hidden = !visible;
        if (visible) shown += 1;
      });
      filters.forEach((button) => {
        const on = button.dataset.filter === category;
        button.classList.toggle('is-on', on);
        button.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      if (count) {
        count.textContent = shown === 1 ? '1 product' : `${shown} products`;
      }
      if (empty) empty.hidden = shown !== 0;
    };

    filters.forEach((button) => {
      button.addEventListener('click', () => {
        category = button.dataset.filter;
        applyCatalog();
      });
    });

    if (input) {
      input.addEventListener('input', () => {
        if (headerInput) headerInput.value = input.value;
        applyCatalog();
      });
    }

    if (headerInput) {
      headerInput.addEventListener('input', () => {
        if (input) input.value = headerInput.value;
        applyCatalog();
      });
    }

    if (headerForm) {
      headerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input && headerInput) input.value = headerInput.value;
        applyCatalog();
        catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    const writeUrl = () => {
      const next = new URL(window.location.href);
      const query = input ? input.value.trim() : '';
      if (category && category !== 'all') next.searchParams.set('cat', category);
      else next.searchParams.delete('cat');
      if (query) next.searchParams.set('q', query);
      else next.searchParams.delete('q');
      window.history.replaceState({}, '', next);
    };

    filters.forEach((button) => {
      button.addEventListener('click', () => {
        writeUrl();
      });
    });

    document.querySelectorAll('a[href*="products.html?cat="]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const url = new URL(link.href, window.location.href);
        if (url.pathname !== window.location.pathname) return;
        event.preventDefault();
        category = url.searchParams.get('cat') || 'all';
        applyCatalog();
        writeUrl();
        closeDrawer();
        catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    window.addEventListener('popstate', () => {
      const nextParams = new URLSearchParams(window.location.search);
      category = nextParams.get('cat') || 'all';
      if (!filters.some((button) => button.dataset.filter === category)) {
        category = 'all';
      }
      const query = nextParams.get('q') || '';
      if (input) input.value = query;
      if (headerInput) headerInput.value = query;
      applyCatalog();
    });

    applyCatalog();
  }

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const contactError = document.querySelector('[data-contact-error]');
    const contactDone = document.querySelector('[data-contact-done]');
    const contactWa = document.querySelector('[data-contact-wa]');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = contactForm.elements.name.value.trim();
      const phone = contactForm.elements.phone.value.trim();
      const note = contactForm.elements.note.value.trim();
      const digits = phone.replace(/\D/g, '');
      contactError.hidden = true;
      if (name.length < 2) {
        contactError.textContent = 'Enter your name.';
        contactError.hidden = false;
        contactForm.elements.name.focus();
        return;
      }
      if (digits.length < 10 || digits.length > 13) {
        contactError.textContent = 'Enter a valid phone number.';
        contactError.hidden = false;
        contactForm.elements.phone.focus();
        return;
      }
      if (note.length < 2) {
        contactError.textContent = 'Write a short message.';
        contactError.hidden = false;
        contactForm.elements.note.focus();
        return;
      }
      const lines = [
        'Message — Delta Sports Emporium',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Message: ${note}`
      ];
      const url = `https://wa.me/918637506933?text=${encodeURIComponent(lines.join('\n'))}`;
      contactWa.href = url;
      contactForm.hidden = true;
      contactDone.hidden = false;
      const opened = window.open(url, '_blank', 'noopener');
      if (!opened) contactWa.focus();
    });
  }

  const slider = document.querySelector('[data-hero-slider]');
  if (slider) {
    const track = slider.querySelector('.hero-track');
    const frames = [...slider.querySelectorAll('.hero-slide')];
    const slides = frames.filter((frame) => frame.hasAttribute('data-slide'));
    const dots = [...slider.querySelectorAll('.hero-dot')];
    const live = slider.querySelector('.hero-live');
    const prev = slider.querySelector('.hero-prev');
    const next = slider.querySelector('.hero-next');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = slides.length;
    let index = 1;
    let timer = 0;
    let touchX = 0;

    const realIndex = () => {
      if (index <= 0) return count - 1;
      if (index >= count + 1) return 0;
      return index - 1;
    };

    const mark = () => {
      const current = realIndex();
      frames.forEach((frame, i) => {
        frame.toggleAttribute('inert', i !== index);
      });
      dots.forEach((dot, i) => {
        const on = i === current;
        dot.classList.toggle('is-on', on);
        dot.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      if (live && slides[current]) {
        live.textContent = slides[current].getAttribute('aria-label') || '';
      }
    };

    const place = (nextIndex, animate) => {
      index = nextIndex;
      track.classList.toggle('is-instant', !animate);
      track.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
      if (!animate) track.getBoundingClientRect();
      track.classList.toggle('is-instant', false);
      mark();
    };

    const go = (nextIndex) => {
      place(nextIndex, !reduceMotion);
      if (reduceMotion && (index === 0 || index === count + 1)) {
        place(index === 0 ? count : 1, false);
      }
    };

    track.addEventListener('transitionend', (event) => {
      if (event.target !== track || event.propertyName !== 'transform') return;
      if (index === count + 1) place(1, false);
      else if (index === 0) place(count, false);
    });

    const stop = () => {
      window.clearInterval(timer);
      timer = 0;
    };

    const start = () => {
      stop();
      if (document.hidden) return;
      timer = window.setInterval(() => go(index + 1), 5000);
    };

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        go(i + 1);
        start();
      });
    });
    prev.addEventListener('click', () => {
      go(index - 1);
      start();
    });
    next.addEventListener('click', () => {
      go(index + 1);
      start();
    });

    slider.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        go(index + 1);
        start();
      } else if (event.key === 'ArrowLeft') {
        go(index - 1);
        start();
      }
    });

    slider.addEventListener('touchstart', (event) => {
      touchX = event.changedTouches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchend', (event) => {
      const delta = event.changedTouches[0].clientX - touchX;
      if (Math.abs(delta) > 40) {
        go(index + (delta < 0 ? 1 : -1));
        start();
      }
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });

    place(1, false);
    start();
  }
});
