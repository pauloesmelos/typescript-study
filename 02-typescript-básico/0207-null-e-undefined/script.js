"use strict";
var _a;
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button)
    button.addEventListener('click', () => console.log('Clicou'));
// ou button?.addEventListener('click',arrow function);
if (config)
    console.log(config);
// undefined - variável instanciada, mas não possui valor.
let total;
const data = {};
console.log(data.nome); // undefined
const Jogo = {
    nome: "Fifa"
};
const Livro = {};
//modo 1
console.log((_a = Livro.nome) === null || _a === void 0 ? void 0 : _a.toString());
//modo 2
if (Livro.nome) {
    console.log(Livro.nome);
}
