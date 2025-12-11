//shuffle letterrrrsss ://

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
//ANIMATION ACCUEIL

//ANIMATION PERSO ACCUEIL
document.addEventListener("DOMContentLoaded", () => {
  const personnage = document.querySelector(".home-personnage");
  const container = document.querySelector(".welcome");

  let progress = 0;
  let targetProgress = 0;

  const distancePercent = 30; // le personnage se déplace sur 80% de la largeur de l'écran

  // écoute la molette
  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 1300;
      targetProgress += e.deltaY / sensitivity;
      targetProgress = Math.max(0, Math.min(1, targetProgress));
    },
    { passive: true }
  );

  function tick() {
    // mise à jour de progress
    progress += (targetProgress - progress) * 0.1;

    // calcule la distance réelle en pixels
    const distancePx = (distancePercent / 100) * window.innerWidth;

    // applique le mouvement
    gsap.set(personnage, { y: distancePx * progress });

    // disparition / réapparition
    if (progress >= 0.99) personnage.style.display = "none";
    else if (personnage.style.display === "none") personnage.style.display = "";

    requestAnimationFrame(tick);
  }

  tick();
});

//ANIMATION PORTFOLIO ACCUEIL
document.addEventListener("DOMContentLoaded", () => {
  const portfolioText = document.querySelector(".portfolio-text");
  const container = document.querySelector(".welcome");

  let progress = 0;
  let targetProgress = 0;

  const distancePercent = -30; // le personnage se déplace sur 80% de la largeur de l'écran

  // écoute la molette
  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 1300;
      targetProgress += e.deltaY / sensitivity;
      targetProgress = Math.max(0, Math.min(1, targetProgress));
    },
    { passive: true }
  );

  function tick() {
    // mise à jour de progress
    progress += (targetProgress - progress) * 0.1;

    // calcule la distance réelle en pixels
    const distancePx = (distancePercent / 100) * window.innerWidth;

    // applique le mouvement
    gsap.set(portfolioText, { y: distancePx * progress });

    // disparition / réapparition
    if (progress >= 0.99) portfolioText.style.display = "none";
    else if (portfolioText.style.display === "none")
      portfolioText.style.display = "";

    requestAnimationFrame(tick);
  }

  tick();
});

//ANIMATION LOGO ACCUEIL
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const container = document.querySelector(".welcome");

  let progress = 0;
  let targetProgress = 0;

  const distancePercent = 30; // le personnage se déplace sur 80% de la largeur de l'écran

  // écoute la molette
  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 1300;
      targetProgress += e.deltaY / sensitivity;
      targetProgress = Math.max(0, Math.min(1, targetProgress));
    },
    { passive: true }
  );

  function tick() {
    // mise à jour de progress
    progress += (targetProgress - progress) * 0.1;

    // calcule la distance réelle en pixels
    const distancePx = (distancePercent / 100) * window.innerWidth;

    // applique le mouvement
    gsap.set(logo, { x: distancePx * progress });

    // disparition / réapparition
    if (progress >= 0.99) logo.style.display = "none";
    else if (logo.style.display === "none") logo.style.display = "";

    requestAnimationFrame(tick);
  }

  tick();
});

//ANIMATION CHARLOT KOLLY ACCUEIL
document.addEventListener("DOMContentLoaded", () => {
  const homeCharlotKolly = document.querySelector(".home-charlot-kolly");
  const container = document.querySelector(".welcome");

  let progress = 0;
  let targetProgress = 0;

  const distancePercent = -40; // le personnage se déplace sur 80% de la largeur de l'écran

  // écoute la molette
  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 1300;
      targetProgress += e.deltaY / sensitivity;
      targetProgress = Math.max(0, Math.min(1, targetProgress));
    },
    { passive: true }
  );

  function tick() {
    // mise à jour de progress
    progress += (targetProgress - progress) * 0.1;

    // calcule la distance réelle en pixels
    const distancePx = (distancePercent / 100) * window.innerWidth;

    // applique le mouvement
    gsap.set(homeCharlotKolly, { x: distancePx * progress });

    // disparition / réapparition
    if (progress >= 0.99) homeCharlotKolly.style.display = "none";
    else if (homeCharlotKolly.style.display === "none")
      homeCharlotKolly.style.display = "";

    requestAnimationFrame(tick);
  }

  tick();
});
//ANIMATION LIGHT AND LAMP
//TRANSLATE
document.addEventListener("DOMContentLoaded", () => {
  const lamp = document.querySelector(".light-and-lamp");
  const container = document.querySelector(".welcome");

  let progress = 0;
  let targetProgress = 0;

  // Valeurs séparées
  const moveTopPercent = 7; // ex: -8% sur l'axe Y
  const moveRightPercent = 5; // ex: -12% sur l'axe X

  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 400;
      targetProgress += e.deltaY / sensitivity;
      targetProgress = Math.max(0, Math.min(1, targetProgress));
    },
    { passive: true }
  );

  function tick() {
    progress += (targetProgress - progress) * 0.1;

    lamp.style.top = `${-moveTopPercent * progress}%`;
    lamp.style.right = `${-moveRightPercent * progress}%`;

    requestAnimationFrame(tick);
  }

  tick();
});
//ROTATE LAMP

