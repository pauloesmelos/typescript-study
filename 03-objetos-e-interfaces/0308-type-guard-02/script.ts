// 2) Type Predicate :arg is type - garante o retorno true quando um tipo de dado é especificado

// no tipo de retorno específicamos que o argumento deve ser do tipo X
const isString = (variavel: unknown):variavel is string => {
    return typeof variavel === 'string';
}
const checkVar = (variavel: unknown) => {
    if(isString(variavel))
        return variavel.toUpperCase();
}

// 3) Type Predicate - User Type Guard
// se quisermos checar se um parâmetro é igual a uma interface criada (Produto, por ex)
// não podemos usar instanceof nem typeof - aí entra o Type Predicate is

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
interface Produto {
    nome: string;
    preco: number;
}
function isProduto(data: unknown): data is Produto {
    if(data && typeof data === 'object' && 'nome' in data && 'preco' in data) // Type Guard
        return true;                   // que garante a proteção de dados (garantindo que dados não seja null, json retornar um objeto e propriedades do objeto do json)
    else
        return false;
}
function handleProduto (data: unknown){
    //console.log(data.nome); sem o Type Predicate não é possível acessar as propriedades
    if(isProduto(data)) // Type Security
        console.log(data.nome);
}

// Exercício

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

// ATENÇÃO - VERIFICAR O TIPO DE RETORNO DO JSON - {}, [], [{}] string etc

interface Product {
    nome: string;
    horas: number;
    tags: Array<string>;
    nivel: 'iniciante' | 'avancado';
}
const fill = (data: unknown) => {
    // data é passada dentro da função que faz o fetch
    // logo o json retorna um array !!!
    if (data instanceof Array) {
        data.map(e => {
            if (isProduct(e))
                document.body.innerHTML = `
                <h1>NOME: ${e.nome} </h1>
                <p>HORAS: ${e.horas} </p>
                <p>TAGS: ${e.tags.join(' - ')} </p>
                <p>NÍVEL: ${e.nivel === 'iniciante' ? 'Iniciante' : 'Avançado'} </p>
            `;
        })
    }
}
function isProduct(data: unknown): data is Product{ // Type Guard function boolean | Type Predicate is 
    if (data && typeof data === 'object' && 'nome' in data && 'horas' in data && 'tags' in data && 'nivel' in data) { // na função de preenchimento nós percorremos o array! aqui pegamos um elemento de cada vez
        console.log('is product');
        return true;
    }
    else {
        console.log('not is product');
        return false;
    }
}
async function get() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    fill(json);
}
get();