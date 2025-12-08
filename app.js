const STORAGE_KEYS = {
  dishes: 'freshbite:dishes',
  cart: 'freshbite:cart',
  auth: 'freshbite:auth',
  orders: 'freshbite:orders',
  restaurantStatus: 'freshbite:restaurantStatus',
  users: 'Arusuvai:users', // Separate database for users
  favorites: 'Arusuvai:favorites', // User favorites
};

// Users database structure
// Stored as: { email: { email, password, role, createdAt } }

const defaultDishes = [
  {
    id: crypto.randomUUID(),
    name: 'Idly',
    price: 40,
    image: 'images/idly.jpg',
    description: 'Soft, fluffy, and fermented steamed rice cakes. A healthy, probiotic-rich breakfast served with sambar and chutney.',
    ingredients: 'Rice, Urad Dal, Fenugreek Seeds, Salt, Water',
    nutrition: {
      'Calories': '58 kcal',
      'Protein': '2g',
      'Carbs': '12g',
      'Fat': '0.2g',
      'Fiber': '1g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Dosa',
    price: 60,
    image: 'images/dosa.jpg',
    description: 'Crispy, golden-brown fermented crepe made from rice and lentil batter. A classic South Indian delicacy.',
    ingredients: 'Rice, Urad Dal, Fenugreek Seeds, Salt, Oil',
    nutrition: {
      'Calories': '133 kcal',
      'Protein': '4g',
      'Carbs': '27g',
      'Fat': '3g',
      'Fiber': '2g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Parotta',
    price: 50,
    image: 'images/Parotta.jpg',
    description: 'Flaky, layered flatbread made from refined wheat flour, popular in South India. Best enjoyed with salna or spicy curry.',
    ingredients: 'Maida, Oil, Salt, Water, Sugar',
    nutrition: {
      'Calories': '300 kcal',
      'Protein': '6g',
      'Carbs': '40g',
      'Fat': '12g',
      'Fiber': '1g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Kothu Parotta',
    price: 80,
    image: 'images/Kothuparotta.jpg',
    description: 'A famous street food delicacy. Minced parotta stir-fried with spicy salna, eggs, onions, and tomatoes.',
    ingredients: 'Parotta, Egg, Onion, Tomato, Spices, Salna, Curry Leaves',
    nutrition: {
      'Calories': '450 kcal',
      'Protein': '15g',
      'Carbs': '45g',
      'Fat': '20g',
      'Fiber': '3g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Veechu',
    price: 120,
    image: 'images/veechu.jpg',
    description: 'Thin, large, and crispy layered parotta, skillfully stretched and folded. Served with spicy gravy.',
    ingredients: 'Maida, Oil, Salt, Egg (optional)',
    nutrition: {
      'Calories': '350 kcal',
      'Protein': '7g',
      'Carbs': '40g',
      'Fat': '15g',
      'Fiber': '1g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Chicken Chettinad',
    price: 180,
    image: 'images/chickenchettinad.jpg',
    description: 'A classic South Indian delicacy. Chicken simmered in a spicy, aromatic gravy made with fresh ground roasted spices and coconut.',
    ingredients: 'Chicken, Chettinad Masala, Coconut, Onion, Tomato, Curry Leaves, Fennel Seeds',
    nutrition: {
      'Calories': '320 kcal',
      'Protein': '25g',
      'Carbs': '10g',
      'Fat': '18g',
      'Fiber': '2g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Egg Dosa',
    price: 70,
    image: 'images/eggdosa.jpg',
    description: 'Savory dosa topped with a beaten egg and black pepper. A protein-packed breakfast option.',
    ingredients: 'Rice Batter, Egg, Black Pepper, Salt, Oil',
    nutrition: {
      'Calories': '180 kcal',
      'Protein': '9g',
      'Carbs': '20g',
      'Fat': '8g',
      'Fiber': '1g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Uthappam',
    price: 65,
    image: 'images/uthappam.jpg',
    description: 'Thick, soft pancake made from fermented rice and lentil batter, topped with onions, tomatoes, and green chilies.',
    ingredients: 'Rice Batter, Onion, Tomato, Green Chili, Coriander, Oil',
    nutrition: {
      'Calories': '180 kcal',
      'Protein': '5g',
      'Carbs': '30g',
      'Fat': '4g',
      'Fiber': '3g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Butter Chicken',
    price: 200,
    image: 'images/butterchicken.jpg',
    description: 'Tender chicken pieces cooked in a rich, creamy, and buttery tomato-based gravy with a hint of dried fenugreek leaves.',
    ingredients: 'Chicken, Butter, Cream, Tomato, Cashews, Kasuri Methi, Spices',
    nutrition: {
      'Calories': '400 kcal',
      'Protein': '22g',
      'Carbs': '15g',
      'Fat': '25g',
      'Fiber': '1g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Chicken Manchurian',
    price: 170,
    image: 'images/chickenmanchurian.jpg',
    description: 'Crispy fried chicken chunks tossed in a spicy, tangy, and savory Indo-Chinese sauce.',
    ingredients: 'Chicken, Soy Sauce, Cornflour, Garlic, Ginger, Green Chili, Spring Onion',
    nutrition: {
      'Calories': '290 kcal',
      'Protein': '18g',
      'Carbs': '25g',
      'Fat': '14g',
      'Fiber': '2g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Chicken Noodles',
    price: 150,
    image: 'images/chickennoodles.jpg',
    description: 'Stir-fried noodles with tender chicken pieces and crunchy vegetables, seasoned with soy sauce.',
    ingredients: 'Noodles, Chicken, Cabbage, Carrot, Capsicum, Soy Sauce, Pepper',
    nutrition: {
      'Calories': '350 kcal',
      'Protein': '20g',
      'Carbs': '45g',
      'Fat': '10g',
      'Fiber': '4g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Chicken Pallipalayam',
    price: 190,
    image: 'images/chickenpallipalayam.jpg',
    description: 'Traditional Kongu Nadu style chicken dish made with shallots, red chilies, and coconut slivers. No masala powders used.',
    ingredients: 'Chicken, Shallots, Dried Red Chili, Coconut, Garlic, Turmeric',
    nutrition: {
      'Calories': '280 kcal',
      'Protein': '24g',
      'Carbs': '8g',
      'Fat': '16g',
      'Fiber': '2g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Chicken Rice',
    price: 160,
    image: 'images/chickenrice.jpg',
    description: 'Flavorful fried rice cooked with succulent chicken pieces, eggs, and fresh vegetables.',
    ingredients: 'Rice, Chicken, Egg, Carrot, Beans, Spring Onion, Soy Sauce',
    nutrition: {
      'Calories': '480 kcal',
      'Protein': '20g',
      'Carbs': '55g',
      'Fat': '18g',
      'Fiber': '3g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Chicken Tikka',
    price: 210,
    image: 'images/chickentikka.jpg',
    description: 'Boneless chicken chunks marinated in yogurt and spices, then grilled to perfection in a tandoor.',
    ingredients: 'Chicken, Yogurt, Ginger Garlic Paste, Lemon, Kashmiri Chili Powder, Garam Masala',
    nutrition: {
      'Calories': '260 kcal',
      'Protein': '30g',
      'Carbs': '5g',
      'Fat': '12g',
      'Fiber': '1g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Dragon Chicken',
    price: 200,
    image: 'images/dragonchicken.jpg',
    description: 'Spicy Indo-Chinese chicken dish with crunchy cashews and roasted red chilies in a savory sauce.',
    ingredients: 'Chicken, Cashews, Dried Red Chili, Soy Sauce, Tomato Sauce, Garlic',
    nutrition: {
      'Calories': '310 kcal',
      'Protein': '20g',
      'Carbs': '18g',
      'Fat': '16g',
      'Fiber': '1g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Gobi 65',
    price: 130,
    image: 'images/gobi65.jpg',
    description: 'Crispy, deep-fried cauliflower florets marinated in a spicy blend of masalas. A popular vegetarian starter.',
    ingredients: 'Cauliflower, Cornflour, Rice Flour, Red Chili Powder, Ginger Garlic Paste, Curry Leaves',
    nutrition: {
      'Calories': '220 kcal',
      'Protein': '6g',
      'Carbs': '25g',
      'Fat': '10g',
      'Fiber': '3g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Gobi Manchurian',
    price: 140,
    image: 'images/gobimanchirian.jpg',
    description: 'Fried cauliflower florets tossed in a spicy, sweet, and tangy Manchurian sauce.',
    ingredients: 'Cauliflower, Soy Sauce, Garlic, Ginger, Onion, Cornflour, Spring Onion',
    nutrition: {
      'Calories': '230 kcal',
      'Protein': '5g',
      'Carbs': '30g',
      'Fat': '10g',
      'Fiber': '3g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Grill',
    price: 220,
    image: 'images/grill.jpg',
    description: 'Juicy chicken pieces marinated with aromatic spices and grilled over an open flame for a smoky flavor.',
    ingredients: 'Chicken, Pepper, Lemon, Oil, Ginger Garlic Paste, Spices',
    nutrition: {
      'Calories': '280 kcal',
      'Protein': '30g',
      'Carbs': '2g',
      'Fat': '15g',
      'Fiber': '0g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Paneer Butter Masala',
    price: 180,
    image: 'images/paneerbuttermasala.jpg',
    description: 'Soft paneer cubes simmered in a rich, creamy, and mildly sweet tomato-cashew gravy.',
    ingredients: 'Paneer, Butter, Cream, Tomato, Cashew Paste, Kasuri Methi, Spices',
    nutrition: {
      'Calories': '380 kcal',
      'Protein': '14g',
      'Carbs': '18g',
      'Fat': '28g',
      'Fiber': '2g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Paneer Tikka',
    price: 170,
    image: 'images/paneertikka.jpg',
    description: 'Marinated paneer cubes grilled with bell peppers and onions. A smoky and flavorful vegetarian appetizer.',
    ingredients: 'Paneer, Yogurt, Capsicum, Onion, Tomato, Spices, Lemon',
    nutrition: {
      'Calories': '260 kcal',
      'Protein': '16g',
      'Carbs': '12g',
      'Fat': '18g',
      'Fiber': '2g'
    }
  },
  {
    id: crypto.randomUUID(),
    name: 'Roast',
    price: 190,
    image: 'images/Roasr.jpg',
    description: 'Spicy South Indian style roasted chicken with a rich masala coating. Best served with parotta or rice.',
    ingredients: 'Chicken, Red Chili, Garlic, Ginger, Curry Leaves, Oil, Spices',
    nutrition: {
      'Calories': '300 kcal',
      'Protein': '25g',
      'Carbs': '5g',
      'Fat': '20g',
      'Fiber': '1g'
    }
  },
];

const state = {
  dishes: [],
  cart: {},
  editingDishId: null,
  currentUser: null,
  currentRole: null,
  currentEmail: null,
  orders: [],
  restaurantOpen: false,
  salesChart: null,
  favorites: {},
  users: {},
};

const elements = {
  loginPage: document.getElementById('login-page'),
  appContainer: document.getElementById('app-container'),
  logoutBtn: document.getElementById('logout-btn'),
  navLinks: document.querySelectorAll('.nav-link'),
  navCartBtn: document.querySelector('.navbar__cart'),
  sections: document.querySelectorAll('.page-section'),
  menuGrid: document.getElementById('menu-grid'),
  cartCount: document.getElementById('cart-count'),
  cartItems: document.getElementById('cart-items'),
  cartTotal: document.getElementById('cart-total'),
  checkoutBtn: document.getElementById('checkout-btn'),
  toast: document.getElementById('toast'),
  year: document.getElementById('year'),
  dishForm: document.getElementById('dish-form'),
  dishIdField: document.getElementById('dish-id'),
  dishNameField: document.getElementById('dish-name'),
  dishPriceField: document.getElementById('dish-price'),
  dishImageField: document.getElementById('dish-image'),
  cancelEditBtn: document.getElementById('cancel-edit'),
  adminDishList: document.getElementById('admin-dish-list'),
  ordersList: document.getElementById('orders-list'),
  favoritesGrid: document.getElementById('favorites-grid'),
  loginForm: document.getElementById('login-form'),
  signupForm: document.getElementById('signup-form'),
  authTabs: document.querySelectorAll('.auth-tab'),
  restaurantStatus: document.getElementById('restaurant-status'),
  toggleRestaurantBtn: document.getElementById('toggle-restaurant-btn'),
  todayAmount: document.getElementById('today-amount'),
  todayCount: document.getElementById('today-count'),
  dailyAmount: document.getElementById('daily-amount'),
  dailyCount: document.getElementById('daily-count'),
  thisMonthAmount: document.getElementById('this-month-amount'),
  thisMonthCount: document.getElementById('this-month-count'),
  monthlyAmount: document.getElementById('monthly-amount'),
  monthlyCount: document.getElementById('monthly-count'),
  salesChart: document.getElementById('sales-chart'),
  // Modal Elements
  dishModal: document.getElementById('dish-modal'),
  modalImage: document.getElementById('modal-image'),
  modalTitle: document.getElementById('modal-title'),
  modalPrice: document.getElementById('modal-price'),
  modalDescription: document.getElementById('modal-description'),
  modalIngredients: document.getElementById('modal-ingredients'),
  modalNutrition: document.getElementById('modal-nutrition'),
  modalAddBtn: document.getElementById('modal-add-btn'),
  modalCloseBtns: document.querySelectorAll('[data-action="close-modal"]'),
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(value);

function setYear() {
  const now = new Date();
  elements.year.textContent = now.getFullYear();
}

function showSection(targetId) {
  elements.sections.forEach((section) => {
    section.classList.toggle('page-section--active', section.id === targetId);
  });

  elements.navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.section === targetId);
  });

  // Re-render the active section
  if (targetId === 'cart') {
    renderCart();
  } else if (targetId === 'favorites') {
    renderFavorites();
  } else if (targetId === 'orders') {
    renderOrders();
  } else if (targetId === 'admin' && state.currentRole === 'admin') {
    renderAdminList();
  } else if (targetId === 'sales' && state.currentRole === 'admin') {
    renderSales();
  } else if (targetId === 'menu') {
    renderMenu();
  }
}

function initNavigation() {
  elements.navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      showSection(link.dataset.section);
    });
  });

  if (elements.navCartBtn) {
    elements.navCartBtn.addEventListener('click', () => {
      showSection('cart');
    });
  }
}

function loadState() {
  const storedDishes = localStorage.getItem(STORAGE_KEYS.dishes);
  const storedCart = localStorage.getItem(STORAGE_KEYS.cart);
  const storedOrders = localStorage.getItem(STORAGE_KEYS.orders);
  const storedAuth = localStorage.getItem(STORAGE_KEYS.auth);
  const storedStatus = localStorage.getItem(STORAGE_KEYS.restaurantStatus);
  const storedUsers = localStorage.getItem(STORAGE_KEYS.users);
  const storedFavorites = localStorage.getItem(STORAGE_KEYS.favorites);

  if (storedDishes) {
    state.dishes = JSON.parse(storedDishes);
  } else {
    state.dishes = defaultDishes;
    localStorage.setItem(STORAGE_KEYS.dishes, JSON.stringify(state.dishes));
  }

  state.cart = storedCart ? JSON.parse(storedCart) : {};
  state.orders = storedOrders ? JSON.parse(storedOrders) : [];
  state.restaurantOpen = storedStatus ? JSON.parse(storedStatus) : false;
  state.users = storedUsers ? JSON.parse(storedUsers) : {};
  state.favorites = storedFavorites ? JSON.parse(storedFavorites) : {};

  if (storedAuth) {
    const auth = JSON.parse(storedAuth);
    state.currentUser = auth.email || auth.username;
    state.currentEmail = auth.email || auth.username;
    state.currentRole = auth.role;
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.dishes, JSON.stringify(state.dishes));
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(state.orders));
  localStorage.setItem(STORAGE_KEYS.restaurantStatus, JSON.stringify(state.restaurantOpen));
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(state.users));
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(state.favorites));
}

function persistAuth() {
  if (state.currentEmail && state.currentRole) {
    localStorage.setItem(STORAGE_KEYS.auth, JSON.stringify({
      email: state.currentEmail,
      role: state.currentRole,
    }));
  } else {
    localStorage.removeItem(STORAGE_KEYS.auth);
  }
}

function showToast(message) {
  if (!elements.toast) return;
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2200);
}

function renderMenu() {
  if (!elements.menuGrid) return;

  const userFavorites = state.currentEmail ? (state.favorites[state.currentEmail] || {}) : {};

  elements.menuGrid.innerHTML = state.dishes
    .map(
      (dish) => {
        const isFavorite = userFavorites[dish.id] || false;
        return `
      <article class="card" data-dish-id="${dish.id}">
        <div class="card__image-wrapper">
          <div class="card__image" role="button" tabindex="0" aria-label="View details for ${dish.name}" data-action="view-details">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
          </div>
          ${state.currentRole === 'user' ? `
          <button class="favorite-btn ${isFavorite ? 'favorite-btn--active' : ''}" data-action="favorite" aria-label="Add to favorites">
            <span class="heart-icon">${isFavorite ? '❤️' : '🤍'}</span>
          </button>` : ''}
        </div>
        <div class="card__details">
          <h3 class="card__title" role="button" tabindex="0" data-action="view-details">${dish.name}</h3>
          <span class="card__price">${formatCurrency(dish.price)}</span>
          <button class="btn btn--primary" data-action="add">Add to Cart</button>
        </div>
      </article>`;
      }
    )
    .join('');

  elements.menuGrid.querySelectorAll('[data-action="add"]').forEach((node) => {
    node.addEventListener('click', (event) => {
      event.stopPropagation();
      const card = event.currentTarget.closest('.card');
      if (!card) return;
      const dishId = card.dataset.dishId;
      addToCart(dishId);
    });
  });

  elements.menuGrid.querySelectorAll('[data-action="view-details"]').forEach((node) => {
    node.addEventListener('click', (event) => {
      const card = event.currentTarget.closest('.card');
      if (!card) return;
      const dishId = card.dataset.dishId;
      showDishDetails(dishId);
    });
  });

  elements.menuGrid
    .querySelectorAll('[data-action="view-details"]')
    .forEach((node) =>
      node.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const card = event.currentTarget.closest('.card');
          if (!card) return;
          showDishDetails(card.dataset.dishId);
        }
      })
    );

  // Favorite buttons
  if (state.currentRole === 'user') {
    elements.menuGrid.querySelectorAll('[data-action="favorite"]').forEach((node) => {
      node.addEventListener('click', (event) => {
        event.stopPropagation();
        const card = event.currentTarget.closest('.card');
        if (!card) return;
        const dishId = card.dataset.dishId;
        toggleFavorite(dishId);
      });
    });
  }
}


function showDishDetails(dishId) {
  const dish = state.dishes.find((item) => item.id === dishId);
  if (!dish) return;

  elements.modalImage.src = dish.image;
  elements.modalImage.alt = dish.name;
  elements.modalTitle.textContent = dish.name;
  elements.modalPrice.textContent = formatCurrency(dish.price);
  elements.modalDescription.textContent = dish.description || 'No description available.';
  elements.modalIngredients.textContent = dish.ingredients || 'Ingredients not listed.';

  // Populate Nutrition
  elements.modalNutrition.innerHTML = '';
  if (dish.nutrition) {
    Object.entries(dish.nutrition).forEach(([key, value]) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${key}</td><td>${value}</td>`;
      elements.modalNutrition.appendChild(row);
    });
  } else {
    elements.modalNutrition.innerHTML = '<tr><td colspan="2">Nutrition info not available</td></tr>';
  }

  // Setup Add to Cart button
  elements.modalAddBtn.onclick = () => {
    addToCart(dish.id);
    closeModal();
  };

  openModal();
}

function openModal() {
  elements.dishModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  elements.dishModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Initialize Modal Events
function initModalEvents() {
  elements.modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  // Close on escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && elements.dishModal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
}

// Call initModalEvents on load
document.addEventListener('DOMContentLoaded', initModalEvents);

function addToCart(dishId) {
  if (!state.restaurantOpen && state.currentRole === 'user') {
    showToast('Shop is currently closed. Please wait for it to open.');
    return;
  }

  const dish = state.dishes.find((item) => item.id === dishId);
  if (!dish) return;

  if (state.cart[dishId]) {
    state.cart[dishId].quantity += 1;
  } else {
    state.cart[dishId] = {
      dishId,
      quantity: 1,
    };
  }

  persistState();
  renderCart();
  updateCartBadge();
  showToast(`${dish.name} added to cart`);
}

function updateCartBadge() {
  const totalItems = Object.values(state.cart).reduce(
    (count, item) => count + item.quantity,
    0
  );
  elements.cartCount.textContent = totalItems;
}

function renderCart() {
  if (!elements.cartItems) return;

  const cartEntries = Object.values(state.cart);

  // Check if cart is empty
  if (cartEntries.length === 0) {
    elements.cartItems.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🛒</div>
          <p style="font-size: 1.1rem; margin: 0;">No items in cart</p>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Add dishes from the menu to get started</p>
        </td>
      </tr>
    `;
    elements.cartTotal.textContent = formatCurrency(0);
    return;
  }

  const fragment = document.createDocumentFragment();
  let total = 0;

  cartEntries.forEach((item) => {
    const dish = state.dishes.find((d) => d.id === item.dishId);
    if (!dish) {
      return;
    }

    const row = document.createElement('tr');
    const subtotal = dish.price * item.quantity;
    total += subtotal;

    row.innerHTML = `
      <td>
        <div class="cart-item">
          <strong>${dish.name}</strong>
        </div>
      </td>
      <td>
        <div class="cart-item__controls" data-dish-id="${dish.id}">
          <button type="button" data-action="decrease" aria-label="Decrease quantity">−</button>
          <input type="text" value="${item.quantity}" readonly aria-label="Quantity" />
          <button type="button" data-action="increase" aria-label="Increase quantity">+</button>
        </div>
      </td>
      <td>${formatCurrency(dish.price)}</td>
      <td>${formatCurrency(subtotal)}</td>
      <td>
        <button class="btn btn--ghost" data-action="remove" data-dish-id="${dish.id}">
          Remove
        </button>
      </td>
    `;

    fragment.appendChild(row);
  });

  elements.cartItems.innerHTML = '';
  elements.cartItems.appendChild(fragment);
  elements.cartTotal.textContent = formatCurrency(total);

  elements.cartItems
    .querySelectorAll('[data-action="increase"]')
    .forEach((btn) =>
      btn.addEventListener('click', () => {
        const dishId = btn.closest('[data-dish-id]').dataset.dishId;
        updateCartQuantity(dishId, state.cart[dishId].quantity + 1);
      })
    );

  elements.cartItems
    .querySelectorAll('[data-action="decrease"]')
    .forEach((btn) =>
      btn.addEventListener('click', () => {
        const dishId = btn.closest('[data-dish-id]').dataset.dishId;
        updateCartQuantity(dishId, state.cart[dishId].quantity - 1);
      })
    );

  elements.cartItems
    .querySelectorAll('[data-action="remove"]')
    .forEach((btn) =>
      btn.addEventListener('click', () => {
        const { dishId } = btn.dataset;
        removeFromCart(dishId);
      })
    );
}

function updateCartQuantity(dishId, nextQuantity) {
  if (!state.cart[dishId]) return;

  if (nextQuantity <= 0) {
    delete state.cart[dishId];
  } else {
    state.cart[dishId].quantity = nextQuantity;
  }

  persistState();
  renderCart();
  updateCartBadge();
}

function removeFromCart(dishId) {
  if (!state.cart[dishId]) return;

  delete state.cart[dishId];
  persistState();
  renderCart();
  updateCartBadge();
}

function generateReceiptPdf(items, total) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showToast('Unable to generate receipt. Please try again later.');
    return false;
  }

  const doc = new window.jspdf.jsPDF();
  const dateLabel = new Date().toLocaleString();

  doc.setFontSize(18);
  doc.text('Arusuvai Receipt', 105, 20, { align: 'center' });

  doc.setFontSize(12);
  doc.text(`Date: ${dateLabel}`, 20, 32);

  let y = 50;
  const headerY = y;
  doc.setFont(undefined, 'bold');
  doc.text('Dish', 20, headerY);
  doc.text('Qty', 110, headerY);
  doc.text('Price', 140, headerY);
  doc.text('Subtotal', 170, headerY, { align: 'right' });

  doc.setFont(undefined, 'normal');
  y += 8;

  items.forEach((item) => {
    if (y > 260) {
      doc.addPage();
      y = 30;
    }

    doc.text(item.name, 20, y);
    doc.text(String(item.quantity), 110, y);
    doc.text(formatCurrency(item.price), 140, y);
    doc.text(formatCurrency(item.subtotal), 170, y, { align: 'right' });
    y += 8;
  });

  if (y > 260) {
    doc.addPage();
    y = 30;
  }

  doc.setDrawColor(200);
  doc.line(20, y + 4, 190, y + 4);

  doc.setFont(undefined, 'bold');
  doc.text('Grand Total:', 140, y + 16, { align: 'right' });
  doc.text(formatCurrency(total), 170, y + 16, { align: 'right' });

  doc.save(`Arusuvai-receipt-${Date.now()}.pdf`);
  return true;
}

function handleCheckout() {
  if (!state.restaurantOpen) {
    showToast('Shop is currently closed. Please wait for it to open.');
    return;
  }

  const cartEntries = Object.values(state.cart);

  if (!cartEntries.length) {
    showToast('Add dishes to your cart before checking out.');
    return;
  }

  const cartItems = cartEntries
    .map((entry) => {
      const dish = state.dishes.find((item) => item.id === entry.dishId);
      if (!dish) return null;
      const subtotal = dish.price * entry.quantity;
      return {
        name: dish.name,
        quantity: entry.quantity,
        price: dish.price,
        subtotal,
      };
    })
    .filter(Boolean);

  if (!cartItems.length) {
    showToast('Menu data missing. Please refresh and try again.');
    return;
  }

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const order = {
    id: `ORD-${Date.now()}`,
    userId: state.currentEmail || state.currentUser,
    items: cartItems,
    total,
    date: new Date().toISOString(),
    timestamp: Date.now(),
  };

  state.orders.push(order);
  persistState();
  renderOrders();

  const generated = generateReceiptPdf(cartItems, total);

  if (!generated) {
    return;
  }

  showToast('Receipt downloaded. Thank you for dining with us!');
  state.cart = {};
  persistState();
  renderCart();
  updateCartBadge();

  // Navigate to orders page after checkout to show the new order
  if (state.currentRole === 'user') {
    showSection('orders');
  }

  if (state.currentRole === 'admin') {
    renderSales();
  }
}

function renderAdminList() {
  elements.adminDishList.innerHTML = state.dishes
    .map(
      (dish) => `
      <li class="admin-dish" data-dish-id="${dish.id}">
        <img class="admin-dish__image" src="${dish.image}" alt="${dish.name}" />
        <div class="admin-dish__info">
          <strong>${dish.name}</strong>
          <div>${formatCurrency(dish.price)}</div>
        </div>
        <div class="admin-dish__actions">
          <button type="button" class="edit" data-action="edit">Edit</button>
          <button type="button" class="delete" data-action="delete">Delete</button>
        </div>
      </li>`
    )
    .join('');

  elements.adminDishList.querySelectorAll('[data-action="edit"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dishId = btn.closest('[data-dish-id]').dataset.dishId;
      startEditDish(dishId);
    });
  });

  elements.adminDishList.querySelectorAll('[data-action="delete"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dishId = btn.closest('[data-dish-id]').dataset.dishId;
      deleteDish(dishId);
    });
  });
}

