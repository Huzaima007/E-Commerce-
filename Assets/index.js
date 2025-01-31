// Navbar Section

function toggleMenu() {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
  const cartLink = document.getElementById("cart-link");

  cartLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    window.location.href = "cart.html"; 

  });
});


document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.querySelectorAll(".cart-item");

  function updateTotal() {
    let subtotal = 0;
    document.querySelectorAll(".cart-item").forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const price = parseFloat(item.querySelector(".price").getAttribute("data-price"));
      subtotal += quantity * price;
    });
    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
  }

  cartItems.forEach((item) => {
    const minusBtn = item.querySelector(".minus-btn");
    const plusBtn = item.querySelector(".plus-btn");
    const quantityElement = item.querySelector(".quantity");
    const deleteBtn = item.querySelector(".delete-btn");

    let quantity = parseInt(quantityElement.textContent);

    // Increase Quantity
    plusBtn.addEventListener("click", function () {
      quantity++;
      quantityElement.textContent = quantity;
      updateTotal();
    });

    // Decrease Quantity (Minimum 1)
    minusBtn.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotal();
      }
    });

    // Remove Item
    deleteBtn.addEventListener("click", function () {
      item.remove();
      updateTotal();
    });
  });

  updateTotal();
});










