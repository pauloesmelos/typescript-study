// 1) keyof - conceito avançado, não muito utilizado

interface Produto {
    nome: string;
    preco: number;
}

let chave: keyof Produto; // chave = nome | preco
chave = 'nome';
console.log(chave);

// 2) typeof - além de retornar o tipo de dados, pode indicar com ele que um dado terá o msm tipo de outro
function coordenada(x: number, y: number) {
    return {
        pontaA: x,
        pontoB: y
    }
}
let coord: typeof coordenada;
coord = (x: number, y: number) => {
    return {
        pontaA: x,
        pontoB: y
    }
} // toda função tem que ser igual

// 3) querySelector - é com o keyof que o querySelector associa uma string a uma interface

interface Elemento {
    a: HTMLAnchorElement;
    video: HTMLVideoElement;
    body: HTMLBodyElement;
    div: HTMLDivElement;
}
function getElement <T extends keyof Elemento>(query: T): Elemento[T] | null{
    return document.querySelector(query);
}
const a = getElement('a');
console.log(a?.href);