function resetForm() {
  elements.dishForm.reset();
  elements.dishIdField.value = '';
  elements.dishForm.querySelector('#form-title').textContent = 'Add New Dish';
  state.editingDishId = null;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const name = elements.dishNameField.value.trim();
  const price = parseFloat(elements.dishPriceField.value);
  const image = elements.dishImageField.value.trim();

  if (!name || Number.isNaN(price) || price <= 0 || !image) {
    showToast('Please provide valid dish details.');
    return;
  }

  if (state.editingDishId) {
    const index = state.dishes.findIndex((dish) => dish.id === state.editingDishId);
    if (index !== -1) {
      state.dishes[index] = { ...state.dishes[index], name, price, image };
      showToast('Dish updated successfully.');
    }
  } else {
    state.dishes.push({
      id: crypto.randomUUID(),
      name,
      price,
      image,
    });
    showToast('Dish added to menu.');
  }

  persistState();
  renderMenu();
  renderAdminList();
  resetForm();
}

function startEditDish(dishId) {
  const dish = state.dishes.find((item) => item.id === dishId);
  if (!dish) return;

  state.editingDishId = dishId;
  elements.dishIdField.value = dishId;
  elements.dishNameField.value = dish.name;
  elements.dishPriceField.value = dish.price;
  elements.dishImageField.value = dish.image;
  elements.dishForm.querySelector('#form-title').textContent = 'Edit Dish';
  showSection('admin');
}

