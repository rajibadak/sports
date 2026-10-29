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

  // 4. Press Escape Key (Close)
  document.addEventListener('keydown', (e) => {
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

  // 8. Search Form Handler
  const searchForm = document.querySelector('.search-box');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = searchForm.querySelector('.search-text-field');
      if (input && input.value.trim()) {
        console.log('Search query:', input.value.trim());
      }
    });
  }
});
