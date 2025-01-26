const setLocalStorageData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
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
