"use strict";
// 1) Type Assertion - as
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// usar o as é como ter um carro blindado e andar com os vidros abertos
// diminuimos o type safety com seu uso
// CUIDADO AO USAR
const video = document.querySelector('#video');
function fetchProd() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        return response.json();
    });
}
function handleProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const json = yield fetchProd();
        console.log(json.nome);
    });
}
handleProduct();
// 3) non-null operator
// indica que é impossível um elemento ser null
// também não garante type safety, pode gerar erro !
const video2 = document.querySelector('video');
video2.volume;
const video3 = document.querySelector('video');
video3 === null || video3 === void 0 ? void 0 : video3.volume;
// 4) outras sintaxes
const a = document.querySelector('a');
const a2 = document.querySelector('a');
