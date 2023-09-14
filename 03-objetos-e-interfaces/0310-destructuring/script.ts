// revisando: destructuring
const [one,two,three] = [1,2,3]; // one = 1, two = 2, etc

function click ({target}: {target: EventTarget | null}){
    if(target instanceof HTMLButtonElement)
        console.log(target);
}
const button = document.querySelector('button')?.addEventListener('click',click);

// 1) ...rest (útil para atribuir valor a variáveis ou quando temos uma quantidade de argumentos desconhecida)
const maiorSequencia = (tipo: 'maior' | 'menor', ...nums: Array<number>) => { // se está desestruturando é array
    if(tipo === 'maior') {
        return Math.max(...nums);
    }
    else if(tipo === 'menor') {
        return Math.min(...nums);
    }
    else
        return null;
}
console.log(maiorSequencia('maior',1,4,1,5,9,0));
const maior = (tipo: 'maior' | 'menor',array: Array<number>) => {
    if(tipo === 'maior')
        return Math.max(...array);
    else if(tipo === 'menor')
        return Math.min(...array);
    else
        return 0;
}
console.log(maior('maior',[2,3,1,5,2]));
const teste_destructuring = [2,3,1,5,1];
console.log(teste_destructuring);

// 2) conhecer o tipo dos dados
// ex: currentTarget pode ser um EventTarget | null

function handleClick({currentTarget, pageX}: {currentTarget: EventTarget | null, pageX: number | null}) {
    // na desestruturação passar o tipo do elemento (ex pageX: number)
    if(currentTarget instanceof HTMLElement)
        currentTarget.innerHTML = `Click X: ${pageX}`;
}
document.documentElement.addEventListener('click', handleClick);