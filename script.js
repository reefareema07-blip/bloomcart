```javascript
// ================= CART =================

let cart = [];


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCartCount();

    alert(name + " added to your cart! 🌸");
}


function updateCartCount() {

    document.getElementById("cart-count").textContent = cart.length;

}


function openCart() {

    const overlay = document.getElementById("cart-overlay");

    overlay.style.display = "flex";

    displayCart();

}


function closeCart() {

    document.getElementById("cart-overlay").style.display = "none";

}


function displayCart() {

    const cartItems = document.getElementById("cart-items");

    const totalElement = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty 🌸</p>";

        totalElement.textContent = "0";

        return;
    }


    cart.forEach(function(item, index) {

        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>₹${item.price}</p>
            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(itemElement);

    });


    totalElement.textContent = total;

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    displayCart();

}


// ================= SEARCH =================

function searchProducts() {

    const searchText =
        document.getElementById("search").value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ================= CATEGORY FILTER =================

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ================= CUSTOM BOUQUET =================

function customBouquet() {

    const flower =
        prompt(
            "Choose your flower:\n1. Roses\n2. Tulips\n3. Sunflowers"
        );

    if (flower === null) {
        return;
    }

    const size =
        prompt(
            "Choose bouquet size:\nSmall - ₹299\nMedium - ₹499\nLarge - ₹699"
        );

    if (size === null) {
        return;
    }

    alert(
        "Your custom bouquet request has been created! 💐\n\n" +
        "Flower: " + flower +
        "\nSize: " + size
    );

}


// ================= CONTACT =================

function contactMessage() {

    alert(
        "Thank you for contacting BloomCart! 🌸\n\n" +
        "We will get back to you soon."
    );

}


// ================= CHECKOUT =================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty! Please add a flower first. 🌷");

        return;
    }

    alert(
        "Checkout page coming next! 🛍️\n\n" +
        "Your cart has " + cart.length + " item(s)."
    );

}
```
