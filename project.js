const state = {
    products: [
        {
            id: 1,
            name: 'Laptop',
            price: 999,
            image: 'https://via.placeholder.com/120?text=Laptop',
        },
        {
            id: 2,
            name: 'Phone',
            price: 699,
            image: 'https://via.placeholder.com/120?text=Phone',
        },
        {
            id: 3,
            name: 'Headphones',
            price: 199,
            image: 'https://via.placeholder.com/120?text=Headphones',
        },
    ],

    cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const productsDiv = document.getElementById('products');
const cartDiv = document.getElementById('cart');
const totalSpan = document.getElementById('total');
const countSpan = document.getElementById('cartCount');

// ---------- SAVE ----------

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
}

// ---------- ADD ----------

function addToCart(productId) {
    const existing = state.cart.find((item) => item.productId === productId);

    if (existing) {
        existing.quantity++;
    } else {
        state.cart.push({
            productId,
            quantity: 1,
        });
    }

    saveCart();
    renderCart();
}

// ---------- UPDATE ----------

function updateQuantity(productId, quantity) {
    const item = state.cart.find((item) => item.productId === productId);

    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        item.quantity = quantity;
    }

    saveCart();
    renderCart();
}

// ---------- REMOVE ----------

function removeFromCart(productId) {
    state.cart = state.cart.filter((item) => item.productId !== productId);

    saveCart();
    renderCart();
}

/* Make functions available to inline onclick handlers */
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

// ---------- TOTAL ----------

function getCartTotal() {
    return state.cart.reduce((total, item) => {
        const product = state.products.find((p) => p.id === item.productId);

        return total + product.price * item.quantity;
    }, 0);
}

// ---------- COUNT ----------

function getCartCount() {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
}

// ---------- PRODUCTS ----------

function renderProducts() {
    productsDiv.innerHTML = '';

    state.products.forEach((product) => {
        const div = document.createElement('div');

        div.className = 'product';

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productsDiv.appendChild(div);
    });
}

// ---------- CART ----------

function renderCart() {
    cartDiv.innerHTML = '';

    state.cart.forEach((item) => {
        const product = state.products.find((p) => p.id === item.productId);

        const div = document.createElement('div');

        div.className = 'cart-item';

        div.innerHTML = `
            <strong>${product.name}</strong><br>

            Price: $${product.price}<br>

            Quantity:
            <button onclick="updateQuantity(${item.productId}, ${item.quantity - 1})">-</button>

            ${item.quantity}

            <button onclick="updateQuantity(${item.productId}, ${item.quantity + 1})">+</button>

            <button onclick="removeFromCart(${item.productId})">
                Remove
            </button>
        `;

        cartDiv.appendChild(div);
    });

    totalSpan.textContent = getCartTotal();
    countSpan.textContent = getCartCount();
}

// ---------- CLEAR CART ----------

document.getElementById('clearCart').addEventListener('click', function () {
    state.cart = [];

    saveCart();

    renderCart();
});

// ---------- START ----------

renderProducts();
renderCart();
