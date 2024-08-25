let c = 0;
function back() {
  let cart = document.getElementById('cart');
  let back = document.getElementById('back');

  if (c < 1) {
    back.style.display = "flex";
    cart.style.display = "none";
    c++
  } else {
    back.style.display = "none";
    cart.style.display = "flex";
    c--
  }
}
