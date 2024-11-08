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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
<img class="logo" src="../image/machin2.png">
<div class="nav">
  <a href="../index.html">Home</a>
  <a href="" onclick="anun()">Team</a>
  <a href="">Random</a>
  <div class="burger" onclick="modal()"><i class="fa-solid fa-bars"></i></div>
</div>
<div class="main">
  <div class="aea">

    <div class="box-center">
      <span class="chev-news">News Post</span>
      <hr/>

<!-- LISTA DE PUBLICACIONES -->
<div class="posts">

<div class="content">
<span class="title-posts"></span>
<img class="image" src="">
<p></p>
<div class="date"></div>
</div>

</div>
    </div>

    <div class="box-right">

      <div class="boxx">
        <span class="title">Anuncio</span>
        <hr/>
        <div class="photo">
          <img src="../image/shi.jpeg" />
        </div>
      </div>

      <br/>

      <div class="boxx">
        <span class="title">Compartir Publicación</span>
        <hr/>
        <div class="btn-links">
          <a href="" id="facebook-share"><i class="fa-brands fa-square-facebook"></i>Facebook</a>
          <a href="" id="twitter-share">X(Twitter)</a>
          <a href="" id="whatsapp-share"><i class="fa-brands fa-whatsapp"></i>WhatsApp</a>
          <a href="" id="copyButton"><i class="fa-regular fa-copy"></i>Copiar Link</a>
        </div>
      </div>


    </div>

    <div class="modal" id="modal">
            <div class="boxx">
        <span class="title">Homenaje</span>
        <hr/>
        <div class="photo">
          <img src="../image/machin.jpg" />
        </div>
      </div>

      <br/>

      <div class="boxx">
        <span class="title">Compartir Publicación</span>
        <hr/>
        <div class="btn-links">
          <a href="" id="facebook-share1"><i class="fa-brands fa-square-facebook"></i>Facebook</a>
          <a href="" id="twitter-share1">X(Twitter)</a>
          <a href="" id="whatsapp-share1"><i class="fa-brands fa-whatsapp"></i>WhatsApp</a>
          <a href="" id="copyButton2"><i class="fa-regular fa-copy"></i>Copiar Link</a>
        </div>
      </div>
    </div>

  </div>
</div>
<script src="../redes.js"></script>

<script>
function anun() {
  alert("Me da flojera hijit@ 🗿")
}

var c = 0
function modal() {
  let md = document.getElementById('modal')

  if (c < 1) {
    md.style.display = "flex"
    c++
  } else {
    md.style.display = "none"
    c--
  }
}
</script>
</body>
</html>
`


  fs.writeFile(`status/${name}.html`, layout,  (error) => {
    if (error) {
      throw error;
    }

    console.log(`El archivo ${name} ha sido creado!!`);
  });
  
  rl.close();
});
