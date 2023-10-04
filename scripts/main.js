// nav
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nalists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    nalists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// cleare from before
window.onbeforeunload = () => {
  for (const from of document.getElementsByName("form")) {
    form.reset();
  }
};
