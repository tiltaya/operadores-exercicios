// a) 5 é maior que 20 e também é menor que 2;
let num1 = 5 > 20 && 5 > 2
console.log(num1)

// b) 5 é igual a 5 ou é igual a “5”;
let num2 = 5 == 5 || 5 == "5"
console.log(num2)

// c) negação de (vinte é maior que cinquenta)
let num3 = !(20 > 50)
console.log(num3)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
let num4 = !(20 > 50 || 50 > 60)
console.log(num4)

// Parte 2

const sal = 2000
const creche = 45.50 * 2
const vendasJan = 5784.50 
const comissaoJan = vendasJan * 0.1
const vendasFev = 3418.41
const comissaoFev = vendasFev * 0.1
const vendasMar = 4124.10
const comissaoMar = vendasMar * 0.1
const vendasAbr = 1874
const comissaoAbr = vendasAbr * 0.1
const vendasMai = 7000
const comissaoMai = vendasMai * 0.1
const vendasJun = 9450
const comissaoJun = vendasJun * 0.1

let res1 = sal + creche
console.log("O salário fixo mais o auxílio creche:", res1)

let res2 = comissaoJan
console.log("Quanto Fulano de Silva receberá de comissão em janeiro:", res2)

let res3 = (sal + comissaoJan + creche) * 5 / 100
console.log("Quanto Fulano de Silva será descontado em janeiro pelo INSS:", res3)

// Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

const inssJan = (((sal + comissaoJan + creche) * 5) / 100).toFixed(2)
const liqJan = sal + comissaoJan + creche - inssJan
console.log("Salário líquido de Janeiro:", liqJan)

const inssFev = (((sal + comissaoFev + creche) * 5) / 100).toFixed(2)
const liqFev = sal + comissaoFev + creche - inssFev
console.log("Salário líquido de Fevereiro:", liqFev)

const inssMar = (((sal + comissaoMar + creche) * 5) / 100).toFixed(2)
const liqMar = sal + comissaoMar + creche - inssMar
console.log("Salário líquido de Março:", liqMar)

const inssAbr = (((sal + comissaoAbr + creche) * 5) / 100).toFixed(2)
const liqAbr = sal + comissaoAbr + creche - inssAbr
console.log("Salário líquido de Abril:", liqAbr)

const inssMai = (((sal + comissaoMai + creche) * 5) / 100).toFixed(2)
const liqMai = sal + comissaoMai + creche - inssMai
console.log("Salário líquido de Maio:", liqMai)

const inssJun = (((sal + comissaoJun + creche) * 5) / 100).toFixed(2)
const liqJun = sal + comissaoJun + creche - inssJun
console.log("Salário líquido de Junho:", liqJun)

const liqTotal = (liqJan + liqFev + liqMar + liqAbr + liqMai + liqJun).toFixed(2)
console.log("Salário líquido total de seis meses:", liqTotal)

// A média do salário em seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
// A média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados.
// Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.

const salJan = sal + comissaoJan + creche
const salFev = sal + comissaoFev + creche
const salMar = sal + comissaoMar + creche
const salAbr = sal + comissaoAbr + creche
const salMai = sal + comissaoMai + creche
const salJun = sal + comissaoJun + creche

const media = ((salJan + salFev + salMar + salAbr + salMai + salJun) / 6).toFixed(2)
console.log("Média do salário em seis meses:", media)