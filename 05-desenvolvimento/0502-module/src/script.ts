// 1) module
// se usarmos export ou import em um arquivo .ts, ele será transformado em module
import plugin from "./plugin.js";
plugin();

// 2) isolatedModules
// com a configuração isolatedModules: true não será permitido a criação de arquivos globais
// apenas através de modules ( MAIS RECOMENDADO )
interface Produto {
    nome: string;
    preco: number;
}
//{
    //"target": "ESNext",                                
    //"lib": ["ESNext", "DOM"],    
    //"module": "ESNext",    
    //"sourceMap": true, remove espaços e começa a disparar os erros no arquivo .ts
    //"allowJs": true,
    // "noImplicitAny": true
//},
//"include": ["src"],
//"exclude": ["node_modules"]