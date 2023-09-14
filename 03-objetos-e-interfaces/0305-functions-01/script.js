"use strict";
// 1) A interface de uma função é definida durante a sua declaração
var _a, _b;
// c é um parâmetro opcional
const somar = (a, b, c) => a + b + (c ? c : 0);
console.log(somar(5, 2, 1));
// 2) Void - no js, uma função sem return retornará undenif
// no ts, uma função que não retorna nada é definida como void
const pintarTela = (cor) => {
    document.body.style.cssText = `color: ${cor}`; // função retorna void - pois não há NENHUM retorno
};
const isString = (element) => {
    if (typeof element === 'string')
        return true; // função retorna boolean | undefined
};
// 3) Never é um tipo de retorno utilizado em casos que a função gera erro ou termina a aplicação
const interrupt = (message) => {
    throw new Error(message);
};
//interrupt('Erro, fechando a aplicação.'); //abaixo disso nada é executado
console.log('teste,aq não é executado');
function calcular(objeto) {
    return objeto.perimetro(3);
}
function normalize(text) {
    if (typeof text === 'string')
        return text.trim().toUpperCase();
    else
        return text.map(e => e.trim().toUpperCase());
}
console.log(normalize(' paulo '));
console.log(normalize(['  Palmeiras', 'paulo   ']));
function $(seletor) {
    return document.querySelector(seletor);
}
;
console.log((_a = $('a')) === null || _a === void 0 ? void 0 : _a.href);
console.log((_b = $('video')) === null || _b === void 0 ? void 0 : _b.volume);
console.log($('.caixa'));
// o overload deve receber todas os tipos de declarações