function deleteDish(dishId) {
  state.dishes = state.dishes.filter((dish) => dish.id !== dishId);
  delete state.cart[dishId];
  persistState();
  renderMenu();
  renderCart();
  updateCartBadge();
  renderAdminList();
  showToast('Dish removed from menu.');
}

function attachFormHandlers() {
  if (elements.dishForm) {
    elements.dishForm.addEventListener('submit', handleFormSubmit);
  }
  if (elements.cancelEditBtn) {
    elements.cancelEditBtn.addEventListener('click', (event) => {
      event.preventDefault();
      resetForm();
    });
  }
}

// Authentication Functions
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    showToast('Please fill in all fields.');
    return;
  }

  // Check if user exists in database
  const user = state.users[email];
  if (!user || user.password !== password) {
    showToast('Invalid email or password. Please sign up if you don\'t have an account.');
    return;
  }

  state.currentUser = email;
  state.currentEmail = email;
  state.currentRole = user.role;
  persistAuth();

  showApp();
  showToast(`Welcome!`);
}

function handleSignup(event) {
  event.preventDefault();

  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value;
  const role = document.getElementById('signup-role').value;

  if (!email || !password || !role) {
    showToast('Please fill in all fields.');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters long.');
    return;
  }

  // Check if user already exists
  if (state.users[email]) {
    showToast('Email already registered. Please login instead.');
    return;
  }

  // Create new user account
  state.users[email] = {
    email,
    password,
    role,
    createdAt: new Date().toISOString(),
  };

  persistState();

  state.currentUser = email;
  state.currentEmail = email;
  state.currentRole = role;
  persistAuth();

  showToast('Account created successfully!');
  showApp();
}

