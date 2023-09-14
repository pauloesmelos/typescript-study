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
const numbers = [5, 1, 3, 10, 8, 0];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3];
const dados = [
    ['Senhor dos anéis', 50],
    ['Livro genérico', 10]
];
const maior = (array) => {
    return array.reduce((ac, e) => (ac > e ? ac : e), array[0]);
};
// sintaxe alternativa
const onlyNumber = (array) => {
    return array.filter(e => typeof e === "number");
};
console.log(maior(numbers));
console.log(onlyNumber(valores));
const showData = (data) => {
    data.forEach((element, index, array) => {
        let color;
        if (element.nivel === 'iniciante')
            color = "blue";
        else
            color = "red";
        document.body.innerHTML += `
            <h2 style="color: ${color}">Seja bem vindo ao curso de ${element.nome}</h2>
            <p>Duração: ${element.horas} horas</p>
            <p>Gratuito: ${element.gratuito ? "Sim" : "Não"}</p>
            <p>Nível: ${element.nivel === "iniciante" ? "Iniciante" : "Avançado"}</p>
            <p>Tags: ${element.tags.join(', ')}</p>
            <p>Id aulas: ${element.idAulas.join(', ')}</p>
        `;
    });
};
const fetchUrl = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(url);
    const json = yield data.json();
    showData(json);
});
fetchUrl(" https://api.origamid.dev/json/cursos.json");
