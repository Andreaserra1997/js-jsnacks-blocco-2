// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const arr = [0, 1, 2, 3, 4, 5, 6]
let sumArr = 0;

for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
        sumArr = sumArr + arr[i];
    }
};
console.log(sumArr)