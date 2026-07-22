document.addEventListener("DOMContentLoaded", () => {

  // --- Dynamic Typing Effect ---
  const typingElement = document.getElementById("typing-text");
  const phrases = [
    "Computer Science Engineer 💻",
    "STEM Olympiad Winner 🏆",
    "Football & Badminton Tactics Buff ⚽",
    "The Mentalist & Logic Enthusiast ☕",
    "Polyglot-Language Learner 🌐"
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

  // --- Football Goal Kick Animation into Net ---
  const kickBall = document.getElementById("kickBall");
  const goalsCount = document.getElementById("goalsCount");
  const kickCommentary = document.getElementById("kickCommentary");
  let score = 0;
  let isKicking = false;

  const commentaryList = [
    "🚀 GOLAZO! Hits the top corner net!",
    "⚽ Beautiful curler past the keeper!",
    "🔥 Screamer into the top bin!",
    "🎩 Terrific half volley! Perfect strike!",
    "🎯 Side netting penalty goal!",
    "⚡ Unstoppable volley into the goal!"
  ];

  function triggerGoalAnimation() {
    if (isKicking) return;
    isKicking = true;
    
    score++;
    goalsCount.textContent = score;

    kickBall.classList.add("kicked-to-goal");
    
    const randomCommentary = commentaryList[Math.floor(Math.random() * commentaryList.length)];
    kickCommentary.textContent = randomCommentary;

    setTimeout(() => {
      kickBall.classList.remove("kicked-to-goal");
      isKicking = false;
    }, 600);
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
    '"The secret to a good trick is keeping it simple."',
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

  // --- Multiple Chess Puzzles Logic ---
  const puzzles = [
    {
      title: "Puzzle 1: Smothered Mate",
      prompt: "White to Move: Mate in 2!",
      board: [
        ['♖', '.', '.', '♔'],
        ['.', '♟', '♟', '♟'],
        ['.', '♕', '.', '.'],
        ['.', '.', '.', '♚']
      ],
      solution: "💥 1. Qf7+ Kh8  2. Qg7# (Smothered Checkmate!)"
    },
    {
      title: "Puzzle 2: Queen Sacrifice",
      prompt: "White to Move: Mate in 2!",
      board: [
        ['.', '.', '♖', '♔'],
        ['♟', '♟', '.', '♟'],
        ['.', '.', '♕', '.'],
        ['.', '.', '♗', '♚']
      ],
      solution: "💥 1. Qh7+!! Kxh7  2. Rh3# (Rook & Bishop Mate!)"
    },
    {
      title: "Puzzle 3: Back-Rank Mate",
      prompt: "White to Move: Mate in 1!",
      board: [
        ['.', '.', '.', '♔'],
        ['♟', '♟', '♟', '.'],
        ['.', '.', '.', '.'],
        ['♖', '.', '.', '♚']
      ],
      solution: "💥 1. Ra8# (Classic Back-Rank Checkmate!)"
    }
  ];

  let currentPuzzleIndex = 0;
  const puzzleTitle = document.getElementById("puzzleTitle");
  const chessPrompt = document.getElementById("chessPrompt");
  const chessBoardContainer = document.getElementById("chessBoardContainer");
  const chessSolution = document.getElementById("chessSolution");
  const solveChessBtn = document.getElementById("solveChessBtn");
  const prevPuzzleBtn = document.getElementById("prevPuzzleBtn");
  const nextPuzzleBtn = document.getElementById("nextPuzzleBtn");

  function renderPuzzle(index) {
    const p = puzzles[index];
    puzzleTitle.textContent = p.title;
    chessPrompt.innerHTML = `<strong>White to Move:</strong> ${p.prompt}`;
    chessSolution.innerHTML = p.solution;
    chessSolution.classList.add("hidden");
    solveChessBtn.textContent = "Show Solution";

    chessBoardContainer.innerHTML = "";
    p.board.forEach((row, rIdx) => {
      const rowDiv = document.createElement("div");
      rowDiv.className = "chess-row";
      row.forEach((cell, cIdx) => {
        const sq = document.createElement("div");
        const isWhiteSq = (rIdx + cIdx) % 2 === 0;
        sq.className = `sq ${isWhiteSq ? "white" : "black"}`;
        sq.textContent = cell;
        rowDiv.appendChild(sq);
      });
      chessBoardContainer.appendChild(rowDiv);
    });
  }

  renderPuzzle(currentPuzzleIndex);

  prevPuzzleBtn.addEventListener("click", () => {
    currentPuzzleIndex = (currentPuzzleIndex - 1 + puzzles.length) % puzzles.length;
    renderPuzzle(currentPuzzleIndex);
  });

  nextPuzzleBtn.addEventListener("click", () => {
    currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzles.length;
    renderPuzzle(currentPuzzleIndex);
  });

  solveChessBtn.addEventListener("click", () => {
    chessSolution.classList.toggle("hidden");
    solveChessBtn.textContent = chessSolution.classList.contains("hidden") 
      ? "Show Solution" 
      : "Hide Solution";
  });

});