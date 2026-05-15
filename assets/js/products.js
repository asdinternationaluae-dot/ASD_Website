/**
 * products.js — Products catalog: render, filter, search, paginate
 */
document.addEventListener('DOMContentLoaded', () => {
  const dataEl = document.getElementById('products-data');
  if (!dataEl) return;

  let products = [];
  try {
    products = JSON.parse(localStorage.getItem('asd_products'));
    if (!products || products.length === 0) {
      products = JSON.parse(dataEl.textContent);
      localStorage.setItem('asd_products', JSON.stringify(products));
    }
  } catch (e) {
    try { products = JSON.parse(dataEl.textContent); } catch (err) { }
  }

  const grid = document.getElementById('product-grid');
  const pillsContainer = document.getElementById('filter-pills');
  const searchInput = document.getElementById('product-search');
  const emptyState = document.getElementById('empty-state');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const loadMoreWrap = document.getElementById('load-more');

  let activeCategory = 'All';
  let searchQuery = '';
  let visibleCount = 12;

  // Extract unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Render filter pills
  function renderPills() {
    if (!pillsContainer) return;
    pillsContainer.innerHTML = categories.map(cat =>
      `<button class="filter-pill${cat === activeCategory ? ' active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    pillsContainer.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        activeCategory = pill.dataset.category;
        visibleCount = 12;
        renderPills();
        renderGrid();
        // Sync URL hash
        if (activeCategory !== 'All') {
          history.replaceState(null, '', '#' + encodeURIComponent(activeCategory));
        } else {
          history.replaceState(null, '', window.location.pathname);
        }
      });
    });
  }

  // Generate product card HTML
  function generateProductCard(product) {
    return `
      <article class="product-card tilt-container" data-reveal>
        <a href="product-detail.html#${product.id}" class="product-card__overlay-link" aria-label="View ${product.name}"></a>
        <div class="product-card__image tilt-inner">
          <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" width="400" height="300">
        </div>
        <div class="product-card__body">
          <span class="product-card__badge">${product.category}</span>
          <h3 class="product-card__name">${product.name}</h3>
          <p class="product-card__desc">${product.description}</p>
          <div class="product-card__link">
            <span class="link-arrow">View Details <i data-lucide="arrow-right" width="16" height="16"></i></span>
          </div>
        </div>
      </article>
    `;
  }

  // Filter products
  function getFiltered() {
    return products.filter(p => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.tags && p.tags.some(t => t.toLowerCase().includes(q)));
      return matchesCat && matchesSearch;
    });
  }

  // Render grid
  function renderGrid() {
    if (!grid) return;
    const filtered = getFiltered();
    const visible = filtered.slice(0, visibleCount);

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      if (loadMoreWrap) loadMoreWrap.style.display = 'none';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      grid.innerHTML = visible.map(generateProductCard).join('');
      if (loadMoreWrap) {
        loadMoreWrap.style.display = filtered.length > visibleCount ? 'block' : 'none';
      }
    }

    // Re-init icons and reveal
    if (typeof lucide !== 'undefined') lucide.createIcons();
    if (window.initTilt) window.initTilt('.tilt-container');

    // Re-observe reveal elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.15 });
    grid.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }

  // Search debounce
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchQuery = searchInput.value;
        visibleCount = 12;
        renderGrid();
      }, 200);
    });
  }

  // Load more
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 12;
      renderGrid();
    });
  }

  // Clear filters button
  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      activeCategory = 'All';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      visibleCount = 12;
      renderPills();
      renderGrid();
    });
  }

  // Read hash on load for category filter
  const hash = decodeURIComponent(window.location.hash.slice(1));
  if (hash && categories.includes(hash)) {
    activeCategory = hash;
  }

  renderPills();
  renderGrid();
});
