const hamburger = document.querySelector(".hamburger");
const feature = document.querySelector(".feature");
const removeIcon = document.querySelector(".removeIcon");
feature.classList.add("-translate-x-96");

hamburger.addEventListener("click", (e) => {
  console.log("Hamburger clicked here.", e.target);
  feature.classList.remove("-translate-x-96");
  feature.classList.add("transition-all");
  feature.classList.add("duration-300");
  feature.classList.add("ease-linear");
  removeIcon.classList.remove("hidden");
  hamburger.classList.add("hidden");
  feature.classList.add("w-[100%]");
  feature.classList.remove("w-fit");
});

removeIcon.addEventListener("click", (e) => {
  feature.classList.add("-translate-x-96");
  removeIcon.classList.add("hidden");
  hamburger.classList.remove("hidden");
  feature.classList.remove("w-[100%]");
  feature.classList.add("w-fit");
});
