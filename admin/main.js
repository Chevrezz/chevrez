let textarea = document.querySelector('#textarea');
let div = document.querySelector('#div');

function funcionX(e) {
  div.innerHTML = e.target.value;
}
// textarea.addEventListener('keyup', funcionX, false);

function ga() {
  let nm = localStorage.getItem('nm');
  let pass = localStorage.getItem('pass');

  if (nm && pass) {
  } else {
    alert("No eres admin hijito")
    window.open("../index", "_self");
  }
}
ga()


function posts() {
  const cont = tinymce.activeEditor.getContent();
  let posts = document.getElementById('submit')
  
  posts.style.display = "none";

  console.log(cont);
}

tinymce.init({
  selector: 'textarea#edit',
  license_key: 'gpl',
  toolbar: 'undo red | styles forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image | link | preview',
  plugins: 'image editimage link preview',
});


/*
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = '';
  
  return "¿Estás seguro de que deseas actualizar la página, se borrara todo lo que haz escrito?";
});
*/
