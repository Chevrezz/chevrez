const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ingrese el nombre del archivo que quiere crear: ', (name) => {

  const layout = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chevrez Furifunlai</title>
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" href="../image/machin2.png" type="image/gif">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
  <div class="main">
    <div class="box">
      <div class="respon-logo">
        <a href="../index"><img src="../image/chevrez.png" alt="Chevrez" class="logo2"></a>
        <br/>
        <div class="nav-respon">
          <nav class="nav-links">
            <a href="../index"><b>Home</b></a>
            <a href="" onclick="team()">Team</a>
            <a href="">aea</a>
          </nav>
          <i onclick="modal()" class="fa-solid fa-bars" id="burger-line"></i>
        </div>
      </div>
      <header class="nav">
        <a href="index"><img src="../image/chevrez.png" alt="Chevrez" class="logo"></a>
        <nav class="nav-links">
          <a href="../index"><b>Home</b></a>
          <a href="" onclick="team()">Team</a>
          <a href="">aea</a>
        </nav>
      </header>
      <br/>
      <main class="content">
        <div class="posts" id="publi">
          <div class="posts-perfil">
            <img class="image-perfil" src="image/logo.jpg">
            <div class="info">
              <span class="name" id="name"> <img src="image/verify.svg" alt=""></span>
              <div class="parr">
                <p id="parr"></p><br/>
                <p id="parr"></p>
              </div>
              <a href="" class="mas">Mostrar más</a>
              <a href class="mas" id="mas"></a>
              <div class="posts-banner">
                <img class="image" src="">
              </div>
              <span class="date" id="fecha"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div class="box-right">
      <div class="boxx">
        <div class="anun">
          <span>Homenaje -> Machin</span>
          <hr>
          <div class="box-image">
            <img class="image" src="../image/machin.jpg">
          </div>
        </div>
        <br/>
        <div class="anun">
          <span><i class="fa-solid fa-photo-film"></i> Photo</span>
          <hr>
          <div class="box-image">
            <img class="image" src="">
          </div>
          <span class="date" id="fecha"></span>
        </div>
        <br/>
        <div class="anun">
          <span><i class="fa-solid fa-share"></i> Compartir</span>
          <hr>
          <div class="share">
            <span onclick="copy()">Compartir Posts</span>
            <span id="res" style="display: none;"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-list" id="modal-list">
      <div class="box-right2" id="modal-box">
        <div class="boxx">
          <div class="anun">
            <span>Homenaje -> Machin</span>
            <hr>
            <div class="box-image">
              <img class="image" src="../image/machin.jpg">
            </div>
          </div>
          <br/>
          <div class="anun">
            <span><i class="fa-solid fa-photo-film"></i> Photo</span>
            <hr>
            <div class="box-image">
              <img class="image" src="../image/chad.jpg">
            </div>
          </div>
          <br/>
          <div class="anun">
            <span><i class="fa-solid fa-share"></i> Compartir</span>
            <hr>
            <div class="share">
              <span onclick="copy()">Compartir Posts</span>
              <span id="res" style="display: none;"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<script>
window.onload = function() {
  let img = document.getElementsByClassName('image');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
      openImage(this.src)
    });
  }
};

function openImage(src) {
  window.open(src, "_self");
}

function team() {
  alert("me da flojera hacerlo hijit@ 🗿")
}

function copy() {
  let res = document.getElementById('res');
  let url = location.href;
  res.innerHTML = url;

  let tempInput = document.createElement('input');
  tempInput.value = url;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');

  document.body.removeChild(tempInput);

  let msg = "El link fue copiada";
  alert(msg);
}

let c = 0
function modal() {
  let modal = document.getElementById('modal-box')

  if (c < 1) {
    modal.style.display = "flex"
    c++
  } else {
    modal.style.display = "none"
    c--
  }
}
</script>
</body>
</html>`

  fs.writeFile(`status/${name}.html`, layout,  (error) => {
    if (error) {
      throw error;
    }

    console.log(`El archivo ${name} ha sido creado!!`);
  });
  
  rl.close();
});