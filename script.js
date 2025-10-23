let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("total");
  
  cartItems.innerHTML = "";
  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.textContent = `${product.item} - ₹${product.price}`;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.background = "red";
    removeBtn.style.padding = "3px 6px";
    removeBtn.style.border = "none";
    removeBtn.style.color = "white";
    removeBtn.style.borderRadius = "3px";
    removeBtn.onclick = () => removeItem(index);
    
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  totalDisplay.textContent = `Total: ₹${total}`;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you for your order! Total bill: ₹${total}`);
    cart = [];
    total = 0;
    updateCart();
  }
});
