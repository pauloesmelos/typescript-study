"use strict";
// variavel
const input = document.querySelector('input');
const p = document.querySelector('p');
// localStorage
const local = localStorage.getItem('valor');
// function expression
const calcular = (valor) => {
    if (p)
        p.innerText = `ganho total: ${Number(valor) + 100 - (Number(valor) * 0.2)} `;
};
if (local && input) {
    input.value = local;
    calcular(local);
}
// function expression
const total = (event) => {
    if (input) {
        localStorage.setItem('valor', input.value);
        calcular(input.value);
    }
};
// add event input
input ? input.addEventListener('keyup', total) : undefined;
