// navbar
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// banner auto slide
const images = [
  "images/image-1.jpg",
  "images/image-2.jpg",
  "images/image-3.jpg",
  "images/image-4.jpg",
];
let currentIndex = 0;

function changeBackgroundImage() {
  const heroBanner = document.getElementById("hero-banner");
  heroBanner.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 4000); // Ganti setiap 3 detik
window.onload = changeBackgroundImage; // Set gambar awal saat halaman dimuat

// form validation
