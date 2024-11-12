// Inicializando variáveis
let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;
let attemptsLeft = 10;

// Referências aos elementos do DOM
const guessInput = document.getElementById('guess');
const checkBtn = document.getElementById('check-btn');
const restartBtn = document.getElementById('restart-btn');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const attemptsDisplay = document.getElementById('attempts');

// Função para verificar o palpite
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Por favor, insira um número válido entre 1 e 100.";
        feedback.style.color = "red";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        feedback.textContent = `Parabéns! Você acertou o número ${randomNumber}.`;
        feedback.style.color = "green";
        score++;
        endGame();
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Tente um número maior!";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Tente um número menor!";
        feedback.style.color = "orange";
    }

    // Atualizando pontuação e tentativas
    scoreDisplay.textContent = `Pontuação: ${score}`;
    attemptsDisplay.textContent = `Tentativas restantes: ${attemptsLeft}`;

    if (attemptsLeft <= 0) {
        feedback.textContent = `Fim de jogo! O número era ${randomNumber}.`;
        feedback.style.color = "red";
        endGame();
    }
}

// Função para finalizar o jogo
function endGame() {
    guessInput.disabled = true;
    checkBtn.disabled = true;
    restartBtn.style.display = "block";
}

// Função para reiniciar o jogo
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    score = 0;
    guessInput.disabled = false;
    checkBtn.disabled = false;
    guessInput.value = '';
    feedback.textContent = '';
    scoreDisplay.textContent = `Pontuação: ${score}`;
    attemptsDisplay.textContent = `Tentativas restantes: ${attemptsLeft}`;
    restartBtn.style.display = "none";
}

// Adicionando evento de clique
checkBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);





