"use strict";
// 1) Guard, Safety e Narrowing
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Type Guard (defesa) garante Type Safety (segurança) do dado dentro do bloco condicional. 
// este processo é chamado de Type Narrowing (estreitamento)
// o Typescript faz o Control Flow (controle  de fluxo) pra saber o tipo de dado dentro da condicional 
const typeGuard = (value) => {
    if (typeof value === 'string') { // Aqui é feito o type guard, garantindo o type safety do dado
        return value.toLowerCase(); // Aqui é o Control Flow
    }
    else if (typeof value === 'number') {
        return value.toFixed();
    }
};
// 2) in
// verifica se o objeto possui uma propriedade com o mesmo nome passada como comparação
const People = {
    name: 'Josias',
    ocupacao: 'Boneco'
};
if ('name' in People) {
    console.log('Existe a prop name em People');
}
const handleData = (data) => {
    if ('preco' in data) { // o if garante o type safety - se na API mudar de preco pra total, não sera executado
        document.body.innerHTML = `
        <h1>${data.nome}</h1>
        <p>${data.preco}</p>
        `;
    }
};
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const json = yield response.json();
    handleData(json);
    return json;
});
fetchData('https://api.origamid.dev/json/notebook.json');
