// Grab DOM elements
const avatarOptions = document.querySelectorAll('.avatar-option');
const startButton = document.getElementById('start-button');
const gameScreen = document.getElementById('game-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const optionsContainer = document.getElementById('options');
const dialogueText = document.getElementById('dialogue-text');
const playerNameElem = document.getElementById('player-name');
const playerRankElem = document.getElementById('player-rank');
const chosenAvatarImg = document.getElementById('chosen-avatar');
const scoreElem = document.getElementById('score');
const prestigeElem = document.getElementById('prestige');
const finalMessageElem = document.getElementById('final-message');
const restartButton = document.getElementById('restart-button');

let selectedAvatar = null;
let playerName = '';
let currentQuestionIndex = 0;
let score = 0;
let prestige = 0;

// Define questions and answers for interrogation
const questions = [
  {
    text: 'Você chega à cena do crime e encontra uma testemunha. Qual a primeira pergunta que você faz?',
    options: [
      { text: 'Qual é o seu nome e o que você viu?', correct: true },
      { text: 'Você é o assassino?', correct: false },
      { text: 'Quantos anos você tem?', correct: false }
    ]
  },
  {
    text: 'A testemunha está nervosa. O que você faz?',
    options: [
      { text: 'Acalmá-la e pedir que respire fundo.', correct: true },
      { text: 'Ignorar e pressionar por respostas.', correct: false },
      { text: 'Deixá-la sozinha e ir embora.', correct: false }
    ]
  },
  {
    text: 'Ela menciona ver um carro vermelho sair da cena. Qual informação adicional você pede?',
    options: [
      { text: 'Você anotou a placa ou detalhes do carro?', correct: true },
      { text: 'O carro era bonito?', correct: false },
      { text: 'O carro estava limpo?', correct: false }
    ]
  },
  {
    text: 'Você coleta pistas e retorna ao distrito. Qual é o próximo passo?',
    options: [
      { text: 'Registrar as evidências e relatar ao seu superior.', correct: true },
      { text: 'Ir para casa e descansar.', correct: false },
      { text: 'Ignorar as pistas.', correct: false }
    ]
  },
  {
    text: 'Seu chefe pergunta se você quer mais responsabilidades. Como você responde?',
    options: [
      { text: 'Sim, estou pronto para ser promovido.', correct: true },
      { text: 'Não, estou satisfeito.', correct: false },
      { text: 'Talvez depois.', correct: false }
    ]
  }
];

// Attach click events to avatar options
avatarOptions.forEach((option) => {
  option.addEventListener('click', () => {
    // Remove selection from all
    avatarOptions.forEach((opt) => opt.classList.remove('selected'));
    // Add selection to current
    option.classList.add('selected');
    selectedAvatar = option.getAttribute('data-avatar');
  });
});

// Start button event
startButton.addEventListener('click', () => {
  playerName = document.getElementById('detective-name').value.trim();
  if (!selectedAvatar) {
    alert('Por favor, selecione um avatar.');
    return;
  }
  if (!playerName) {
    alert('Por favor, digite seu nome.');
    return;
  }
  startGame();
});

// Restart button event
if (restartButton) {
  restartButton.addEventListener('click', () => {
    resetGame();
  });
}

function startGame() {
  // Initialize variables
  currentQuestionIndex = 0;
  score = 0;
  prestige = 0;
  updateHUD();
  // Show chosen avatar and name
  chosenAvatarImg.src = `assets/avatars/${selectedAvatar}.png`;
  playerNameElem.textContent = playerName;
  playerRankElem.textContent = 'Detective';
  // Hide start screen and result screen, show game screen
  startScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  // Show first question
  showQuestion();
}

function showQuestion() {
  // Ensure index is valid
  if (currentQuestionIndex >= questions.length) {
    endGame();
    return;
  }
  const current = questions[currentQuestionIndex];
  dialogueText.textContent = current.text;
  // Clear previous options
  optionsContainer.innerHTML = '';
  current.options.forEach((option) => {
    const btn = document.createElement('button');
    btn.classList.add('option-button');
    btn.textContent = option.text;
    btn.addEventListener('click', () => handleOption(option.correct));
    optionsContainer.appendChild(btn);
  });
}

function handleOption(isCorrect) {
  // Award points and prestige
  if (isCorrect) {
    score += 1;
    prestige += 10;
  } else {
    // Small prestige penalty for incorrect answers
    prestige = Math.max(0, prestige - 5);
  }
  updateHUD();
  // Move to next question after a short delay to allow player to read
  currentQuestionIndex++;
  setTimeout(() => {
    showQuestion();
  }, 200);
}

function updateHUD() {
  scoreElem.textContent = score;
  prestigeElem.textContent = prestige;
  // Determine rank based on score
  let rank = 'Detective';
  if (score >= 5) {
    rank = 'CIA';
  } else if (score >= 3) {
    rank = 'FBI';
  }
  playerRankElem.textContent = rank;
}

function endGame() {
  // Hide game screen and show result screen
  gameScreen.style.display = 'none';
  resultScreen.style.display = 'block';
  // Compose final message
  const finalRank = playerRankElem.textContent;
  finalMessageElem.textContent =
    `${playerName}, você terminou com ${score} ponto(s) e ${prestige} de prestígio. ` +
    `Sua classificação final: ${finalRank}.`;
}

function resetGame() {
  // Reset selections and show start screen again
  selectedAvatar = null;
  playerName = '';
  document.getElementById('detective-name').value = '';
  avatarOptions.forEach((opt) => opt.classList.remove('selected'));
  startScreen.style.display = 'block';
  gameScreen.style.display = 'none';
  resultScreen.style.display = 'none';
}