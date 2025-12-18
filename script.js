// Sample products array with images
const products = [
    { id: 1, name: "Laptop", price: 50000, image: "image/laptop.jpg" },
    { id: 2, name: "Phone", price: 20000, image: "image/phone.jpg" },
    { id: 3, name: "Headphones", price: 5000, image: "image/haedphones.jpg" },
    { id: 4, name: "Watch", price: 2000, image: "image/watch.jpg" },
    { id: 5, name: "tshirt", price: 500, image: "image/tshirt.jpg" },
    { id: 6, name: "slippers", price: 800, image: "image/sandals.jpg" },
    { id: 7, name: "saree", price: 1500, image: "image/saree.jpg" },
    { id: 8, name: "shoes", price: 900, image: "image/shoes.jpg" },
    { id: 9, name: "kurti", price: 350, image: "image/kurti.jpg" },
    { id: 10, name: "laptop", price: 80000, image: "image/macbook.jpg" },
    { id: 11, name: "cardigan", price: 600, image: "image/cardigan 2.jpg" },
    { id: 12, name: "cardigan", price: 800, image: "image/cardigans.jpg" },




     { id: 4, name: "Watch", price: 3000, image: "image/watch 2.jpg" },
    { id: 5, name: "tshirt", price: 400, image: "image/tshirt 2.jpg" },
    { id: 6, name: "slippers", price: 800, image: "image/sandal 2.jpg" },
    { id: 7, name: "saree", price: 1800, image: "image/saree 2.jpg" },
    { id: 8, name: "shoes", price: 2500, image: "image/shoes 2.jpg" },
    { id: 9, name: "kurti", price: 500, image: "image/kurti 2.jpg" },
];




const productsDiv = document.getElementById("products");
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display products (same class names)
function displayProducts(list) {
    productsDiv.innerHTML = ""; // clear previous products
    list.forEach(product => {
        const div = document.createElement("div");
        div.className = "product"; // same class as before
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(div);
    });
}

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push({...product, quantity: 1});
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Initial display
displayProducts(products);
updateCartCount();

// Search functionality
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
});

// Clear search
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    displayProducts(products);
});
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

// Auto slide every 4 seconds
setInterval(() => {
    changeSlide(1);
}, 4000);
