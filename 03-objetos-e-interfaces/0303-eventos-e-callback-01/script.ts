//1) pointerdown vs click e Event vs PointerEvent
const button = document.querySelector('button');
const handleClick = (event: PointerEvent) => {
    console.log(event.pageX);
}
button?.addEventListener('pointerdown',handleClick);

const handleScroll = (event: Event) => {
    console.log(event);
}
window?.addEventListener('scroll',handleScroll);

//2) instanceof e Event - chegando a instância do evento
const ativarMenu = (event: Event) => { // Event é comm a MouseEvent, KeyboardEvent, TouchEvent, entre outros
    if (event instanceof MouseEvent) {
        console.log(event.pageX); // posições de toque mause
    }
    else if (event instanceof KeyboardEvent) {
        console.log(event.key); // tecla tocada
    }
    else if (event instanceof TouchEvent) {
        console.log(event.touches); // array de toques
    }
}
document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);

//3) this - para utilizar o this em TypeScript é necessário passá-lo como argumento e referenciar o tipo
// Exemplo: this: tipo do elemento que usa a função
const btnThis = document.querySelector('.btn-this');
//utilizando function
function click(this: HTMLButtonElement, event: Event) {
    console.log('CLICK: ' + this.innerHTML);
}
btnThis?.addEventListener('click',click);

//4) Uma alternativa para evitar o uso de this em functions é usar o target/currentTarget
// do evento executado. Os eventos são definidos como EventTarget
const btnCurrentTarget = document.querySelector('.btn-currentTarget');
function show(event: Event){
    //console.log(event.target.innerText); ATENÇÃO  erro (Event não possui innerText, só HTMLElement)
    if(event.target instanceof HTMLElement)
        console.log(event.target.innerText);
}
btnCurrentTarget?.addEventListener('click',show);