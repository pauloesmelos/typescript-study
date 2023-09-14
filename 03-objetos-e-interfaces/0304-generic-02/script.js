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
var _a;
// 3) Extends - indica o tipo genérico que geve herdar uma interface específica 
// extrair o innerText de elementos HTML(link e button) e usar um método específo de cada um 
const button = document.querySelector('button');
const a = document.querySelector('a');
const extractText = (element) => {
    return {
        text: element.innerText,
        element
    };
};
if (button)
    console.log(extractText(button).element.click); // HTMLButtonElement
if (a)
    console.log(extractText(a).element.href); // HTMLAnchorElement
// criar uma função de jquery semelhante ao querySelector, que retorna um HTMLElement apartir de um text
const $ = (query) => {
    return document.querySelector(query);
};
const anchor = (_a = $('a')) === null || _a === void 0 ? void 0 : _a.href;
const botao = document.querySelector('.btn');
if (botao instanceof HTMLButtonElement)
    botao.click();
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    return yield response.json();
});
// a) definindo o tipo da variável manualmente
/* const getProduct = async (product: string) => {
    const notebook: Product = await fetchData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook);
} */
// b) defindo a função fetchData com generics
const getProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const notebook = yield fetchData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
});
getProduct('notebook');
