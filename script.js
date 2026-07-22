document.addEventListener("DOMContentLoaded", () => {

  // --- Dynamic Typing Effect in Hero ---
  const typingElement = document.getElementById("typing-text");
  const phrases = [
    "Computer Science Engineer 💻",
    "STEM Olympiad Winner 🏆",
    "Football & Badminton Tactics Buff ⚽",
    "The Mentalist & Logic Enthusiast ☕",
    "Duolingo Polyglot (600+ Day Streak) 🇪🇸🇩🇪🇬🇷"
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

  // --- FUT Manager Card Modal ---
  const futModal = document.getElementById("futModal");
  const openFutBtn = document.getElementById("openFutBtn");
  const closeFutBtn = document.getElementById("closeFutBtn");

  openFutBtn.addEventListener("click", () => futModal.classList.add("active"));
  closeFutBtn.addEventListener("click", () => futModal.classList.remove("active"));
  futModal.addEventListener("click", (e) => {
    if (e.target === futModal) futModal.classList.remove("active");
  });

  // --- Football Goal Kick & Commentary Game ---
  const kickBall = document.getElementById("kickBall");
  const goalsCount = document.getElementById("goalsCount");
  const kickCommentary = document.getElementById("kickCommentary");
  let score = 0;

  const commentaryList = [
    "🚀 GOLAZO! Absolute missile into top bins!",
    "⚽ Beautiful curl around the defender!",
    "🔥 Screamer from 30 yards out!",
    "🎩 Hat-trick complete! What a stroke!",
    "🎯 Precision penalty right into side netting!",
    "⚡ Unstoppable volley! The keeper didn't move!",
    "👟 Bicycle kick stunner!"
  ];

  function triggerGoalAnimation() {
    score++;
    goalsCount.textContent = score;

    const randomCommentary = commentaryList[Math.floor(Math.random() * commentaryList.length)];
    kickCommentary.textContent = randomCommentary;

    kickBall.style.transform = "translateY(-30px) rotate(360deg) scale(1.2)";
    setTimeout(() => {
      kickBall.style.transform = "translateY(0) rotate(0deg) scale(1)";
    }, 300);
  }

  kickBall.addEventListener("click", triggerGoalAnimation);

  // Floating Corner Football Prop Interaction
  const floatingFootball = document.getElementById("floatingFootball");
  floatingFootball.addEventListener("click", () => {
    triggerGoalAnimation();
    document.getElementById("vibe").scrollIntoView({ behavior: 'smooth' });
  });

  // --- Mentalist & Patrick Jane Quotes ---
  const mentalistQuotes = [
    '"A cup of tea solves everything." — Patrick Jane',
    '"There’s no such thing as magic. Just attention to detail."',
    '"If you stop and look around, life is pretty amazing."',
    '"Control your emotions, or they will control you."',
    '"Truth is in the eye of the observer."',
    '"Tea is the key to clear thinking when solving a tough dilemma."',
    '"Nostalgia is the denial of a painful present."',
    '"The secret to a good trick is keeping it simple."',
    '"When you know what a man wants, you know who he is."',
    '"Observation is not just seeing; it is understanding causality."',
    '"People like to talk about themselves. You just have to listen."',
    '"A calm mind sees moves three steps ahead."'
  ];

  const quoteDisplay = document.getElementById("mentalistQuote");
  const brewQuoteBtn = document.getElementById("brewQuoteBtn");

  function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * mentalistQuotes.length);
    quoteDisplay.style.opacity = "0";

    setTimeout(() => {
      quoteDisplay.textContent = mentalistQuotes[randomIndex];
      quoteDisplay.style.opacity = "1";
    }, 200);
  }

  brewQuoteBtn.addEventListener("click", getNewQuote);

  // Floating Tea Cup Prop Interaction
  const floatingTea = document.getElementById("floatingTea");
  const teaToast = document.getElementById("teaToast");

  floatingTea.addEventListener("click", () => {
    getNewQuote();
    teaToast.textContent = "Tea Brewed! ☕";
    teaToast.style.background = "#d97706";

    setTimeout(() => {
      teaToast.textContent = "Sip Tea ☕";
      teaToast.style.background = "#0f172a";
    }, 2000);

    document.getElementById("vibe").scrollIntoView({ behavior: 'smooth' });
  });

  // --- Tactical Chess Solution Toggle ---
  const solveChessBtn = document.getElementById("solveChessBtn");
  const chessSolution = document.getElementById("chessSolution");

  solveChessBtn.addEventListener("click", () => {
    chessSolution.classList.toggle("hidden");
    solveChessBtn.textContent = chessSolution.classList.contains("hidden") 
      ? "Show Solution" 
      : "Hide Solution";
  });

});