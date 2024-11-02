import { post } from "./posts.js";

post.reverse()

function posteos() {
  let result = ""
  let publi = document.getElementById('publi')
  let number = document.getElementById('number')
  let number2 = document.getElementById('number2')
  post.forEach(p => {
    result += `
      <div class="posts-perfil">
        <img class="image-perfil" src="image/logo.jpg">
        <div class="info">
          <span class="name" id="name">${p.name} <img src="image/verify.svg" alt=""></span>
          <div class="parr">
            <p id="parr">${p.parr}</p><br/>
            <p id="parr">${p.parr2}</p>
          </div>
          <a href="${p.link}" class="mas">Mostrar más</a>
          <a href class="mas" id="mas"></a>
          <div class="posts-banner">
            <img class="image" src="${p.image1}">
          </div>
          <span class="date" id="fecha">${p.date}</span>
        </div>
      </div>
      <br/><hr id="hr" /><br/>
    `
    number.innerHTML = post.length
    number2.innerHTML = post.length
    publi.innerHTML = result
    console.log(p.name)
  })
}

function listar_posts() {
  let list = document.getElementById('list-posts')
  let list2 = document.getElementById('list-posts2')
  let aea = ""

  post.forEach(l => {
    aea += `
    <div class="aea"><img class="image-perfil2" src="image/logo.jpg"><a href="${l.link}" class="box-list">${l.parr}</a></div><br/>
    `

    list.innerHTML = aea;
    list2.innerHTML = aea;
  })
}

listar_posts()
posteos()