function handleLogout() {
  state.currentUser = null;
  state.currentEmail = null;
  state.currentRole = null;
  state.cart = {};
  persistAuth();
  persistState();

  elements.loginPage.style.display = 'flex';
  elements.appContainer.style.display = 'none';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';
  document.getElementById('signup-role').value = '';
}

function switchAuthTab(tabName) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const tabs = document.querySelectorAll('.auth-tab');

  tabs.forEach((tab) => {
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  if (tabName === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
  } else {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
  }
}

function showApp() {
  elements.loginPage.style.display = 'none';
  elements.appContainer.style.display = 'flex';

  const body = document.body;
  body.classList.remove('user-logged-in', 'admin-logged-in');
  body.classList.add(`${state.currentRole}-logged-in`);

  updateRoleBasedUI();
  loadState();
  renderMenu();
  renderCart();
  updateCartBadge();
  updateRestaurantStatus();

  if (state.currentRole === 'user') {
    renderOrders();
    renderFavorites();
  } else if (state.currentRole === 'admin') {
    renderAdminList();
    renderSales();
  }
}

function updateRoleBasedUI() {
  const userOnlyElements = document.querySelectorAll('.user-only');
  const adminOnlyElements = document.querySelectorAll('.admin-only');

  userOnlyElements.forEach((el) => {
    el.style.display = state.currentRole === 'user' ? 'block' : 'none';
  });

  adminOnlyElements.forEach((el) => {
    el.style.display = state.currentRole === 'admin' ? 'block' : 'none';
  });

  if (state.currentRole === 'user') {
    const cartBtn = document.querySelector('.navbar__cart.user-only');
    if (cartBtn) cartBtn.style.display = 'flex';
  }
}

// Favorite Functions
function toggleFavorite(dishId) {
  if (!state.currentEmail) return;

  if (!state.favorites[state.currentEmail]) {
    state.favorites[state.currentEmail] = {};
  }

  const userFavorites = state.favorites[state.currentEmail];

  if (userFavorites[dishId]) {
    delete userFavorites[dishId];
    showToast('Removed from favorites');
  } else {
    userFavorites[dishId] = true;
    showToast('Added to favorites');
  }

  persistState();
  renderMenu();

  // Only render favorites if we're on the favorites page, don't navigate away
  const activeSection = document.querySelector('.page-section--active');
  if (activeSection && activeSection.id === 'favorites') {
    renderFavorites();
  }
}

function renderFavorites() {
  if (!elements.favoritesGrid) return;

  const userFavorites = state.currentEmail ? (state.favorites[state.currentEmail] || {}) : {};
  const favoriteDishIds = Object.keys(userFavorites).filter((id) => userFavorites[id]);
  const favoriteDishes = state.dishes.filter((dish) => favoriteDishIds.includes(dish.id));

  if (favoriteDishes.length === 0) {
    elements.favoritesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--color-text-muted);">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🤍</div>
        <p style="font-size: 1.2rem; margin: 0 0 0.5rem; font-weight: 600;">Nothing in favorites</p>
        <p style="font-size: 0.95rem; margin: 0;">Click the heart icon on any dish to add it to your favorites</p>
      </div>
    `;
    return;
  }

  elements.favoritesGrid.innerHTML = favoriteDishes
    .map(
      (dish) => `
      <article class="card" data-dish-id="${dish.id}">
        <div class="card__image-wrapper">
          <div class="card__image" role="button" tabindex="0" aria-label="Add ${dish.name} to cart" data-action="add">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
          </div>
          <button class="favorite-btn favorite-btn--active" data-action="favorite" aria-label="Remove from favorites">
            <span class="heart-icon">❤️</span>
          </button>
        </div>
        <div class="card__details">
          <h3 class="card__title">${dish.name}</h3>
          <span class="card__price">${formatCurrency(dish.price)}</span>
          <button class="btn btn--primary" data-action="add">Add to Cart</button>
        </div>
      </article>`
    )
    .join('');

  // Add event listeners
  elements.favoritesGrid.querySelectorAll('[data-action="add"]').forEach((node) => {
    node.addEventListener('click', (event) => {
      const card = event.currentTarget.closest('.card');
      if (!card) return;
      const dishId = card.dataset.dishId;
      addToCart(dishId);
    });
  });

  elements.favoritesGrid.querySelectorAll('[data-action="favorite"]').forEach((node) => {
    node.addEventListener('click', (event) => {
      event.stopPropagation();
      const card = event.currentTarget.closest('.card');
      if (!card) return;
      const dishId = card.dataset.dishId;
      toggleFavorite(dishId);
    });
  });
}

// Order Functions
function renderOrders() {
  if (!elements.ordersList) return;

  const userOrders = state.orders
    .filter((order) => order.userId === state.currentEmail || order.userId === state.currentUser)
    .sort((a, b) => b.timestamp - a.timestamp);

  if (!userOrders.length) {
    elements.ordersList.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem; color: var(--color-text-muted);">
        <div style="font-size: 4rem; margin-bottom: 1rem;">📦</div>
        <p style="font-size: 1.2rem; margin: 0 0 0.5rem; font-weight: 600;">No orders found</p>
        <p style="font-size: 0.95rem; margin: 0;">You haven't placed any orders yet. Start ordering to see your order history here.</p>
      </div>
    `;
    return;
  }

  elements.ordersList.innerHTML = userOrders
    .map(
      (order) => `
      <div class="order-card">
        <div class="order-header">
          <div>
            <div class="order-id">${order.id}</div>
            <div class="order-date">${new Date(order.date).toLocaleString()}</div>
          </div>
          <div>
            <strong>${formatCurrency(order.total)}</strong>
          </div>
        </div>
        <div class="order-items">
          ${order.items
          .map(
            (item) => `
            <div class="order-item">
              <span>${item.name} × ${item.quantity}</span>
              <span>${formatCurrency(item.subtotal)}</span>
            </div>
          `
          )
          .join('')}
        </div>
        <div class="order-total">
          <span>Total</span>
          <span>${formatCurrency(order.total)}</span>
        </div>
      </div>
    `
    )
    .join('');
}

