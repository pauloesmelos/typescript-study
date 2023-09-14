// 1) Guard, Safety e Narrowing

// Type Guard (defesa) garante Type Safety (segurança) do dado dentro do bloco condicional. 
// este processo é chamado de Type Narrowing (estreitamento)
// o Typescript faz o Control Flow (controle  de fluxo) pra saber o tipo de dado dentro da condicional 
const typeGuard = (value: any) => {
    if(typeof value === 'string'){ // Aqui é feito o type guard, garantindo o type safety do dado
        return value.toLowerCase(); // Aqui é o Control Flow
    }
    else if(typeof value === 'number'){
        return value.toFixed();
    }
}

// 2) in

// verifica se o objeto possui uma propriedade com o mesmo nome passada como comparação
const People = {
    name: 'Josias',
    ocupacao: 'Boneco'
};
if('name' in People){
    console.log('Existe a prop name em People')
}

//
interface Produto {
    nome: string;
    preco: number;
}
const handleData = (data: Produto) => {
    if('preco' in data){ // o if garante o type safety - se na API mudar de preco pra total, não sera executado
        document.body.innerHTML = `
        <h1>${data.nome}</h1>
        <p>${data.preco}</p>
        `;
    }
}
const fetchData = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();
    handleData(json);
    return json;
}
fetchData('https://api.origamid.dev/json/notebook.json');