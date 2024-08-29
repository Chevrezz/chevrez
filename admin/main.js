let textarea = document.querySelector('#textarea');
let div = document.querySelector('#div');

function funcionX(e) {
  div.innerHTML = e.target.value;
}
textarea.addEventListener('keyup', funcionX, false);

function posts() {
  let titlew =  document.getElementById('titlew').value;
  let despw = document.getElementById('descripw').value;
  let text = document.getElementById('textarea').value;

  if (titlew == "") {
    alert("Completa los campos")
    console.log("ga");
    return 0;
  }
  if (text == "") {
    alert("Escribe algo mi king");
    console.log("ga2");
    return 0;
  }

  //console.log("a");

  console.log(titlew, despw);
}

function preview() {
  let titlew =  document.getElementById('titlew').value;
  let despw = document.getElementById('descripw').value;

  let dv = div.value

  localStorage.setItem('parr', dv)
  localStorage.setItem('title', titlew)
  localStorage.setItem('desp', despw)

  window.open('../preview', '_self');
}


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


/*
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = '';
  
  return "¿Estás seguro de que deseas actualizar la página, se borrara todo lo que haz escrito?";
});
*/
