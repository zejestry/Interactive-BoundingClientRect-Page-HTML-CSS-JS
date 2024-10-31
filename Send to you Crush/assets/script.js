// Array of URLs for love GIFs
const loveGifs = [
  "https://media.tenor.com/w-jvEMiA3PMAAAAi/sending-love-and-hugs-sending-love.gif",
  "https://media.tenor.com/17DcqIkp0e4AAAAi/heart-love.gif",
  "https://media.tenor.com/p96XUHeS4q8AAAAi/peach-and-goma-goma.gif",
  "https://media.tenor.com/_4kl3WUiiQUAAAAi/peach-cat.gif",
];

// Function to display a random love GIF
function popRandomLoveGif() {
  const randomLoveGifUrl = loveGifs[Math.floor(Math.random() * loveGifs.length)];

  const popupGif = document.createElement("img");
  popupGif.src = randomLoveGifUrl;
  popupGif.style.position = "fixed";
  popupGif.style.top = Math.random() * window.innerHeight + "px";
  popupGif.style.left = Math.random() * window.innerWidth + "px";
  popupGif.style.width = "100px";
  popupGif.style.height = "100px";
  document.body.appendChild(popupGif);

  setTimeout(() => {
    popupGif.remove();
  }, 2000);
}

// Selecting DOM elements
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const textBelow = document.querySelector(".text-below");

// Array of predefined texts for the "No" button
const predefinedTexts = [
  "No",
];

// Event listener for "Yes" button click
yesBtn.addEventListener("click", () => {
  gif.remove();
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";
  startTypingAnimation();
  setInterval(popRandomLoveGif, 3000); // Show a random love gif every 6 seconds
});

// Array of GIF URLs for "No" button hover
const gifUrls = [
  "https://media.tenor.com/925LDfyVUGEAAAAi/cute-sad.gif",
  "https://media.tenor.com/hLgZBJ7RjzYAAAAi/cute-dog.gif",
  "https://media.tenor.com/2DbtR2cs0-8AAAAi/mimibubu.gif",
  "https://media.tenor.com/wqYFElBnfoYAAAAi/yelynn-yelynnn.gif",
  "https://media.tenor.com/KkDb5-sgVZkAAAAi/sad-anxious.gif",
  "https://media.tenor.com/JQylNRYWG9QAAAAi/sad.gif",
  "https://media.tenor.com/FPzGMNfFGnYAAAAi/cute-cat.gif",
  "https://media.tenor.com/fYlDBJAaG3AAAAAi/tkthao219-bubududu.gif",
  "https://media.tenor.com/kZQ5tEqCoWsAAAAi/sad-boo-sad.gif",
  "https://media.tenor.com/b05cSfPU2VkAAAAi/sad-dp.gif",
];

// Event listener for "No" button hover
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  if (currentIndex < predefinedTexts.length) {
    noBtn.innerHTML = predefinedTexts[currentIndex];
    if (predefinedTexts[currentIndex] === "No") {
      yesBtn.innerHTML = "Please";
    }
    currentIndex++;
  }

  const randomGifUrl = gifUrls[Math.floor(Math.random() * gifUrls.length)];

  const popupGif = document.createElement("img");
  popupGif.src = randomGifUrl;
  popupGif.style.position = "fixed";
  popupGif.style.top = Math.random() * window.innerHeight + "px";
  popupGif.style.left = Math.random() * window.innerWidth + "px";
  popupGif.style.width = "100px";
  popupGif.style.height = "100px";
  document.body.appendChild(popupGif);

  setTimeout(() => {
    popupGif.remove();
  }, 2000);

  const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  const maxSize = 30;
  const newSize = Math.min(currentSize + 2, maxSize);
  yesBtn.style.fontSize = newSize + "px";

  centerYesButton();
});

// Function to center the "Yes" button
function centerYesButton() {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const windowWidth = window.innerWidth;
  const centerX = (windowWidth - yesBtnRect.width) / 2;

  yesBtn.style.right = centerX + "px";
}