document.addEventListener("DOMContentLoaded", () => {
  const lamp = document.querySelector(".home-lamp");
  const container = document.querySelector(".welcome");

  let progressLamp = 0; // valeur actuelle
  let targetProgressLamp = 0; // valeur cible

  const rotateAngle = 13; // angle final en degrés

  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 400; // ajuste la vitesse
      targetProgressLamp += e.deltaY / sensitivity;
      targetProgressLamp = Math.max(0, Math.min(1, targetProgressLamp));
    },
    { passive: true }
  );

  function tickLamp() {
    // interpolation douce
    progressLamp += (targetProgressLamp - progressLamp) * 0.1;

    // applique la rotation
    gsap.set(lamp, { rotate: rotateAngle * progressLamp });

    // disparition/réapparition si tu veux
    // if (progressLamp >= 1) lamp.style.display = "none";
    // else if (lamp.style.display === "none") lamp.style.display = "";

    requestAnimationFrame(tickLamp);
  }

  tickLamp();
});

//ROTATE LIGHT
document.addEventListener("DOMContentLoaded", () => {
  const light = document.querySelector(".home-light");
  const container = document.querySelector(".welcome");

  let progressLight = 0; // valeur actuelle
  let targetProgressLight = 0; // valeur cible

  const rotateAngle = 13; // angle final en degrés

  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 400; // ajuste la vitesse
      targetProgressLight += e.deltaY / sensitivity;
      targetProgressLight = Math.max(0, Math.min(1, targetProgressLight));
    },
    { passive: true }
  );

  function tickLight() {
    // interpolation douce
    progressLight += (targetProgressLight - progressLight) * 0.1;

    // applique la rotation
    gsap.set(light, { rotate: rotateAngle * progressLight });

    // disparition/réapparition si tu veux
    // if (progressLamp >= 1) lamp.style.display = "none";
    // else if (lamp.style.display === "none") lamp.style.display = "";

    requestAnimationFrame(tickLight);
  }

  tickLight();
});
//OPACITE QUI DISPARRAIT ACCUEIL FOND
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".welcome");

  const cover = document.querySelector(".cover-home-image");
  const grain = document.querySelector(".texture-grain");
  const black = document.querySelector(".black-fill");

  let progress = 0;
  let targetProgress = 0;

  container.addEventListener(
    "wheel",
    (e) => {
      if (e.target.closest(".projects-list")) return;

      const sensitivity = 400; // augmente pour rendre le scroll moins sensible
      targetProgress += e.deltaY / sensitivity;
      targetProgress = Math.max(0, Math.min(1, targetProgress));
    },
    { passive: true }
  );

  function tick() {
    // interpolation fluide
    progress += (targetProgress - progress) * 0.1;

    // opacité qui va de 1 à 0 selon le scroll
    const opacity = 1 - progress;

    cover.style.opacity = opacity;
    grain.style.opacity = opacity;
    black.style.opacity = opacity;

    requestAnimationFrame(tick);
  }

  tick();
});
//EMPECHER LA PAGE DE SCROLLER QUAND ON EST SUR PROJECTS LIST
const list = document.querySelector(".projects-list");

// désactive tous les ScrollTriggers
function disableScrollTriggers() {
  gsap.utils.toArray(ScrollTrigger.getAll()).forEach((trigger) => {
    trigger.disable(false); // false = ne pas réinitialiser
  });
}

// réactive tous les ScrollTriggers
function enableScrollTriggers() {
  gsap.utils.toArray(ScrollTrigger.getAll()).forEach((trigger) => {
    trigger.enable(false);
  });
}

list.addEventListener("pointerenter", () => {
  disableScrollTriggers();
});

list.addEventListener("pointerleave", () => {
  enableScrollTriggers();
});

// BURGER MENU
const burger = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  navigation.classList.toggle("is-active");
});

const [openIcon, closeIcon] = burger.querySelectorAll("img");

burger.addEventListener("click", () => {
  openIcon.classList.toggle("is-not-active");
  closeIcon.classList.toggle("is-not-active");
});
