// Exercício - Crie uma função que arrenda um valor
// o valor pode ser string ou number
// a função deve retornar o mesmo tipo que ela receber;
function ceil(value: string): string;
function ceil(value: number): number;
function ceil(value: string | number): string | number {
    if(typeof value === 'string')
        return Math.ceil(Number(value)).toString();
    else return Math.ceil(value);
}
console.log(ceil('24.8'));