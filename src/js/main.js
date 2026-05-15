//shuffle letters ://

import shuffleLetters from "shuffle-letters";

var categories = document.querySelectorAll(".category-project");

// Désactive l'effet sous 767px
const allowShuffle = window.innerWidth >= 767;

categories.forEach((category) => {
  let isAnimating = false;
  let canAnimate = true;

  category.addEventListener("mouseenter", () => {
    if (!allowShuffle) return;

    if (!isAnimating && canAnimate) {
      isAnimating = true;
      canAnimate = false;

      let projectName = category.querySelector(".project-name");
      if (projectName) {
        shuffleLetters(projectName, {
          iterations: 4,
          fps: 40,
        });
      }

      setTimeout(() => {
        isAnimating = false;
      }, 800);
    }
  });

  category.addEventListener("mouseleave", () => {
    if (!allowShuffle) return;
    setTimeout(() => {
      canAnimate = true;
    }, 100);
  });
});
