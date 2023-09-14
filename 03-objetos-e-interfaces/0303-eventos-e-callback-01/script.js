"use strict";
//1) pointerdown vs click e Event vs PointerEvent
const button = document.querySelector('button');
const handleClick = (event) => {
    console.log(event.pageX);
};
button === null || button === void 0 ? void 0 : button.addEventListener('pointerdown', handleClick);
const handleScroll = (event) => {
    console.log(event);
};
window === null || window === void 0 ? void 0 : window.addEventListener('scroll', handleScroll);
//2) instanceof e Event - chegando a instância do evento
const ativarMenu = (event) => {
    if (event instanceof MouseEvent) {
        console.log(event.pageX); // posições de toque mause
    }
    else if (event instanceof KeyboardEvent) {
        console.log(event.key); // tecla tocada
    }
    else if (event instanceof TouchEvent) {
        console.log(event.touches); // array de toques
    }
};
document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);
//3) this - para utilizar o this em TypeScript é necessário passá-lo como argumento e referenciar o tipo
// Exemplo: this: tipo do elemento que usa a função
const btnThis = document.querySelector('.btn-this');
//utilizando function
function click(event) {
    console.log('CLICK: ' + this.innerHTML);
}
btnThis === null || btnThis === void 0 ? void 0 : btnThis.addEventListener('click', click);
//4) Uma alternativa para evitar o uso de this em functions é usar o target/currentTarget
// do evento executado. Os eventos são definidos como EventTarget
const btnCurrentTarget = document.querySelector('.btn-currentTarget');
function show(event) {
    //console.log(event.target.innerText); ATENÇÃO  erro (Event não possui innerText, só HTMLElement)
    if (event.target instanceof HTMLElement)
        console.log(event.target.innerText);
}
btnCurrentTarget === null || btnCurrentTarget === void 0 ? void 0 : btnCurrentTarget.addEventListener('click', show);