// Restaurant Status Functions
function toggleRestaurantStatus() {
  state.restaurantOpen = !state.restaurantOpen;
  persistState();
  updateRestaurantStatus();
  showToast(
    `Shop is now ${state.restaurantOpen ? 'OPEN' : 'CLOSED'}`
  );
}

function updateRestaurantStatus() {
  if (!elements.restaurantStatus || !elements.toggleRestaurantBtn) return;

  if (state.restaurantOpen) {
    elements.restaurantStatus.textContent = 'Open';
    elements.restaurantStatus.className = 'status-badge status-badge--open';
    elements.toggleRestaurantBtn.textContent = 'Close Shop';
    elements.toggleRestaurantBtn.classList.remove('btn--primary');
    elements.toggleRestaurantBtn.classList.add('btn--ghost');
  } else {
    elements.restaurantStatus.textContent = 'Closed';
    elements.restaurantStatus.className = 'status-badge status-badge--closed';
    elements.toggleRestaurantBtn.textContent = 'Open Shop';
    elements.toggleRestaurantBtn.classList.remove('btn--ghost');
    elements.toggleRestaurantBtn.classList.add('btn--primary');
  }
}

// Sales Analytics Functions
function getTodaySales() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  const dayOrders = state.orders.filter((order) => {
    const orderDate = new Date(order.timestamp);
    return orderDate >= today && orderDate <= todayEnd;
  });

  const total = dayOrders.reduce((sum, order) => sum + order.total, 0);
  return { total, count: dayOrders.length };
}

