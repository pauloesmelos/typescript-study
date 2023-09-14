"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
const form = document.getElementById('form');
form === null || form === void 0 ? void 0 : form.addEventListener('keyup', handleForm);
function handleForm({ target }) {
    if (target instanceof HTMLInputElement)
        window.UserData[target.id] = target.value;
    localStorage.setItem('item', JSON.stringify(window.UserData));
}
// carregando dados do localStorage
function isValidJson(json) {
    try {
        JSON.parse(json);
    }
    catch (_a) {
        return false;
    }
    return true;
}
function isValidUserData(data) {
    if (data && typeof data === 'object' && ('nome' in data || 'email' in data || 'cpf' in data))
        return true;
    else
        return false;
}
function loadLocalStorage() {
    const dados = localStorage.getItem('item') || null;
    if (dados && isValidJson(dados)) {
        const userData = JSON.parse(dados);
        if (isValidUserData(userData)) {
            console.log('Ok');
            Object.entries(userData).forEach(([key, value]) => {
                // e[0] = chave
                // e[1] = valor
                // ([key, value]) = desestruturando o array
                let input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();
