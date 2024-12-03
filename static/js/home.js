let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let totalSlides = slides.length;

  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }

  let slider = document.querySelector(".slider");
  let offset = -(slideIndex - 1) * 100;
  slider.style.transform = `translateX(${offset}%)`;

  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 4000);
}

function currentSlide(n) {
  let slider = document.querySelector(".slider");
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  slideIndex = n;
  let offset = -(slideIndex - 1) * 100;
  slider.style.transform = `translateX(${offset}%)`;

  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex - 1].classList.add("active");
}


// ###############################################
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Öğeleri kaydırmaya göre hareket ettir
  document.querySelector(".left-content").style.transform = `translateY(${scrollY * 0.3}px)`;
  document.querySelector(".right-content").style.transform = `translateY(${scrollY * 0.5}px)`;
  document.querySelector(".teaching-section").style.transform = `translateY(${scrollY * 0.1}px)`;
  // document.querySelector(".reviews-section").style.transform = `translateY(${scrollY * 0.2}px)`;
});
