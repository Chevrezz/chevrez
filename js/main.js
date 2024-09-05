function redirectToPage() {
  var select = document.getElementById("admin-mobil");
  var selectedValue = select.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

let c = 0;
function view() {
  let btn = document.getElementById('burger');
  let box = document.getElementById('res-mobil');

  if (c < 1) {
    box.style.display = "flex"
    c++
  } else {
    box.style.display = "none"
    c--
  }
}
