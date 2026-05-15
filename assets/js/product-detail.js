/**
 * product-detail.js — Renders single product from URL hash
 */
const dataEl = document.getElementById('products-data');
if (dataEl) {
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

  const productId = window.location.hash.slice(1);
  const container = document.getElementById('product-detail');
  const errorState = document.getElementById('product-not-found');
  const relatedContainer = document.getElementById('related-products');
  const breadcrumbName = document.getElementById('breadcrumb-product-name');

  if (productId && container) {
    const product = products.find(p => p.id === productId);

    if (product) {
      document.title = `${product.name} — ASD International`;
      if (breadcrumbName) breadcrumbName.textContent = product.name;
      container.innerHTML = `
        <div class="product-hero">
          <div class="product-hero__main">
            <div class="product-visual tilt-container" data-reveal>
              <div class="product-visual__bg"></div>
              
              <!-- Floating 3D Shapes -->
              <div class="floating-shape shape-1"></div>
              <div class="floating-shape shape-2"></div>
              <div class="floating-shape shape-3"></div>

              <div class="product-image-3d tilt-inner">
                <img src="${product.image}" alt="${product.name}" loading="eager">
              </div>
            </div>
            
            <div class="product-info" data-reveal data-delay="1">
              <div class="product-badge">${product.category}</div>
              <h1 class="product-title">${product.name}</h1>
              <p class="product-tagline">${product.description}</p>
              
              <div class="detail-hero__actions">
                <a href="contact.html?product=${product.id}" class="btn btn-primary btn-lg">Request Information</a>
                <a href="products.html" class="btn btn-ghost">← All Products</a>
              </div>
            </div>
          </div>

          <div class="product-science" data-reveal data-delay="2">
            <div class="science-card">
              <div class="science-card__icon"><i data-lucide="flask-conical"></i></div>
              <h3 class="science-card__title">Active Ingredients</h3>
              <div class="science-card__content">${product.active_ingredients}</div>
            </div>
            
            <div class="science-card">
              <div class="science-card__icon"><i data-lucide="zap"></i></div>
              <h3 class="science-card__title">Key Benefits</h3>
              <div class="science-card__content">
                <ul style="list-style:none; padding:0;">
                  ${product.details.split('\n').filter(l => l.trim().startsWith('-')).map(l => `
                    <li style="display:flex; gap:8px; margin-bottom:8px;">
                      <i data-lucide="check" width="16" style="color:var(--color-primary);flex-shrink:0;margin-top:2px;"></i>
                      <span>${l.trim().slice(1).trim()}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <div class="science-card">
              <div class="science-card__icon"><i data-lucide="pill"></i></div>
              <h3 class="science-card__title">Dosage</h3>
              <div class="science-card__content">${product.recommended_dose}</div>
            </div>
          </div>
        </div>
      `;

      // Related products
      if (relatedContainer) {
        const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        if (related.length > 0) {
          relatedContainer.innerHTML = `
            <div class="container">
              <h2 class="section-title">Related Products</h2>
              <div class="product-grid">
                ${related.map(p => `
                  <article class="product-card tilt-container" data-reveal>
                    <a href="product-detail.html#${p.id}" class="product-card__overlay-link" onclick="setTimeout(() => window.location.reload(), 10)"></a>
                    <div class="product-card__image tilt-inner">
                      <img src="${p.image}" alt="${p.name}">
                    </div>
                    <div class="product-card__body">
                      <span class="product-card__badge">${p.category}</span>
                      <h3 class="product-card__name">${p.name}</h3>
                    </div>
                  </article>
                `).join('')}
              </div>
            </div>
          `;
        }
      }

      // Re-init
      if (typeof lucide !== 'undefined') lucide.createIcons();
      if (window.initTilt) window.initTilt('.tilt-container');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
      }, { threshold: 0.15 });
      document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    } else {
      if (errorState) errorState.style.display = 'block';
      if (container) container.style.display = 'none';
    }
  } else {
    if (errorState) errorState.style.display = 'block';
    if (container) container.style.display = 'none';
  }
}
