"use strict";
let total = 200;
total = '400';
console.log(total);
const isNumber = (value) => {
    if (typeof value === 'number') {
        return true;
    }
    else
        return false;
};
//1) Union type no DOM
// HTMLButtonElement ou null
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.click(); // só executa a função caso o button seja diferente de null e undefined;
// Exercício 1) crie uma função toNumber que pode receber number | string
// se receber número. retorne um número, se receber uma string, retorne um número
// se receber algo diferente, retorne um erro (throw "")
const toNumber = (valor) => {
    if (typeof valor === "number")
        return valor;
    else if (typeof valor === "string")
        return Number(valor);
    else
        throw "O valor deve ser uma string ou number";
};
console.log(toNumber("5") + 5);
