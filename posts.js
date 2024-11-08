const titleElements = document.querySelectorAll('.title');

const title_post = [];

titleElements.forEach((ps) => {
  const titleContent = ps.textContent;
  const href = ps.getAttribute('href');
  title_post.push({ title: titleContent, href: href });
});


export { title_post };