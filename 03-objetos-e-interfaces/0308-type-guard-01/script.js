"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1) usar Type guard para verificar se um json vem em forma de array
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        handleProduto(json);
    });
}
function handleProduto(data) {
    if (data instanceof Array) // ajudar na proteção de dados
        console.log('data é uma instância de array');
}
fetchProduto();
// 2) Type Predicate is - com o uso de is podemos indicar o tipo de argumento uma função
// deve receber para ser verdadeira
// criando uma função auxiliar que checa o tipo de dado para demonstrar isso
function isString(data) {
    return typeof data === 'string';
}
function check(data) {
    if (isString(data)) // função auxiliar - se passarmos uma string(data is string), é possível acessar o type guard
        return data.toUpperCase();
}
console.log(check('palmeiras'));
// 3)
