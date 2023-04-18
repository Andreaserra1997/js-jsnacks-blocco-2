/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const arr = [];
const num1 = parseInt(prompt('Dammi il primo numero'))
const num2 = parseInt(prompt('Dammi il secondo numero'))
const num3 = parseInt(prompt('Dammi il terzo numero'))
const num4 = parseInt(prompt('Dammi il quarto numero'))
const num5 = parseInt(prompt('Dammi il quinto numero'))
const num6 = parseInt(prompt('Dammi il sesto numero'))

if (num1 % 2 == 1) {
    arr.push(num1)
}
if (num2 % 2 == 1) {
    arr.push(num2)
}
if (num3 % 2 == 1) {
    arr.push(num3)
}
if (num4 % 2 == 1) {
    arr.push(num4)
}
if (num5 % 2 == 1) {
    arr.push(num5)
}
if (num6 % 2 == 1) {
    arr.push(num6)
}
console.log(arr);