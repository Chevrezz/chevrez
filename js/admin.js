function ga() {
  let get_name = localStorage.getItem('nm');
  let get_pass = localStorage.getItem('pass');
  let admin = document.getElementById('admin');
  let hr = document.getElementById('hr');
  let admin_box = document.getElementById('admin-box');

  if (get_name && get_pass) {
    hr.style.display = "flex";
    admin_box.style.display = "flex";
  }
}
ga()

