// Selecting DOM elements
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Predefined texts for when 'No' button is hovered
const predefinedTexts = [
  "supot ka eh",
  "bobo mo",
  "Iwasan mo ako"
];

let currentIndex = 0; // Index to keep track of current predefined text

// Event listener for 'Yes' button click
yesBtn.addEventListener("click", () => {
  // Change question text
  question.innerHTML = "Yay! Now Please read this I'm your Boyfriend now";

  // Remove GIF
  gif.remove();

  // Hide buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Style wrapper
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";

  // Start typing animation
  startTypingAnimation();
});

// Event listener for 'No' button mouseover
noBtn.addEventListener("mouseover", () => {
  // Get random position for 'No' button
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Set position of 'No' button
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Display predefined text on hover
  if (currentIndex < predefinedTexts.length) {
    noBtn.innerHTML = predefinedTexts[currentIndex];
    if (predefinedTexts[currentIndex] === "Iwasan mo ako") {
      yesBtn.innerHTML = "Please";
    }
    currentIndex++;
  }

  // Increase font size on hover
  const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  const maxSize = 30;
  const newSize = Math.min(currentSize + 2, maxSize);
  yesBtn.style.fontSize = newSize + "px";
});

// Function to start typing animation
function startTypingAnimation() {
  // Selecting DOM elements
  const congratsSection = document.querySelector(".congrats-section");
  const congratsText = document.getElementById("congratsText");

  // Array of congratulatory messages
  const congratsMessages = [
    "Salamat crush na mahal mo ako",
    "Ako ang magiging loyal Boyfriend mo hangang kamatayan",
  ];

  let charIndex = 0; // Index to keep track of current character being typed
  let currentIndex = 0; // Index to keep track of current message being typed
  let typingInterval; // Variable to store interval ID for typing animation

  // Function to type message
  function typeMessage() {
    const currentMessage = congratsMessages[currentIndex];
    if (charIndex < currentMessage.length) {
      congratsText.textContent += currentMessage.charAt(charIndex);
      charIndex++;
      typingInterval = setTimeout(typeMessage, 100);
    } else {
      // Start deleting message after typing
      if (currentIndex === congratsMessages.length - 1) {
        setTimeout(deleteMessage, 3000);
      } else {
        setTimeout(deleteMessage, 1500);
      }
    }
  }

  // Function to delete message
  function deleteMessage() {
    if (congratsText.textContent.length > 0) {
      congratsText.textContent = congratsText.textContent.slice(0, -1);
      typingInterval = setTimeout(deleteMessage, 50);
    } else {
      currentIndex = (currentIndex + 1) % congratsMessages.length;
      charIndex = 0;
      setTimeout(typeMessage, 500);
    }
  }

  // Start typing animation
  typeMessage();

  // Hide wrapper and show congrats section
  wrapper.style.display = "none";
  congratsSection.style.display = "block";
}

// Event listener for 'No' button click (Optional)
noBtn.addEventListener("click", () => {
  // Do something if necessary
});

// Array of GIF URLs for 'No' button mouseover
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
  // Add more URLs here...
];

// Event listener for 'No' button mouseover
noBtn.addEventListener("mouseover", () => {
  // Get random GIF URL
  const randomIndex = Math.floor(Math.random() * gifUrls.length);
  const randomGifUrl = gifUrls[randomIndex];

  // Create and display popup GIF
  const popupGif = document.createElement("img");
  popupGif.src = randomGifUrl;
  popupGif.style.position = "fixed";
  popupGif.style.top = Math.random() * window.innerHeight + "px";
  popupGif.style.left = Math.random() * window.innerWidth + "px";
  popupGif.style.width = "150px";
  popupGif.style.height = "150px";
  document.body.appendChild(popupGif);

  // Remove popup GIF after 2 seconds
  setTimeout(() => {
    popupGif.remove();
  }, 2000);
});

// Function to copy text
function copyText() {
  const containerContent = document.querySelector('.container').innerText;
  
  // Remove the specific part from the copied text
  const textWithoutCongratsMessages = containerContent.replace(`"Ako ang magiging loyal Boyfriend mo hangang kamatayan",`, "");

  // Create a temporary textarea element and copy the modified text to it
  const textarea = document.createElement('textarea');
  textarea.value = textWithoutCongratsMessages;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Show "Copied!" popup
  const popup = document.getElementById("popup");
  popup.style.display = "block";

  // Hide "Copied!" popup after 2 seconds
  setTimeout(function() {
      popup.style.display = "none";
  }, 2000);
}

