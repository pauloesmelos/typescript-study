"use strict";
// 1) define o tipo de dado passado como argumento na função, e também o tipo de dado do retorno da função.
var _a, _b;
// function default
function mytext(text) {
    return text;
}
// arrow function
const mynumber = (num) => {
    return num;
};
console.log(mytext("Bom dia"));
console.log(mynumber(5));
// 2)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Banana", "Uva", "Pêra", "Laranja", "Limão", "Maçã"];
// <Tipo dado argumento>(parametro: Tipo parametro): Tipo retorno
const firstFive = (list) => {
    return list.slice(0, 5);
};
console.log(firstFive(numeros));
console.log(firstFive(frutas));
const notNull = (data) => {
    if (data)
        return data;
    else
        return null;
};
console.log((_a = notNull(1)) === null || _a === void 0 ? void 0 : _a.toFixed);
console.log((_b = notNull("A")) === null || _b === void 0 ? void 0 : _b.toString());
// generic
const informacoesDado = (a) => {
    return {
        info: a,
        tipo: typeof a
    };
};
console.log(informacoesDado(255));
