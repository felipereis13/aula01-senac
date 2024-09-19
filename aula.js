//concatenacao de String
/*var nome = "Carol";
var idade = "25";

console.log(`Olá! Meu nome é ${nome}, e tenho ${idade} anos.`);*/

//inputs
const prompt = require("prompt-sync")()

var n1 = prompt("insira a nota 1: ")
var n2 = 9
var n3 = 5

var media = (n1 + n2 + n3) / 3
var resultado = media.toFixed(2)
console.log(`Sua média é... ${resultado}.`)
