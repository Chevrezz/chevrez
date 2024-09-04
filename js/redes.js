// copy link
var result = document.getElementById('result')
var url = window.location.href;
result.innerHTML = url

function copiar() {
  let result = document.getElementById('result').innerHTML
  let copy = document.getElementById('copy');

  navigator.clipboard.writeText(result);
  setTimeout(function() {
    copy.innerHTML = "";
  },1000)

  copy.innerHTML = "Copiado!!";
}

// WASAP
let currentUrl = window.location.href;
let text = '¡Mira esto mi king! 🦍' + currentUrl;
let whatsappShareUrl = 'https://wa.me/?text=' + encodeURIComponent(text);
document.getElementById('whatsapp-share').href = whatsappShareUrl;

// FB
let currentUrl2 = window.location.href;
let facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl2);
document.getElementById('facebook-share').href = facebookShareUrl;

// TWITTER
let currentUrl3 = window.location.href;
let tex = '¡Mira esto mi king! 🦍';
let twitterShareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl3) + '&text=' + encodeURIComponent(tex);
document.getElementById('twitter-share').href = twitterShareUrl;

// REDDIT
let currentUrl4 = window.location.href;
let title = '¡Mira esto mi king! 🦍';
let redditShareUrl = 'https://www.reddit.com/submit?url=' + encodeURIComponent(currentUrl4) + '&title=' + encodeURIComponent(title);
document.getElementById('reddit-share').href = redditShareUrl;

