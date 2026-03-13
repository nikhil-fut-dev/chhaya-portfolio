const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.2 },
);
sections.forEach((sec) => observer.observe(sec));

const imgs = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
imgs.forEach((img) =>
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  }),
);
lightbox.addEventListener("click", () => (lightbox.style.display = "none"));

ba.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  ba.querySelector(".after").style.width = x + "px";
  slider.style.left = x + "px";
});