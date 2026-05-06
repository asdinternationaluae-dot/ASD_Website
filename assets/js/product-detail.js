/**
 * product-detail.js — Renders single product from URL hash
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
    try { products = JSON.parse(dataEl.textContent); } catch(err) {}
  }

  const productId = window.location.hash.slice(1);
  const container = document.getElementById('product-detail');
  const errorState = document.getElementById('product-not-found');
  const relatedContainer = document.getElementById('related-products');
  const breadcrumbName = document.getElementById('breadcrumb-product-name');

  if (!productId || !container) {
    if (errorState) errorState.style.display = 'block';
    if (container) container.style.display = 'none';
    return;
  }

  const product = products.find(p => p.id === productId);

  if (!product) {
    if (errorState) errorState.style.display = 'block';
    if (container) container.style.display = 'none';
    return;
  }

  // Update page title
  document.title = `${product.name} — ASD International`;

  // Update breadcrumb
  if (breadcrumbName) breadcrumbName.textContent = product.name;

  // Format details (handle bullet points)
  function formatBenefitsCards(details) {
    if (!details) return '';
    const lines = details.split('\n').filter(l => l.trim());
    const bullets = lines.filter(l => l.trim().startsWith('-') || l.trim().startsWith('•'));
    if (bullets.length > 0) {
      return '<div class="benefits-grid">' + bullets.map(l => {
        const text = l.replace(/^[-•]\s*/, '').trim();
        return `<div class="benefit-card"><i data-lucide="zap" width="16" height="16"></i><span>${text}</span></div>`;
      }).join('') + '</div>';
    }
    return `<div class="benefit-card"><p>${details}</p></div>`;
  }

  // Render product
  container.innerHTML = `
    <div class="detail-hero__left">
      <div class="detail-hero__image" data-reveal>
        <img src="${product.image}" alt="${product.name}" width="600" height="450" loading="eager" decoding="async">
      </div>
      <div class="detail-hero__benefits" data-reveal>
        <h3 class="futuristic-heading"><i data-lucide="check-circle" width="20" height="20"></i> Key Benefits</h3>
        ${formatBenefitsCards(product.details)}
      </div>
    </div>
    <div class="detail-hero__info" data-reveal data-delay="1">
      <span class="product-card__badge">${product.category}</span>
      <h1 class="detail-hero__name">${product.name}</h1>
      <p class="detail-hero__desc">${product.description}</p>
      <div class="detail-divider"></div>
      <div class="detail-hero__details">
        <h3 class="futuristic-heading"><i data-lucide="info" width="20" height="20"></i> Product Description</h3>
        <p>${product.description}</p>
        <h3 class="futuristic-heading"><i data-lucide="flask-conical" width="20" height="20"></i> Active Ingredients</h3>
        <p>${product.active_ingredients}</p>
        <h3 class="futuristic-heading"><i data-lucide="pill" width="20" height="20"></i> Recommended Dose</h3>
        <p>${product.recommended_dose}</p>
      </div>
      <div class="detail-hero__actions">
        <a href="contact.html" class="btn btn-primary">Request Information</a>
        <a href="products.html" class="btn btn-ghost">← Back to Products</a>
      </div>
    </div>
  `;



  // Re-init
  if (typeof lucide !== 'undefined') lucide.createIcons();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
});
