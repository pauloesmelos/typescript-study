// Unknown indica que não sabemos o tipo de dado que pode ser passado

// é mais seguro que o any, pois com o any nós perdemos o type safety (ele não)

const withoutTypeSafety = (value: any) => {
    return value.toLowerCase();
}
const withTypeSafety = (value: unknown) => {
    if (typeof value === 'string')
        return value.toLowerCase();
    else if (typeof value === 'number')
        return value.toFixed();
    else if (value instanceof HTMLElement)
        return value.innerText;
}
//console.log(withoutTypeSafety(5)); // erro (não é possível realizar toLowerCase com number, não gerou nem warning)
console.log(withTypeSafety(50));
console.log(withTypeSafety('CARRO'));
console.log(withTypeSafety(document.querySelector('button')));