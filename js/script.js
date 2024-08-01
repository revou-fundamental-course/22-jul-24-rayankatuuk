// navbar
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// banner auto slide
const images = [
  "images/arty-gg0KaRAZ4pQ-unsplash.jpg",
  "images/johannes-mandle-zllTu_yyJoQ-unsplash.jpg",
  "images/sebastian-pena-lambarri-U_i6h9Y50wQ-unsplash.jpg",
  "images/sutirta-budiman-DxmBSgUYKis-unsplash.jpg",
  "images/wexor-tmg-L-2p8fapOA8-unsplash.jpg",
];
let currentIndex = 0;

function changeBackgroundImage() {
  const heroBanner = document.getElementById("hero-banner");
  heroBanner.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000); // Ganti setiap 3 detik
window.onload = changeBackgroundImage; // Set gambar awal saat halaman dimuat

// form validation
