let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");
const totalSpan = document.getElementById("total");
const checkoutForm = document.getElementById("checkout-form");

function displayCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            ${item.name} - $${item.price} x 
            <input type="number" class="quantity" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    totalSpan.textContent = total;
}



// Display cart items with images
function displayCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-img">
            <div class="cart-info">
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <label>Qty: <input type="number" class="quantity" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></label>
            </div>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    totalSpan.textContent = total;
}

// Update quantity
function updateQuantity(index, value) {
    cart[index].quantity = parseInt(value);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Checkout form submit
checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    localStorage.setItem("order", JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        cart: cart
    }));

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "confirmation.html";
});

// Initial display
displayCart();
