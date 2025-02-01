const setLocalStorageData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

const removeLocalStorageData = (key) => {
  return localStorage.removeItem(key);
};

const getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

let cart = getLocalStorageData("cart");

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.innerText = cart.length > 0 ? cart.length : "";
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

const addToCart = (product) => {
  const existingProduct = cart?.find((item) => item?.name === product?.name);
  if (existingProduct) existingProduct.quantity++;
  else cart.push({ ...product, quantity: 1 });
  setLocalStorageData("cart", cart);
  updateCartCount();
  showToast(`${product.name} has been added to the cart!`);
};

document.querySelectorAll(".atcm").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const productCard = button.closest(".card");
    const name = productCard.querySelector(".card-title").innerText;
    const price = parseFloat(
      productCard.querySelector(".card-text").innerText.replace("$", "")
    );
    const image = productCard.querySelector("img").src;

    addToCart({ name, price, image });
  });
});

updateCartCount();

function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  const subtotalElement = document.getElementById("subtotal");

  const cart = getLocalStorageData("cart");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    totalElement.innerText = "$0.00";
    subtotalElement.innerText = "$0.00";
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }
  let subtotal = 0;
  cart.forEach((item, index) => {
    const { price, quantity } = item;
    subtotal += price * quantity;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item d-flex align-items-center mb-3";
    cartItem.innerHTML = `
      <img
        src="${item.image}"
        alt="${item.name}"
        class="img-fluid me-3"
        style="width: 100px; height: auto"
      />
      <div class="flex-grow-1">
        <h5>${item.name}</h5>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-secondary btn-sm minus-btn" data-index="${index}">-</button>
          <p class="mb-0 mx-2 quantity">${item.quantity}</p>
          <button class="btn btn-outline-secondary btn-sm plus-btn" data-index="${index}">+</button>
        </div>
      </div>
      <p class="mb-0 me-3 price">MRP: $${item.price}</p>
      <button class="btn btn-outline-danger btn-sm delete-btn" data-index="${index}">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  totalElement.innerText = `$${subtotal.toFixed(2)}`;
  subtotalElement.innerText = `$${subtotal.toFixed(2)}`;

  updateCartCount();
  attachEventListeners();
}

function attachEventListeners() {
  document.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => updateQuantity(e, 1));
  });

  document.querySelectorAll(".minus-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => updateQuantity(e, -1));
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => deleteCartItem(e));
  });
}

function updateQuantity(event, delta) {
  const index = event.target.dataset.index;
  const cart = getLocalStorageData("cart");
  cart[index].quantity = Math.max(1, cart[index].quantity + delta); // Prevent going below 1
  setLocalStorageData("cart", cart);
  renderCartItems();
}

function deleteCartItem(event) {
  const index = event.target.dataset.index;
  let cart = getLocalStorageData("cart");
  cart.splice(index, 1);
  setLocalStorageData("cart", cart);
  renderCartItems();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
});


document.getElementById("checkout-BTN").addEventListener("click", myFunction);


function myFunction() {
  removeLocalStorageData("cart")
  Swal.fire({
      title: "Congratulation",
      text: "Your order is created successfully",
      icon: "success"
  });
}


