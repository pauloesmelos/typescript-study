"use strict";
// 2) Type Predicate :arg is type - garante o retorno true quando um tipo de dado é especificado
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// no tipo de retorno específicamos que o argumento deve ser do tipo X
const isString = (variavel) => {
    return typeof variavel === 'string';
};
const checkVar = (variavel) => {
    if (isString(variavel))
        return variavel.toUpperCase();
};
// 3) Type Predicate - User Type Guard
// se quisermos checar se um parâmetro é igual a uma interface criada (Produto, por ex)
// não podemos usar instanceof nem typeof - aí entra o Type Predicate is
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const json = yield response.json();
        handleProduto(json);
    });
}
fetchProduto();
function isProduto(data) {
    if (data && typeof data === 'object' && 'nome' in data && 'preco' in data) // Type Guard
        return true; // que garante a proteção de dados (garantindo que dados não seja null, json retornar um objeto e propriedades do objeto do json)
    else
        return false;
}
function handleProduto(data) {
    //console.log(data.nome); sem o Type Predicate não é possível acessar as propriedades
    if (isProduto(data)) // Type Security
        console.log(data.nome);
}
const fill = (data) => {
    // data é passada dentro da função que faz o fetch
    // logo o json retorna um array !!!
    if (data instanceof Array) {
        data.map(e => {
            if (isProduct(e))
                document.body.innerHTML = `
                <h1>NOME: ${e.nome} </h1>
                <p>HORAS: ${e.horas} </p>
                <p>TAGS: ${e.tags.join(' - ')} </p>
                <p>NÍVEL: ${e.nivel === 'iniciante' ? 'Iniciante' : 'Avançado'} </p>
            `;
        });
    }
};
function isProduct(data) {
    if (data && typeof data === 'object' && 'nome' in data && 'horas' in data && 'tags' in data && 'nivel' in data) { // na função de preenchimento nós percorremos o array! aqui pegamos um elemento de cada vez
        console.log('is product');
        return true;
    }
    else {
        console.log('not is product');
        return false;
    }
}
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        fill(json);
    });
}
get();
