//Questão 01
/*var nome = "Carol";
var idade = "25";

console.log(`Olá! Meu nome é ${nome}, e tenho ${idade} anos.`);*/

/*inputs
const prompt = require("prompt-sync")()

var n1 = prompt("insira a nota 1: ")
var n2 = 9
var n3 = 5

var media = (n1 + n2 + n3) / 3
var resultado = media.toFixed(2)
console.log(`Sua média é... ${resultado}.`)*/

//Questão 02
/*var nome = "Felipe"
var cidade = "Pernambuco"
console.log(`${nome} é de ${cidade}.`)*/

//Questão 03
/*var num1 = 10;
var num2 = 100;

var soma = (num1 + num2)
var subrtracao = num1 - num2
var multiplicacao = num1 * num2
var devisao = num2 / num1

console.log(`A soma é igual ${soma}, a subtração é igual a ${subrtracao}, a multiplicação é igual a ${multiplicacao} e a divisão é igual a ${devisao}.`);*/

//Questão 04
/*var base = 8
var altura = 12
var area = ((base * altura) / 2)
console.log(`A área do triangulo é ${area}`)*/

//Questão 5
/*var n1 = 8;
var n2 = 2;
var n3 = 9;
var media = ((n1 + n2 + n3) / 3);
var resultado = media.toFixed(1)
console.log(`O resultado da média é ${resultado}`);*/

//Questão 06
/*
var valor = 1000;
var percentualDesconto = 20;
var desconto = ((valor * percentualDesconto) / 100);
var total = (valor - desconto);
var valorFinal = total.toFixed(2);
console.log(`Valor final com desconto é ${valorFinal}`); */

//Questão 07
/*
var salarioBruto1 = 3000
var percentualImposto1 = 7.5
var ir1 = (salarioBruto1 * percentualImposto1) / 100
var total1 = salarioBruto1 - ir1
var valorFinal1 = total1.toFixed(2)
console.log( `O percentual do imposto de renda da primeira classe(De R$ 2.112,01 até R$ 3.174,00) é ${percentualImposto1}% usando o valor de R$${salarioBruto1},00 como exemplo. O valor final do salário seria igual a R$${valorFinal1}.`)

var salarioBruto2 = 4000
var percentualImposto2 = 15
var ir2 = (salarioBruto2 * percentualImposto2) / 100
var total2 = salarioBruto2 - ir2
var valorFinal2 = total2.toFixed(2)
console.log(
  `O percentual do imposto de renda da segunda classe(De R$ 3.174,01 até R$ 4.236,00) é ${percentualImposto2}% usando o valor de R$${salarioBruto2},00 como exemplo. O valor final do salário seria igual a R$${valorFinal2}.`
)

var salarioBruto3 = 5000
var percentualImposto3 = 22.5
var ir3 = (salarioBruto3 * percentualImposto3) / 100
var total3 = salarioBruto3 - ir3
var valorFinal3 = total3.toFixed(2)
console.log(
  `O percentual do imposto de renda da terceira classe(De R$ 4.236,01 até R$ 5.298,00) é ${percentualImposto3}% usando o valor de R$${salarioBruto3},00 como exemplo. O valor final do salário seria igual a R$${valorFinal3}.`
)

var salarioBruto4 = 6000
var percentualImposto4 = 27.5
var ir4 = (salarioBruto4 * percentualImposto4) / 100
var total4 = salarioBruto4 - ir4
var valorFinal4 = total4.toFixed(2)
console.log(
  `O percentual do imposto de renda da quarta classe(Acima de R$ 5.298,01) é ${percentualImposto4}% usando o valor de R$${salarioBruto4},00 como exemplo. O valor final do salário seria igual a R$${valorFinal4}.`
)
*/
//Questão 08
/*
let valorInicial = 1000.00
let taxaCambio = 5.42

var valorConvertido = valorInicial / taxaCambio
var valorConvertido = valorConvertido.toFixed(2);
console.log(`O valor de R$${valorInicial},00 BRL será convertido para ${valorConvertido} USD na taxa de ${taxaCambio} da cotação atual.`);
*/

//Questão 09
/*
var celsius = 65;
var fahrenheit = ((celsius * 1.8)+32);
console.log(`A temperatura de ${celsius}°C celsius convertida para fahrenheit é de ${fahrenheit}°F`);
*/

//Questão 10

let peso = 75
let altura = 1.74

var imc = (peso / (altura * altura));
var imc = imc.toFixed(1);

function classificacaoIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  }else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  }else if (imc >= 25 && imc < 30) {
    return "excesso de peso";
  }else if (imc >= 30) {
    return "Obesidade"
  }
}

console.log(`Foi calculado seu IMC com base no seu peso e altura, seu IMC é de ${imc} e você essa classificado como ${classificacaoIMC(imc)}.`);
