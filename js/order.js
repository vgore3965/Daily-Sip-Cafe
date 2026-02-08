let cart = [];
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <div>
          <button onclick="changeQty(${index}, -1)">-</button>
          ${item.qty}
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
  });

  totalEl.textContent = total;
}

function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty === 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

/* Checkout */
document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("orderMessage").textContent =
    "✅ Order placed successfully! Thank you for choosing Daily Sip Cafe.";

  cart = [];
  renderCart();
  e.target.reset();
});