function getPreviousDaySales() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  const yesterdayEnd = new Date(yesterday);
  yesterdayEnd.setHours(23, 59, 59, 999);

  const dayOrders = state.orders.filter((order) => {
    const orderDate = new Date(order.timestamp);
    return orderDate >= yesterday && orderDate <= yesterdayEnd;
  });

  const total = dayOrders.reduce((sum, order) => sum + order.total, 0);
  return { total, count: dayOrders.length };
}

function getThisMonthSales() {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  firstDayOfMonth.setHours(0, 0, 0, 0);
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  lastDayOfMonth.setHours(23, 59, 59, 999);

  const monthOrders = state.orders.filter((order) => {
    const orderDate = new Date(order.timestamp);
    return orderDate >= firstDayOfMonth && orderDate <= lastDayOfMonth;
  });

  const total = monthOrders.reduce((sum, order) => sum + order.total, 0);
  return { total, count: monthOrders.length };
}

function getPreviousMonthSales() {
  const now = new Date();
  const firstDayOfPrevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  firstDayOfPrevMonth.setHours(0, 0, 0, 0);
  const lastDayOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
  lastDayOfPrevMonth.setHours(23, 59, 59, 999);

  const monthOrders = state.orders.filter((order) => {
    const orderDate = new Date(order.timestamp);
    return orderDate >= firstDayOfPrevMonth && orderDate <= lastDayOfPrevMonth;
  });

  const total = monthOrders.reduce((sum, order) => sum + order.total, 0);
  return { total, count: monthOrders.length };
}

