document.addEventListener("DOMContentLoaded", () => {

  // --- Dynamic Typing Effect in Hero ---
  const typingElement = document.getElementById("typing-text");
  const phrases = [
    "Computer Science Engineer 💻",
    "STEM Olympiad Winner 🏆",
    "Tactical Football & Badminton Buff ⚽",
    "The Mentalist & Logic Enthusiast ☕"
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

    let typeSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  // --- FUT Manager Card Modal Control ---
  const futModal = document.getElementById("futModal");
  const openFutBtn = document.getElementById("openFutBtn");
  const closeFutBtn = document.getElementById("closeFutBtn");

  openFutBtn.addEventListener("click", () => {
    futModal.classList.add("active");
  });

  closeFutBtn.addEventListener("click", () => {
    futModal.classList.remove("active");
  });

  futModal.addEventListener("click", (e) => {
    if (e.target === futModal) {
      futModal.classList.remove("active");
    }
  });

  // --- Football Goal Counter Interactive Game ---
  const kickBall = document.getElementById("kickBall");
  const goalsCount = document.getElementById("goalsCount");
  let score = 0;

  kickBall.addEventListener("click", () => {
    score++;
    goalsCount.textContent = score;

    kickBall.style.transform = "translateY(-25px) rotate(360deg)";
    setTimeout(() => {
      kickBall.style.transform = "translateY(0) rotate(0deg)";
    }, 250);
  });

  // --- Patrick Jane Quote Generator ---
  const mentalistQuotes = [
    '"A cup of tea solves everything." — Patrick Jane',
    '"There’s no such thing as magic. Just attention to detail."',
    '"If you stop and look around, life is pretty amazing."',
    '"Control your emotions, or they will control you."',
    '"Truth is in the eye of the observer."',
    '"Tea is the key to clear thinking when solving a tough dilemma."'
  ];

  const quoteDisplay = document.getElementById("mentalistQuote");
  const brewQuoteBtn = document.getElementById("brewQuoteBtn");

  brewQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * mentalistQuotes.length);
    quoteDisplay.style.opacity = "0";

    setTimeout(() => {
      quoteDisplay.textContent = mentalistQuotes[randomIndex];
      quoteDisplay.style.opacity = "1";
    }, 200);
  });

  // --- Chess Puzzle Solution Toggle ---
  const solveChessBtn = document.getElementById("solveChessBtn");
  const chessSolution = document.getElementById("chessSolution");

  solveChessBtn.addEventListener("click", () => {
    chessSolution.classList.toggle("hidden");
    solveChessBtn.textContent = chessSolution.classList.contains("hidden") 
      ? "Reveal Best Move" 
      : "Hide Move";
  });

  // --- Corner Floating Props Click Animation ---
  const floatingFootball = document.getElementById("floatingFootball");
  floatingFootball.addEventListener("click", () => {
    score++;
    goalsCount.textContent = score;
    alert("⚽ Penalty goal scored from the corner prop! Total Goals: " + score);
  });

});