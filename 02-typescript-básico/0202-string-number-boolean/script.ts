// Type guard - garantindo que um dado seja do mesmo tipo
const frase = "Front end";
const numero = 50;
const bool = true;

if(typeof frase === "string"){
    console.log(frase.toUpperCase());
}
if(typeof numero === "number"){
    console.log(numero.toString());
}
if(typeof bool === "boolean"){
    console.log(bool);
}
// typeof é de js, e funciona como um type guard