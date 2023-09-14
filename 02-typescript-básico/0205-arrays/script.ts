const numbers = [5,1,3,10,8,0];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3];
const dados = [
    ['Senhor dos anéis', 50],
    ['Livro genérico', 10]
];

const maior = (array: number[]) => {
    return array.reduce((ac,e) => (ac > e ? ac : e) ,array[0]);
}
// sintaxe alternativa
const onlyNumber = (array: Array<string | number>) => {
    return array.filter(e => typeof e === "number");
}
console.log(maior(numbers));
console.log(onlyNumber(valores));

// Exercício 1 - defina uma interface para API de cursos.
// se o nível de curso for iniciante, pinte o título de azul, se for para avançado, pinte de vermelho
//  https://api.origamid.dev/json/cursos.json
interface Course{
    aulas: number;
    gratuito: boolean;
    horas: number;
    idAulas: Array<number>;
    nivel: 'iniciante' | 'avancado';
    nome: string;
    tags: Array<string>;
}
const showData = (data: Array<Course>) => {
    data.forEach((element,index,array) => {
        let color: string;
        if(element.nivel === 'iniciante')
            color = "blue";
        else
            color = "red";
        document.body.innerHTML += `
            <h2 style="color: ${color}">Seja bem vindo ao curso de ${element.nome}</h2>
            <p>Duração: ${element.horas} horas</p>
            <p>Gratuito: ${element.gratuito ? "Sim" : "Não"}</p>
            <p>Nível: ${element.nivel === "iniciante" ? "Iniciante" : "Avançado"}</p>
            <p>Tags: ${element.tags.join(', ')}</p>
            <p>Id aulas: ${element.idAulas.join(', ')}</p>
        `;
    });
}
const fetchUrl = async (url: string) => {
    const data = await fetch(url);
    const json = await data.json();
    showData(json);
}
fetchUrl(" https://api.origamid.dev/json/cursos.json");