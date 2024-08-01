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
function validateForm() {
  // Get input value
  const name = document.forms["callus-form"]["name"].value;
  const email = document.forms["callus-form"]["email"].value;
  const interest = document.forms["callus-form"]["interest"].value;

  // Validate input
  if (name == "" || email == "" || interest == "") {
    // document.getElementById("callus-form");
    alert("Tidak boleh kosong!");
    return false;
  } else {
    alert("Terima Kasih, Sales kami akan menghubungi Anda!");
  }

  setSenderUI(name, email, interest);
  return false;
}
