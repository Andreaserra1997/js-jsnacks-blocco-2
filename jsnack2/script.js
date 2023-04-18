/* il Grande Gatsby ha una lista di nomi e una lista di cognomi,
 e da queste vuole generare una falsa lista di invitati con nome e cognome.*/

const listName = [
    'Andrea',
    'Silvana',
    'Marianna',
    'Raimondo',
    'Roberta',
    'Gianni',
];

const listSurname = [
    'Serra',
    'Soggiu',
    'Carboni',
    'Ruggiu',
    'Daga',
    'Puggioni',
];

const list = [];

for (let i = 0; i < listName.length; i++) {
    const nameRandom = listName[Math.floor(Math.random() * listName.length)];
    const surnameRandom = listSurname[Math.floor(Math.random() * listSurname.length)];
    list[i] = (`${nameRandom} ${surnameRandom}`);
};
console.log(list);