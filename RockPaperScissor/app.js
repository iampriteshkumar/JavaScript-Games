let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const uSCount = document.querySelector('#user-score');
const cSCount = document.querySelector('#comp-score');
const dSCount = document.querySelector('#draw');

const genCompChoice = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const gameDraw = (userChoice, compChoice) => {
    drawScore++;
    dSCount.innerText = drawScore;
    msg.innerText = `Game was a Draw! You: ${userChoice}, Computer: ${compChoice}`;
    msg.style.backgroundColor = 'rgb(10, 125, 220)';
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        uSCount.innerText = userScore;
        msg.innerText = `You Win! You: ${userChoice}, Computer: ${compChoice}`;
        msg.style.backgroundColor = 'rgb(10, 220, 115)';
    }
    else {
        compScore++;
        cSCount.innerText = compScore;
        msg.innerText = `You Lose! You: ${userChoice}, Computer: ${compChoice}`;
        msg.style.backgroundColor = 'rgb(220, 10, 90)';
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        // Game Draw 
        gameDraw(userChoice, compChoice);
    }
    else {
        let userWin = true;
        if (userChoice === 'Rock') {
            // Paper Scissor
            userWin = compChoice === 'Paper' ? false : true;
        }
        else if (userChoice === 'Paper') {
            // Scissor Rock
            userWin = compChoice === 'Scissors' ? false : true;
        }
        else {
            // Rock Paper
            userWin = compChoice === 'Rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
