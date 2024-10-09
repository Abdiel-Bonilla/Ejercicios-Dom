document.addEventListener('DOMContentLoaded', () => {
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');


    function updateColor() {
        const redValue = redInput.value;
        const greenValue = greenInput.value;
        const blueValue = blueInput.value;

        document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }

    redInput.addEventListener('input', updateColor);
    greenInput.addEventListener('input', updateColor);
    blueInput.addEventListener('input', updateColor);

    updateColor();
});
