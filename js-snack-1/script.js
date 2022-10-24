
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchiniList = [
    {
        type: "Zucchino nero",

        weight: 100,

        length: 15,
    },

    {
        type: "Zucchino romanesco",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchino ortolano",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchina lunga fiorentina",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchino nero",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchino siciliano",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchina striata di Napoli",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchina bianca triestina",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchina rigata pugliese",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchino tondo di Piacenza",

        weight: 100,

        length: 15,
    }

];

let totalWeight = 0;

zucchiniList.forEach(element => totalWeight += element.weight);

console.log("Il peso totale è di: " + totalWeight + " gr")

