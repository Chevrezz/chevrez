// ****** FACEBOOK ******

let currentUrl = window.location.href;
let facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl);
document.getElementById('facebook-share').href = facebookShareUrl;

// ****** X(TWITTER) ******

let currentUrl2 = window.location.href;
let text1 = '¡Mira esto!';
let twitterShareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(text1);
document.getElementById('twitter-share').href = twitterShareUrl;

// ****** WHATSAPP ******

let currentUrl3 = window.location.href;
let text2 = '¡Mira esto! ' + currentUrl3;
let whatsappShareUrl = 'https://wa.me/?text=' + encodeURIComponent(text2);
document.getElementById('whatsapp-share').href = whatsappShareUrl;



// COPIAR URL DE LA PAGINA
document.getElementById('copyButton').addEventListener('click', function() {
  const currentURL = window.location.href;

  navigator.clipboard.writeText(currentURL).then(function() {
    alert('El link fue copiado: ' + currentURL);
  }).catch(function(error) {
    console.error('Error al copiar el URL: ', error);
  });
});


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

//modal


// ****** FACEBOOK ******

let url_ = window.location.href;
let fb_url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url_);
document.getElementById('facebook-share1').href = fb_url;

// ****** X(TWITTER) ******

let url_t = window.location.href;
let tex = '¡Mira esto!';
let x_url = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url_t) + '&text=' + encodeURIComponent(tex);
document.getElementById('twitter-share1').href = x_url;

// ****** WHATSAPP ******

let url_w = window.location.href;
let txt = '¡Mira esto! ' + url_w;
let wsp_url = 'https://wa.me/?text=' + encodeURIComponent(txt);
document.getElementById('whatsapp-share1').href = wsp_url;



// COPIAR URL DE LA PAGINA
document.getElementById('copyButton2').addEventListener('click', function() {
  const currentURL = window.location.href;

  navigator.clipboard.writeText(currentURL).then(function() {
    alert('El link fue copiado: ' + currentURL);
  }).catch(function(error) {
    console.error('Error al copiar el URL: ', error);
  });
});