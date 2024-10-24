const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

// fillRect(x,y, ancho, alto)
// strokeRect(x, y, ancho, alto)
// arc(x,y, radio,ini, fin, sentidohorario)

// ctx.strokeRect(0,0,200,200);
// ctx.fillRect(20, 20, 160, 160);

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.fillStyle = 'yellow';
// ctx.beginPath();
// ctx.moveTo(80, 90);
// ctx.lineTo(130, 90);
// ctx.lineTo(105, 130);
// ctx.fill();

//fantasma
ctx.beginPath();
ctx.arc(200, 150, 80, Math.PI, 0, false);
ctx.lineTo(280, 280);


ctx.quadraticCurveTo(260, 320, 240, 280);
ctx.quadraticCurveTo(220, 320, 200, 280);
ctx.quadraticCurveTo(180, 320, 160, 280);
ctx.quadraticCurveTo(140, 320, 120, 280);

ctx.lineTo(120, 280);
ctx.closePath();


ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'red';
ctx.stroke();


ctx.beginPath();
ctx.arc(170, 150, 10, 0, 2 * Math.PI, false);
ctx.arc(230, 150, 10, 0, 2 * Math.PI, false);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(170, 150, 3, 0, 2 * Math.PI, false);
ctx.arc(230, 150, 3, 0, 2 * Math.PI, false);
ctx.fillStyle = 'white';
ctx.fill();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.arc(200, 180, 20, 0, Math.PI *2, true);
ctx.stroke();
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.arc(200, 180, 15, 0, Math.PI *2, true);
ctx.stroke();
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.arc(200, 180, 10, 0, Math.PI *2, true);
ctx.stroke();
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.arc(200, 180, 5, 0, Math.PI *2, true);
ctx.stroke();


ctx.fillStyle = 'black';
ctx.ellipse(465, 70, 10, 30, Math.PI / 2, 0, 2 * Math.PI);
ctx.fill();


//Dibujar el plátano
ctx.beginPath();
ctx.ellipse(450, 190, 40, 100, Math.PI / 20, 0, 2 * Math.PI); // Forma ovalada del plátano
ctx.closePath();

ctx.fillStyle = 'yellow'; // Relleno amarillo
ctx.fill();
ctx.strokeStyle = 'black'; // Contorno negro
ctx.stroke();

// Ojos del plátano
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.roundRect(429, 140, 19, 15, [0, 20, 0, 18]);
ctx.fill();
ctx.stroke();
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.roundRect(429, 140, 19, 15, [20, 0, 20, 0]);
ctx.fill();
ctx.stroke();

// Ojo derecho
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.roundRect(467, 140, 19, 15, [20, 0, 20, 0]);
ctx.fill();
ctx.stroke();
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.roundRect(467, 140, 19, 15, [0, 20, 0, 18]);
ctx.fill();
ctx.stroke();

// Centros de los ojos del plátano
ctx.beginPath();
ctx.arc(439, 148, 3, 0, Math.PI * 2, false);
ctx.arc(476, 148, 3, 0, Math.PI * 2, false);
ctx.fillStyle = 'white';
ctx.fill();

// Boca del plátano
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(450, 200, 15, 0, Math.PI * 2, false);
ctx.stroke();

// Dientes del plátano
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(440, 205);
ctx.lineTo(445, 205);
ctx.lineTo(442.5, 220);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(445, 205);
ctx.lineTo(450, 205);
ctx.lineTo(447.5, 220);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(450, 205);
ctx.lineTo(455, 205);
ctx.lineTo(452.5, 220);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(455, 205);
ctx.lineTo(460, 205);
ctx.lineTo(457.5, 220);
ctx.closePath();
ctx.fill();

// Manos del plátano
ctx.beginPath();
ctx.moveTo(410, 200); // Mano izquierda
ctx.lineTo(380, 165);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(490, 200); // Mano derecha
ctx.lineTo(520, 180);
ctx.stroke();

// Pies del plátano
ctx.beginPath();
ctx.moveTo(422, 280); // Pie izquierdo
ctx.lineTo(415, 320);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(458, 275); // Pie derecho
ctx.lineTo(465, 320);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(250, 5);
ctx.quadraticCurveTo(270, 70, 280, 5);
ctx.quadraticCurveTo(310, 70, 320, 5);
ctx.quadraticCurveTo(350, 70, 360, 5);
ctx.quadraticCurveTo(380, 70, 400, 5);
ctx.lineTo(400,50);
ctx.lineTo(240, 50);
ctx.closePath();

ctx.fillStyle = 'red';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.arc(320, 50, 70, 0,Math.PI, false);
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(345,65, 10, 0,Math.PI, false);
ctx.fill();
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(345,65, 5, 0,Math.PI, false);
ctx.fill();
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(345,65, 2, 0,Math.PI, false);
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(300,65, 10, 0,Math.PI, false);
ctx.fill();
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(300,65, 5, 0,Math.PI, false);
ctx.fill();
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(300,65, 2, 0,Math.PI, false);
ctx.fill();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.arc(300,68, 15, 0, Math.PI *2, true);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(305,95);
ctx.quadraticCurveTo(314,115,325,95);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(325,95);
ctx.quadraticCurveTo(330,115,340,95);
ctx.stroke();