function getMonthlySalesData() {
  const now = new Date();
  const months = [];
  const salesData = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthName = date.toLocaleString('default', { month: 'short' });
    months.push(monthName);

    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    monthStart.setHours(0, 0, 0, 0);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    monthEnd.setHours(23, 59, 59, 999);

    const monthOrders = state.orders.filter((order) => {
      const orderDate = new Date(order.timestamp);
      return orderDate >= monthStart && orderDate <= monthEnd;
    });

    const total = monthOrders.reduce((sum, order) => sum + order.total, 0);
    salesData.push(total);
  }

  return { months, salesData };
}

function renderSales() {
  if (!elements.dailyAmount || !elements.monthlyAmount) return;

  const today = getTodaySales();
  const daily = getPreviousDaySales();
  const thisMonth = getThisMonthSales();
  const monthly = getPreviousMonthSales();

  if (elements.todayAmount) {
    elements.todayAmount.textContent = formatCurrency(today.total);
    elements.todayCount.textContent = `${today.count} orders`;
  }

  elements.dailyAmount.textContent = formatCurrency(daily.total);
  elements.dailyCount.textContent = `${daily.count} orders`;

  if (elements.thisMonthAmount) {
    elements.thisMonthAmount.textContent = formatCurrency(thisMonth.total);
    elements.thisMonthCount.textContent = `${thisMonth.count} orders`;
  }

  elements.monthlyAmount.textContent = formatCurrency(monthly.total);
  elements.monthlyCount.textContent = `${monthly.count} orders`;

  renderSalesChart();
}

