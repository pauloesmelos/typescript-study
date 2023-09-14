// 1) Intersection - funciona como um extends para interfaces, mas nesse caso para type
type Produto = {
    nome: string;
    preco: number;
}
type Carro = {
    portas: number;
    chassi: string;
}
function handleCarro (data: Produto & Carro){
    console.log(data.preco);
    console.log(data.portas);
}

// 2) Adicionando novas propriedades a interface e type

// type = criamos outro type e atribuimos o antigo com &
type ProdutoComICMS = Produto & {
    icms: string;
}
type Pai = {
    nome: string;
    cpf: string;
}
type Filho = Pai & {
    data_nascimento: Date;
}

// interface
interface Pessoa {
    nome: string;
    cpf: string;
}
interface Pessoa {
    rg: string;
    idade: number;
}
function showPessoa(data: Pessoa) {
    console.log(data.nome);
    console.log(data.rg);
}

// 3) extender objetos globais nativos
// se quisermos definir uma propriedade para ser acessada globalmente, podemos adicionar novas propriedades
// ao window

interface Window {
    usuarioID: number;
}

// adicionar a propriedade usuarioID ao objeto window ( sem definir interface dá erro)
window.usuarioID = 11;
