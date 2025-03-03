let boxes = document.querySelectorAll(".box");
let newg = document.querySelector('#newg');
let reset = document.querySelector('#reset');
let msgc = document.querySelector('.msgc');
let winner = document.querySelector('#winner');

let turnO = true;
let count = 0;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgc.classList.add('hide');
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
            box.style.color = 'rgb(10, 100, 225)';
            // console.log('o');
        }
        else {
            box.innerText = 'X';
            turnO = true;
            box.style.color = 'rgb(225, 0, 70)';
            // console.log('x');
        }
        box.disabled = true;
        count++;

        let isWin = checkWin();

        if (count === 9 && !isWin) {
            gameDraw();
        }
    });

});

const gameDraw = () => {
    winner.innerText = 'The Game was a Draw!'
    msgc.classList.remove('hide');
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
};

const showWinner = () => {
    if (val1 === 'O') {
        winner.style.color = ('rgb(10, 100, 225)');
    }
    else if (val1 === 'X'){
        winner.style.color = ('rgb(225, 0, 70)');
    }
    winner.innerText = `Player ${val1} Win!`;
    msgc.classList.remove('hide');
    disableBoxes();
};

const checkWin = () => {
    for (let i of win) {
        val1 = boxes[i[0]].innerText;
        val2 = boxes[i[1]].innerText;
        val3 = boxes[i[2]].innerText;

        if (val1 != '' && val2 != '' && val3 != '') {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                return true;
            }
        }
    }

};

newg.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);