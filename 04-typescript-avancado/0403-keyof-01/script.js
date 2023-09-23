"use strict";
// 1) keyof - conceito avançado, não muito utilizado
let chave; // chave = nome | preco
chave = 'nome';
console.log(chave);
// 2) typeof - além de retornar o tipo de dados, pode indicar com ele que um dado terá o msm tipo de outro
function coordenada(x, y) {
    return {
        pontaA: x,
        pontoB: y
    };
}
let coord;
coord = (x, y) => {
    return {
        pontaA: x,
        pontoB: y
    };
}; // toda função tem que ser igual
function getElement(query) {
    return document.querySelector(query);
}
const a = getElement('a');
console.log(a === null || a === void 0 ? void 0 : a.href);
