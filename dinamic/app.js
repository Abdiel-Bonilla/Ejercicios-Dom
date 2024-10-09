const content = document.querySelector('.content');
const wcontrol = document.querySelector('#width');
const hcontrol = document.querySelector('#height');
const ccontrol = document.querySelector('#corner');
const scontrol = document.querySelector('#shadow');
const bcontrol = document.querySelector('#color');
const tcontrol = document.querySelector('#transparent');
const bcontrol2 = document.querySelector('#border');


let widthC = 300;

const changeContent = () => {
    content.style.width = `${ widthC }px`;
}


wcontrol.addEventListener('input', e => {
    widthC = e.target.value;
    changeContent();
});
hcontrol.addEventListener('input', () => {
    content.style.height = `${ hcontrol.value }px`;
});
ccontrol.addEventListener('input', () => {
    content.style.borderRadius = `${ ccontrol.value }px`;
});
scontrol.addEventListener('input', () => {
    content.style.boxShadow = `0 0 ${ scontrol.value }px ${ scontrol.value }px blue`;
});
bcontrol.addEventListener('input', () => {
    content.style.backgroundColor = `hsl( ${ bcontrol.value }, 100%, 50%)`;
});
tcontrol.addEventListener('input', () => {
    content.style.opacity = tcontrol.value;
});
bcontrol2.addEventListener('input', () => {
    content.style.border = `${ bcontrol2.value }px solid blue`;
});


