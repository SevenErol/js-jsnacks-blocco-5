
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

const animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda"
];

const inBetween = (list, firstNumber, secondNumber) => {

    const newArray = [];

    list.forEach((element, i) => {

        if (secondNumber > list.length) {

            return

        } else if (i >= firstNumber - 1 && i < secondNumber) {

            newArray.push(element);

        }

    })

    return newArray;
}

const newArray = inBetween(animals, 4, 14);

console.log(newArray);