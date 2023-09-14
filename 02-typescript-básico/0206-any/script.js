"use strict";
// type any
// tomar cuidado ao usar o any, porque é como se não usássemos TypeScript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function removeTextSpaces(text) {
    return text.trim();
}
console.log(removeTextSpaces("          olaa    ")); //ok
console.log(removeTextSpaces(4)); // problema
function fetchJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const json = yield response.json();
        showJson(json);
    });
}
function showJson(data) {
}
