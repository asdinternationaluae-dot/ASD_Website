document.addEventListener('DOMContentLoaded', () => {
  // Authentication
  const loginForm = document.getElementById('login-form');
  const loginSection = document.getElementById('login-section');
  const dashboardSection = document.getElementById('dashboard-section');
  const logoutBtn = document.getElementById('logout-btn');

  // Check login state
  if (sessionStorage.getItem('adminLoggedIn')) {
    showDashboard();
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email === 'fawzia@asdinternational.co' && password === 'asd@12345') {
      sessionStorage.setItem('adminLoggedIn', 'true');
      showDashboard();
    } else {
      document.getElementById('login-error').style.display = 'block';
    }
  });

  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('adminLoggedIn');
    dashboardSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
  });

  function showDashboard() {
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    loadMessages();
    loadProducts();
  }

  // Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.remove('hidden');
    });
  });

  // Messages
  function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('client_messages') || '[]');
    const list = document.getElementById('messages-list');
    list.innerHTML = '';
    if (messages.length === 0) {
      list.innerHTML = '<p>No messages received yet.</p>';
      return;
    }
    messages.slice().reverse().forEach((m, i) => {
      list.innerHTML += `
        <div class="message-card">
          <div class="flex-space" style="margin-bottom: 5px;">
            <strong>${m.name}</strong> <span>${new Date(m.date).toLocaleString()}</span>
          </div>
          <p><strong>Email:</strong> <a href="mailto:${m.email}">${m.email}</a> | <strong>Company:</strong> ${m.company} | <strong>Subject:</strong> ${m.subject}</p>
          <p style="margin-top: 10px; background: #f5f5f5; padding: 10px; border-radius: 4px;">${m.message}</p>
        </div>
      `;
    });
  }

  document.getElementById('clear-messages-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all messages?')) {
      localStorage.setItem('client_messages', '[]');
      loadMessages();
    }
  });

  // Products
  const productModal = document.getElementById('product-modal');
  const productForm = document.getElementById('product-form');

  function getProducts() {
    const defaultData = document.getElementById('products-data'); // we will read from index inline if possible, or initialize
    let prods = localStorage.getItem('asd_products');
    if (!prods) {
      // Setup some initial
      prods = JSON.stringify([]);
      localStorage.setItem('asd_products', prods);
    }
    return JSON.parse(prods);
  }

  function loadProducts() {
    const prods = getProducts();
    const tbody = document.getElementById('products-table-body');
    tbody.innerHTML = '';
    prods.forEach(p => {
      tbody.innerHTML += `
        <tr>
          <td><img src="${p.image}" width="50" height="50" style="object-fit: contain;"></td>
          <td>${p.name}</td>
          <td>${p.category}</td>
          <td>
            <button class="btn btn-primary" onclick="editProduct('${p.id}')" style="padding: 5px 10px; font-size: 12px;">Edit</button>
            <button class="btn btn-ghost" onclick="deleteProduct('${p.id}')" style="padding: 5px 10px; font-size: 12px; color: red;">Delete</button>
          </td>
        </tr>
      `;
    });
  }

  document.getElementById('add-product-btn').addEventListener('click', () => {
    productForm.reset();
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-image').value = '';
    document.getElementById('prod-image-preview').style.display = 'none';
    document.getElementById('modal-title').textContent = 'Add Product';
    productModal.classList.remove('hidden');
  });

  document.getElementById('close-modal-btn').addEventListener('click', () => {
    productModal.classList.add('hidden');
  });

  // Image upload
  document.getElementById('prod-image-file').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('prod-image').value = e.target.result;
        const preview = document.getElementById('prod-image-preview');
        preview.src = e.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const prods = getProducts();
    const idVal = document.getElementById('prod-id').value;
    
    const product = {
      id: idVal || 'prod-' + Date.now(),
      name: document.getElementById('prod-name').value,
      category: document.getElementById('prod-category').value,
      description: document.getElementById('prod-desc').value,
      active_ingredients: document.getElementById('prod-ingredients').value,
      recommended_dose: document.getElementById('prod-dose').value,
      details: document.getElementById('prod-details').value,
      tags: document.getElementById('prod-tags').value.split(',').map(t => t.trim()).filter(Boolean),
      image: document.getElementById('prod-image').value || 'assets/ASD-LOGO.png'
    };

    if (idVal) {
      const idx = prods.findIndex(p => p.id === idVal);
      if (idx > -1) prods[idx] = product;
    } else {
      prods.push(product);
    }

    localStorage.setItem('asd_products', JSON.stringify(prods));
    productModal.classList.add('hidden');
    loadProducts();
  });

  window.editProduct = function(id) {
    const prods = getProducts();
    const p = prods.find(x => x.id === id);
    if (!p) return;
    document.getElementById('prod-id').value = p.id;
    document.getElementById('prod-name').value = p.name || '';
    document.getElementById('prod-category').value = p.category || '';
    document.getElementById('prod-desc').value = p.description || '';
    document.getElementById('prod-ingredients').value = p.active_ingredients || '';
    document.getElementById('prod-dose').value = p.recommended_dose || '';
    document.getElementById('prod-details').value = p.details || '';
    document.getElementById('prod-tags').value = (p.tags || []).join(', ');
    document.getElementById('prod-image').value = p.image || '';
    if (p.image) {
      document.getElementById('prod-image-preview').src = p.image;
      document.getElementById('prod-image-preview').style.display = 'block';
    } else {
      document.getElementById('prod-image-preview').style.display = 'none';
    }
    document.getElementById('modal-title').textContent = 'Edit Product';
    productModal.classList.remove('hidden');
  };

  window.deleteProduct = function(id) {
    if (confirm('Delete this product?')) {
      let prods = getProducts();
      prods = prods.filter(p => p.id !== id);
      localStorage.setItem('asd_products', JSON.stringify(prods));
      loadProducts();
    }
  };
});
