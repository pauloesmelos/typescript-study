"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const nav = document.querySelector('nav');
const button = document.querySelector('button');
function show(event) {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('active');
    if (button instanceof HTMLElement && nav) {
        if (nav.classList.contains('active')) {
            button.ariaExpanded = 'true';
            button.ariaLabel = 'Fechar Menu';
        }
        else {
            button.ariaExpanded = 'false';
            button.ariaLabel = 'Abrir Menu';
        }
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener('pointerdown', show);
