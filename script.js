document.addEventListener("DOMContentLoaded", () => {
  includeHeader();
  includeMenu();
});

/* ---------- HEADER ---------- */
async function includeHeader() {
  const container = document.getElementById("header");
  if (!container) return;

  try {
    const response = await fetch("/header.html");
    if (!response.ok) throw new Error("header.html not loaded");
    container.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

/* ---------- MENU ---------- */
async function includeMenu() {
  const container = document.getElementById("menu");
  if (!container) return;

  try {
    const response = await fetch("/menu.html");
    if (!response.ok) throw new Error("menu.html not loaded");
    container.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

/* ---------- BURGER ---------- */
document.addEventListener("click", (e) => {
  const burger = e.target.closest(".burger");
  const overlay = document.getElementById("overlay");
  const menu = document.getElementById("mobileMenu");

  if (!menu || !overlay) return;

  if (burger) {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  if (e.target === overlay) {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.addEventListener("click", (e) => {
  const img = e.target.closest(".gallery img");
  if (img) {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  }

  if (e.target === lightbox) {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }
});