function renderSalesChart() {
  if (!elements.salesChart || !window.Chart) return;

  const { months, salesData } = getMonthlySalesData();

  if (state.salesChart) {
    state.salesChart.destroy();
  }

  const ctx = elements.salesChart.getContext('2d');
  state.salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Sales (₹)',
          data: salesData,
          backgroundColor: 'rgba(255, 125, 26, 0.6)',
          borderColor: 'rgba(255, 125, 26, 1)',
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return '₹' + value;
            },
          },
        },
      },
    },
  });
}

function init() {
  setYear();
  loadState();

  // Check if already logged in
  if (state.currentEmail && state.currentRole) {
    showApp();
  } else {
    elements.loginPage.style.display = 'flex';
    elements.appContainer.style.display = 'none';
  }

  // Event listeners
  if (elements.loginForm) {
    elements.loginForm.addEventListener('submit', handleLogin);
  }
  if (elements.signupForm) {
    elements.signupForm.addEventListener('submit', handleSignup);
  }
  if (elements.logoutBtn) {
    elements.logoutBtn.addEventListener('click', handleLogout);
  }
  if (elements.toggleRestaurantBtn) {
    elements.toggleRestaurantBtn.addEventListener('click', toggleRestaurantStatus);
  }

  // Auth tab switching
  if (elements.authTabs && elements.authTabs.length > 0) {
    elements.authTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        switchAuthTab(tab.dataset.tab);
      });
    });
  }

  initNavigation();
  attachFormHandlers();

  if (elements.checkoutBtn) {
    elements.checkoutBtn.addEventListener('click', handleCheckout);
  }
}

document.addEventListener('DOMContentLoaded', init);

