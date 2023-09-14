"use strict";
var _a;
// revisando: destructuring
const [one, two, three] = [1, 2, 3]; // one = 1, two = 2, etc
function click({ target }) {
    if (target instanceof HTMLButtonElement)
        console.log(target);
}
const button = (_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', click);
// 1) ...rest (útil para atribuir valor a variáveis ou quando temos uma quantidade de argumentos desconhecida)
const maiorSequencia = (tipo, ...nums) => {
    if (tipo === 'maior') {
        return Math.max(...nums);
    }
    else if (tipo === 'menor') {
        return Math.min(...nums);
    }
    else
        return null;
};
console.log(maiorSequencia('maior', 1, 4, 1, 5, 9, 0));
const maior = (tipo, array) => {
    if (tipo === 'maior')
        return Math.max(...array);
    else if (tipo === 'menor')
        return Math.min(...array);
    else
        return 0;
};
console.log(maior('maior', [2, 3, 1, 5, 2]));
const teste_destructuring = [2, 3, 1, 5, 1];
console.log(teste_destructuring);
// 2) conhecer o tipo dos dados
// ex: currentTarget pode ser um EventTarget | null
function handleClick({ currentTarget, pageX }) {
    // na desestruturação passar o tipo do elemento (ex pageX: number)
    if (currentTarget instanceof HTMLElement)
        currentTarget.innerHTML = `Click X: ${pageX}`;
}
document.documentElement.addEventListener('click', handleClick);
