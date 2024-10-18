const lienz00 = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function(){
        ctx.fillStyle = `hsl(${this.x},50%,50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y,20, 0, Math.PI * 2);
        ctx.fill();
    }
}


let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    ctx.clearRect(0, 0,600,400);
    ball.x = x;
    ball.y = y;
    ball.show();

    //validar x para right
    if (right) {
        x++;
    }else{
        x--;
    }

    //validar y para cambiar down
    if (down) {
        y++;
    } else {
        y--;
    }


    //validar right para x
    if (x >= 590) {
        right = false;
    } else if (x <= 10) {
        right = true;
    }
    
    //validar down para y
    if (y >= 390) {
        down = false;
    } else if (y <= 10) {
        down = true;
    }

}, 2);