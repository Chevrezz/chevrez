function search() {
  let sc = document.getElementById('search').value;
  let table = document.getElementById('table').getElementsByTagName('tr');
  let res = document.getElementById('res');

  let content = ""

  if (sc == "") {
    return 0;
  }
  
  for (let i = 0; i < table.length; i++) {
    let link = table[i].querySelector('a');
    let textLink = link.textContent.toLowerCase();

    if (textLink.includes(sc)) {
      console.log(link.href, link.text);
      content += `<div><a id="res-link" href="${link.href}">${link.text}</a></div>`;
      res.innerHTML = content
    }
  }
}

document.getElementById('search').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    search()
  }
});