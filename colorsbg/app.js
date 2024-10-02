// const body = document.querySelector('body');
// const btnchange = document.getElementById('btnchange');

// const changeColor = () => {
//     const color = prompt ('Ingresa un color: ');
//     body.style.backgroundColor = color;
// }

// btnchange.addEventListener('click', changeColor);


const randomColor = () => {
    let hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexadecimal[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeColor = () => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
}
btnchange.addEventListener('click', changeColor);

