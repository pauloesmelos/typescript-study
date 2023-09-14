"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
const form = document.querySelector('#form'); // especificar aqui
form === null || form === void 0 ? void 0 : form.addEventListener('keyup', handleForm); // Erro(Nenhuma sobrecarga corresponse.. = especificar o tipo)
function handleForm({ target }) {
    if (target instanceof HTMLInputElement)
        window.UserData[target.id] = target.value;
    localStorage.setItem('valor', JSON.stringify(window.UserData));
}
// load data localstorage
function loadUserData() {
    const userData = localStorage.getItem('valor');
    console.log(userData);
    if (userData && isJSON(userData)) {
        let objectUser = JSON.parse(userData);
        if (isUserData(objectUser)) {
            // {nome: "paulo", email: "@paulo"}
            Object.entries(objectUser).map(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value; // RESOLVOU O PROBLEMA DO INPUT APAGAR APOS REFRESH TENDO PREENCHIDO OUTRO
                }
            });
        }
    }
}
function isJSON(data) {
    try {
        JSON.parse(data);
    }
    catch (_a) {
        return false;
    }
    return true;
}
function isUserData(data) {
    if (data && typeof data === 'object' && ('nome' in data || 'cpf' in data || 'email' in data)) {
        return true;
    }
    else
        return false;
}
loadUserData();
