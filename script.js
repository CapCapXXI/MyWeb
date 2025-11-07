async function loadArticle(path) {
      const response = await fetch(path);
      const html = await response.text();
      document.getElementById('article-content').innerHTML = html;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }


async function includeMenu() {
  const menuContainer = document.getElementById("menu");
  const response = await fetch("menu.html");
  const html = await response.text();
  menuContainer.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", includeMenu);
