function ga() {
  let get_name = localStorage.getItem('nm');
  let get_pass = localStorage.getItem('pass');
  let admin = document.getElementById('admin');
  let hr = document.getElementById('hr');
  let admin_box = document.getElementById('admin-box');
  let select = document.getElementById("admin-mobil");

  if (get_name && get_pass) {
    hr.style.display = "flex";
    admin_box.style.display = "flex";
    select.style.display = "flex"
  }
}
ga()