// Event listener for window resize
window.addEventListener("resize", () => {
  // Check if the no button is clicked
  if (hoverCount > 0) {
    centerYesButton();
  } else {
    // Check if the screen width is less than 600px (mobile)
    if (window.innerWidth < 600) {
      centerYesButton();
    } else {
      yesBtn.style.right = ""; // Remove inline style if not centered
    }
  }
});

// Event listener for "No" button hover
noBtn.addEventListener("mouseover", () => {
  hoverCount++;
  centerYesButton();
});

// Function to start the typing animation
function startTypingAnimation() {
  const congratsSection = document.querySelector(".congrats-section");
  const congratsText = document.getElementById("congratsText");

  const congratsMessages = [
    "",
  ];

  let currentIndex = 0;

  congratsText.textContent = congratsMessages[currentIndex];
  currentIndex++;

  wrapper.style.display = "none";
  congratsSection.style.display = "block";
}

// Adding z-index to buttons
yesBtn.style.zIndex = "1";
noBtn.style.zIndex = "1";

// Variables for hover text handling
let hoverIndex = 0;
let lastDisplayedIndex = -1;

// Event listener for "No" button hover
noBtn.addEventListener("mouseover", () => {
  if (hoverTexts.length > 0) {
    lastDisplayedIndex = (lastDisplayedIndex + 1) % hoverTexts.length;
    textBelow.textContent = hoverTexts[lastDisplayedIndex];
    hoverTexts.splice(lastDisplayedIndex, 1);

    textBelow.classList.add("fade-in");
  }
});

// Adding sound effect when clicking anywhere on the screen
document.addEventListener("click", () => {
  const clickSound = document.getElementById("clickSound");
  clickSound.play();
});

// Selecting all span elements with class "word"
const spans = document.querySelectorAll('.word span');

// Adding click event listener to each span element
spans.forEach((span, idx) => {
  // Event listener to add "active" class on click
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  // Event listener to remove "active" class after animation ends
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});

class ClickSpark extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.root = document.documentElement;
    this.svg;
  }

  get activeEls() {
    return this.getAttribute("active-on");
  }

  connectedCallback() {
    this.setupSpark();

    this.root.addEventListener("click", (e) => {
      if (this.activeEls && !e.target.matches(this.activeEls)) return;

      this.setSparkPosition(e);
      this.animateSpark();
    });
  }

  animateSpark() {
    let sparks = [...this.svg.children];
    let size = parseInt(sparks[0].getAttribute("y1"));
    let offset = size / 2 + "px";

    let keyframes = (i) => {
      let deg = `calc(${i} * (360deg / ${sparks.length}))`;

      return [
        {
          strokeDashoffset: size * 3,
          transform: `rotate(${deg}) translateY(${offset})`
        },
        {
          strokeDashoffset: size,
          transform: `rotate(${deg}) translateY(0)`
        }
      ];
    };

    let options = {
      duration: 660,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      fill: "forwards"
    };

    sparks.forEach((spark, i) => spark.animate(keyframes(i), options));
  }

  setSparkPosition(e) {
    let rect = this.root.getBoundingClientRect();

    this.svg.style.left =
      e.clientX - rect.left - this.svg.clientWidth / 2 + "px";
    this.svg.style.top =
      e.clientY - rect.top - this.svg.clientHeight / 2 + "px";
  }

  setupSpark() {
    let template = `
      <style>
        :host {
          display: contents;
        }
        
        svg {
          pointer-events: none;
          position: absolute;
          rotate: -20deg;
          stroke: var(--click-spark-color, currentcolor);
        }

        line {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          transform-origin: center;
        }
      </style>
      <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
        ${Array.from(
          { length: 8 },
          (_) => `<line x1="50" y1="30" x2="50" y2="4"/>`
        ).join("")}
      </svg>
    `;

    this.shadowRoot.innerHTML = template;
    this.svg = this.shadowRoot.querySelector("svg");
  }
}

customElements.define("click-spark", ClickSpark);
