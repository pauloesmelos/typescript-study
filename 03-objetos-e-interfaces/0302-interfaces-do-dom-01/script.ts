// 1) Interfaces do DOM : HTMLAnchorElement, HTMLVideoElement, Element, HTMLFormElement, entre outros

const video = document.querySelector('#videoprincipal');
//video.volume;// erro
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}

// instanceof
const links = document.querySelectorAll('.link');
links.forEach((link,index,array) => {
    if(link instanceof HTMLAnchorElement)
        console.log('É um AnchorElement: ' + link.href);
});

// NodeList to Array para utilizar métodos de Array nos elementos do DOM
const arrayLinks = Array.from(links);
const arrayAnchorElement = arrayLinks.filter(link => link instanceof HTMLAnchorElement);
console.log(arrayAnchorElement);

// Exercícios

//1 - Selecione os elementos com a classe link
//2 - crie uma função que deve ser executada para cada elemento
//3- modificar apenas o <a>, através da função o estilo da color e border
const modifyStyle = (element: HTMLElement) => {
    if(element instanceof HTMLAnchorElement)
        element.style.cssText = `
            color: tomato;
            border-bottom: 2px solid black;
        `;
}
links.forEach(e => {
    if(e instanceof HTMLElement)
        modifyStyle(e);
});