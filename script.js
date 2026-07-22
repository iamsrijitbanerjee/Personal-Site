document.addEventListener("DOMContentLoaded", () => {

  // --- Dynamic Typing Effect for Hero Subtitle ---
  const typingElement = document.getElementById("typing-text");
  const phrases = [
    "Computer Science Enthusiast 💻",
    "STEM Olympiad Winner 🏆",
    "Football & Badminton Tactics Buff ⚽",
    "Mentalist & Paradox Fanatic ☕"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  // --- Football Score Counter Props ---
  const football = document.getElementById("football");
  const goalCountDisplay = document.getElementById("goalCount");
  let goals = 0;

  football.addEventListener("click", () => {
    goals++;
    goalCountDisplay.textContent = goals;

    // Trigger Kick Animation
    football.style.transform = "translateY(-20px) rotate(360deg)";
    setTimeout(() => {
      football.style.transform = "translateY(0) rotate(0deg)";
    }, 250);
  });

  // --- Mentalist / Patrick Jane Quote Generator ---
  const mentalistQuotes = [
    '"A cup of tea solves everything." — Patrick Jane',
    '"There’s no such thing as magic. Just attention to detail."',
    '"If you stop and look around, life is pretty amazing."',
    '"Control your emotions, or they will control you."',
    '"Truth is in the eye of the observer."',
    '"Tea is the key to clear thinking when solving a tough dilemma."'
  ];

  const quoteDisplay = document.getElementById("mentalistQuote");
  const quoteBtn = document.getElementById("quoteBtn");

  quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * mentalistQuotes.length);
    quoteDisplay.style.opacity = "0";

    setTimeout(() => {
      quoteDisplay.textContent = mentalistQuotes[randomIndex];
      quoteDisplay.style.opacity = "1";
    }, 200);
  });

});