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

//agrandissement image

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
// const closeButton = document.querySelector(".close-image");

document.querySelectorAll(".project-image").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// closeButton.onclick = () => {
//   modal.style.display = "none";
// };

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//ANIMATION ACCUEIL

// script.js
// Fonctionne même si la page est fixe (overflow:hidden).
// On capte wheel / touchmove / clavier et on mappe sur --tx / --ty.

const els = document.querySelectorAll(".personnage-accueil");

if (!els.length) {
  console.warn("Aucun élément .personnage-accueil trouvé.");
}

// params à ajuster selon l'effet souhaité
let virtualScroll = 0; // valeur accumulée (0..maxScroll)
let maxScroll = window.innerHeight * 1.0; // distance "virtuelle" pour atteindre 100% (modifiable)
let maxOffsetFactor = 0.6; // fraction de la largeur/hauteur utilisée pour le déplacement
let wheelSpeed = 1.0; // sensibilité molette (augmente pour réactions plus fortes)
let touchSpeed = 1.0; // sensibilité touch
let ticking = false;

// helper
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// détermine la direction X/Y en lisant la classe ou data-direction
function getDirection(el) {
  const dir =
    el.dataset.direction ||
    Array.from(el.classList).find((c) =>
      /^(top|bottom)-(left|right)$/.test(c)
    ) ||
    "top-left";
  // dir format : "top-left" etc
  const [vert, horiz] = dir.split("-"); // ex ["top","left"]
  const dirX = horiz === "right" ? 1 : -1;
  const dirY = vert === "bottom" ? 1 : -1;
  return { dirX, dirY };
}

function updateTransforms() {
  ticking = false;
  const progress = clamp(virtualScroll / maxScroll, 0, 1); // 0..1
  const maxOffsetX = window.innerWidth * maxOffsetFactor;
  const maxOffsetY = window.innerHeight * maxOffsetFactor;

  els.forEach((el) => {
    const { dirX, dirY } = getDirection(el);
    const tx = dirX * progress * maxOffsetX; // px
    const ty = dirY * progress * maxOffsetY; // px
    el.style.setProperty("--tx", `${tx}px`);
    el.style.setProperty("--ty", `${ty}px`);
  });
}

// schedule update via rAF pour perf
function scheduleUpdate() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updateTransforms);
  }
}

/* ----------------- capture wheel ----------------- */
// use passive:false so we can preventDefault if needed (we use overflow:hidden so not strictly necessary)
window.addEventListener(
  "wheel",
  (e) => {
    // e.preventDefault(); // pas nécessaire si overflow:hidden, mais tu peux décommenter si tu veux bloquer tout comportement par défaut
    const delta = e.deltaY; // positif quand on "descend"
    virtualScroll += delta * wheelSpeed;
    virtualScroll = clamp(virtualScroll, 0, maxScroll);
    scheduleUpdate();
  },
  { passive: false }
);

/* ----------------- capture touch (mobile) ----------------- */
let lastTouchY = null;

window.addEventListener(
  "touchstart",
  (e) => {
    if (e.touches.length === 1) lastTouchY = e.touches[0].clientY;
  },
  { passive: true }
);

window.addEventListener(
  "touchmove",
  (e) => {
    if (!lastTouchY) return;
    const y = e.touches[0].clientY;
    const dy = lastTouchY - y; // si on glisse vers le haut, dy > 0 → on "descend" virtuellement
    lastTouchY = y;
    // e.preventDefault(); // si tu veux empêcher le comportement natif (bouncing), décommente et set passive:false plus haut
    virtualScroll += dy * touchSpeed;
    virtualScroll = clamp(virtualScroll, 0, maxScroll);
    scheduleUpdate();
  },
  { passive: false }
);

window.addEventListener(
  "touchend",
  () => {
    lastTouchY = null;
  },
  { passive: true }
);

/* ----------------- clavier (optionnel) ----------------- */
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    virtualScroll += 50;
    virtualScroll = clamp(virtualScroll, 0, maxScroll);
    scheduleUpdate();
  } else if (e.key === "ArrowUp") {
    virtualScroll -= 50;
    virtualScroll = clamp(virtualScroll, 0, maxScroll);
    scheduleUpdate();
  }
});

/* ----------------- resize → recalc les contraintes ----------------- */
window.addEventListener("resize", () => {
  maxScroll = window.innerHeight * 1.0; // tu peux changer le multiplicateur
  scheduleUpdate();
});

// init (si la page n'est pas au top)
updateTransforms();
