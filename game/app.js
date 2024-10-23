const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = '24px serif';

let initialSnake = [
    { x: 2, y: 1, show: function() { ctx.fillText('😋', this.x * 20, this.y * 20); } },
    { x: 1, y: 1, show: function() { ctx.fillText('😋', this.x * 20, this.y * 20); } },
    { x: 0, y: 1, show: function() { ctx.fillText('😋', this.x * 20, this.y * 20); } }
];

let snake = [...initialSnake];

const food = {
    x: 0,
    y: 0,
    show: function() {
        ctx.fillText('🍓', this.x * 20, this.y * 20);
    },
    fadeIn: function() {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 1;
    }
};

let score = 0;
let maxScore = localStorage.getItem('maxScore') ? parseInt(localStorage.getItem('maxScore')) : 0;  // Cargar puntaje máximo
document.getElementById('max-score').textContent = maxScore;  // Mostrar puntaje máximo al iniciar

let x = 0;
let y = 1;
let direction = 1;
let gameInterval = null;

function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.fadeIn();
        snake.push({ ...snake[snake.length - 1] });
        score++;
        document.getElementById('score').textContent = `Puntaje: ${score}`;

        // Actualiza el puntaje máximo si el puntaje actual lo supera
        if (score > maxScore) {
            maxScore = score;
            localStorage.setItem('maxScore', maxScore);  // Guardar nuevo puntaje máximo
            document.getElementById('max-score').textContent = maxScore;  // Actualizar en la pantalla
        }
    }
}

function checkCollision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function gameOver() {
    ctx.font = '50px serif';
    ctx.fillStyle = 'red';
    ctx.fillText('Game Over', lienzo.width / 2 - 120, lienzo.height / 2);
    
    clearInterval(gameInterval);
    
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Volver a Jugar';
    restartButton.classList.add('restart-button');
    document.body.appendChild(restartButton);

    restartButton.addEventListener('click', () => {
        restartButton.remove();
        resetGame();
    });
}

function resetGame() {
    ctx.font = '24px serif';
    ctx.fillStyle = 'black';

    snake = [...initialSnake];
    x = 0;
    y = 1;
    direction = 1;
    score = 0;
    document.getElementById('score').textContent = `Puntaje: ${score}`;

    // Cargar puntaje máximo desde localStorage al reiniciar el juego
    maxScore = localStorage.getItem('maxScore') ? parseInt(localStorage.getItem('maxScore')) : 0;
    document.getElementById('max-score').textContent = maxScore;

    food.fadeIn();
    gameInterval = setInterval(runGame, 200);
}

function nextMove(x, y) {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
    snake[0].x = x;
    snake[0].y = y;
}

food.fadeIn();
document.getElementById('score').textContent = `Puntaje: ${score}`;

function runGame() {
    ctx.clearRect(0, 0, 600, 400);
    ctx.font = '24px serif';
    ctx.fillStyle = 'black';

    nextMove(x, y);
    food.show();
    snake.forEach(s => s.show());
    eat();

    if (checkCollision()) {
        gameOver();
        return;
    }

    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 20) y = 1;
    else if (y < 1) y = 20;
}

document.querySelector('body').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && direction !== 3) direction = 1;
    else if (e.key === 'ArrowDown' && direction !== 4) direction = 2;
    else if (e.key === 'ArrowLeft' && direction !== 1) direction = 3;
    else if (e.key === 'ArrowUp' && direction !== 2) direction = 4;
});

gameInterval = setInterval(runGame, 200);
