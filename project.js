const state = {

    products:[

        {
            id:1,
            name:"Laptop",
            price:999,
            image:"https://via.placeholder.com/120?text=Laptop"
        },

        {
            id:2,
            name:"Phone",
            price:699,
            image:"https://via.placeholder.com/120?text=Phone"
        },

        {
            id:3,
            name:"Headphones",
            price:199,
            image:"https://via.placeholder.com/120?text=Headphones"
        }

    ],

    cart:JSON.parse(localStorage.getItem("cart")) || []

};

const productsDiv=document.getElementById("products");
const cartDiv=document.getElementById("cart");
const totalSpan=document.getElementById("total");
const countSpan=document.getElementById("cartCount");

// Save cart
function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(state.cart)
    );

}

// Add item
function addToCart(productId){

    const existing=state.cart.find(
        item=>item.productId===productId
    );

    if(existing){

        existing.quantity++;

    }else{

        state.cart.push({
            productId:productId,
            quantity:1
        });

    }

    saveCart();

    renderCart();

}

// Update quantity
function updateQuantity(productId,quantity){

    const item=state.cart.find(
        item=>item.productId===productId
    );

    if(item){

        if(quantity<=0){

            removeFromCart(productId);

            return;

        }

        item.quantity=quantity;

    }

    saveCart();

    renderCart();

}

// Remove item
function removeFromCart(productId){

    state.cart=state.cart.filter(
        item=>item.productId!==productId
    );

    saveCart();

    renderCart();

}

// Total
function getCartTotal(){

    return state.cart.reduce(function(total,item){

        const product=state.products.find(
            p=>p.id===item.productId
        );

        return total+(product.price*item.quantity);

    },0);

}

// Count
function getCartCount(){

    return state.cart.reduce(function(count,item){

        return count+item.quantity;

    },0);

}

// Products
function renderProducts(){

    productsDiv.innerHTML="";

    state.products.forEach(function(product){

        const div=document.createElement("div");

        div.className="product";

        div.innerHTML=`
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

// Cart
function renderCart(){

    cartDiv.innerHTML="";

    state.cart.forEach(function(item){

        const product=state.products.find(
            p=>p.id===item.productId
        );

        const div=document.createElement("div");

        div.className="cart-item";

        div.innerHTML=`
            <strong>${product.name}</strong><br>

            Price: $${product.price}<br>

            Quantity:
            <button onclick="updateQuantity(${item.productId},${item.quantity-1})">-</button>

            ${item.quantity}

            <button onclick="updateQuantity(${item.productId},${item.quantity+1})">+</button>

            <button onclick="removeFromCart(${item.productId})">
                Remove
            </button>
        `;

        cartDiv.appendChild(div);

    });

    totalSpan.textContent=getCartTotal();

    countSpan.textContent=getCartCount();

}

// Clear Cart
document.getElementById("clearCart").addEventListener("click",function(){

    state.cart=[];

    saveCart();

    renderCart();

});

// Start
renderProducts();

renderCart();