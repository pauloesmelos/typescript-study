// 1) usar Type guard para verificar se um json vem em forma de array
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data: unknown) {
    if (data instanceof Array) // ajudar na proteção de dados
        console.log('data é uma instância de array');
}
fetchProduto();

// 2) Type Predicate is - com o uso de is podemos indicar o tipo de argumento uma função
// deve receber para ser verdadeira

// criando uma função auxiliar que checa o tipo de dado para demonstrar isso
function isString(data: unknown): data is string {
    return typeof data === 'string';
}
function check(data: unknown){
    if(isString(data)) // função auxiliar - se passarmos uma string(data is string), é possível acessar o type guard
        return data.toUpperCase();
}
console.log(check('palmeiras'));

// 3)