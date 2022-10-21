const num1 = Number(prompt("Fale um número"))
const num2 = Number(prompt("Fale outro número"))

let resposta1 = num1 > num2
console.log("O primeiro numero é maior que segundo?", resposta1)
let resposta2 = num1 == num2
console.log("O primeiro numero é igual ao segundo?", resposta2)
let resposta3 = num1 / num2
console.log("O primeiro numero é divisível pelo segundo?", resposta3)
let resposta4 = num2 / num1
console.log("O segundo numero é divisível pelo primeiro?", resposta4)

