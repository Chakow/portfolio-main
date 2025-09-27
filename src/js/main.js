const player = document.querySelector(".player");
if (player) {
  const audio = document.getElementById("audio");
  const playButton = player.querySelector(".play");
  const pauseButton = player.querySelector(".pause");
  const currentTimeDisplay = player.querySelector(".current");
  const totalTimeDisplay = player.querySelector(".total");
  const progressInner = player.querySelector(".player-progress-inner");

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Met à jour la durée totale une fois l'audio chargé
  audio.addEventListener("loadedmetadata", () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
  });

  // Gère le bouton play
  playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
    pauseButton.style.display = "flex";
  });

  // Gère le bouton pause
  pauseButton.addEventListener("click", () => {
    audio.pause();
    playButton.style.display = "flex";
    pauseButton.style.display = "none";
  });

  // Met à jour la progression
  audio.addEventListener("timeupdate", () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    let progressPercent = (audio.currentTime / audio.duration) * 100;
    progressInner.style.width = `${progressPercent}%`;
  });

  // Permet de cliquer sur la barre pour avancer dans la chanson
  player
    .querySelector(".player-progress-bar")
    .addEventListener("click", (e) => {
      let rect = e.target.getBoundingClientRect();
      let clickX = e.clientX - rect.left;
      let percent = clickX / rect.width;
      audio.currentTime = percent * audio.duration;
    });
}

//shuffle letterrrrsss ://

import shuffleLetters from "shuffle-letters";

var categories = document.querySelectorAll(".category-project");

categories.forEach((category) => {
  let isAnimating = false;
  let canAnimate = true;

  category.addEventListener("mouseenter", () => {
    if (!isAnimating && canAnimate) {
      isAnimating = true;
      canAnimate = false;

      let projectName = category.querySelector(".project-name"); // Sélectionne uniquement .project-name
      if (projectName) {
        shuffleLetters(projectName, {
          iterations: 4, // Nombre de fois que les lettres changent
          fps: 40, // Fluidité de l'animation
        });
      }

      setTimeout(() => {
        isAnimating = false;
      }, 800); // Durée de l'animation
    }
  });

  category.addEventListener("mouseleave", () => {
    setTimeout(() => {
      canAnimate = true;
    }, 100); // Délai avant de rejouer
  });
});

//page interactive accueil

document.querySelectorAll(".menu-welcome a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const page = this.getAttribute("href");
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
      console.log(this.responseText);
      var container = document.querySelector(".ajax");
      container.innerHTML = this.responseText;
    };

    xhttp.open("GET", page, true);
    xhttp.send();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".menu-title-welcome");
  const welcome = document.querySelector(".welcome");
  const welcomeChildren = document.querySelectorAll(".welcome > *");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      welcomeChildren.forEach(function (child) {
        child.classList.add("menu-title-welcome-click");
      });

      setTimeout(function () {
        welcome.style.opacity = "0";

        setTimeout(function () {
          welcome.style.display = "none";
        }, 180);
      }, 120);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".menu-title-welcome");
  const ajax = document.querySelector(".ajax");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      ajax.classList.add("ajax-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".menu-title-welcome");
  const ajax = document.querySelector(".ajax");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      ajax.classList.add("ajax-active");

      setTimeout(function () {
        ajax.style.opacity = "1";
      }, 180);
    });
  });
});

//agrandissement image

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-image").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
