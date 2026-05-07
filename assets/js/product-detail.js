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
        <div class="detail-hero">
          <div class="detail-hero__image" data-reveal>
            <img src="${product.image}" alt="${product.name}" width="600" height="450" loading="eager" decoding="async">
            <h1 class="detail-hero__name detail-hero__mobile-title">${product.name}</h1>
          </div>
          <div class="detail-hero__info" data-reveal data-delay="1">
            <span class="product-card__badge">${product.category}</span>
            <h1 class="detail-hero__name">${product.name}</h1>
            <p class="detail-hero__desc">${product.description}</p>
            <div class="detail-divider"></div>
            
            <div class="detail-hero__actions">
              <a href="contact.html" class="btn btn-primary">Request Information</a>
              <a href="products.html" class="btn btn-ghost">← Back to Products</a>
            </div>
          </div>
        </div>

        <div class="detail-cards" data-reveal>
          <div class="detail-card">
            <h3><i data-lucide="flask-conical"></i> Active Ingredients</h3>
            <p>${product.active_ingredients}</p>
          </div>
          
          <div class="detail-card">
            <h3><i data-lucide="check-circle"></i> Key Benefits</h3>
            <div class="benefits-list" style="margin-top:var(--space-2);">
              ${product.details.split('\n').filter(l => l.trim().startsWith('-')).map(l => `
                <div style="display:flex;gap:10px;margin-bottom:8px;font-size:var(--text-sm);color:var(--color-text-muted);">
                  <i data-lucide="check" width="16" height="16" style="color:var(--color-primary);flex-shrink:0;"></i>
                  <span>${l.trim().slice(1).trim()}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="detail-card">
            <h3><i data-lucide="pill"></i> Recommended Dose</h3>
            <p>${product.recommended_dose}</p>
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
                  <article class="product-card" data-reveal>
                    <a href="product-detail.html#${p.id}" class="product-card__overlay-link" onclick="setTimeout(() => window.location.reload(), 10)"></a>
                    <div class="product-card__image">
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
