
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchiniList = [
    {
        type: "Zucchino nero",

        weight: 100,

        length: 15,
    },

    {
        type: "Zucchino romanesco",

        weight: 100,

        length: 11,
    },
    {
        type: "Zucchino ortolano",

        weight: 100,

        length: 15,
    },
    {
        type: "Zucchina lunga fiorentina",

        weight: 100,

        length: 11,
    },
    {
        type: "Zucchino nero",

        weight: 100,

        length: 11,
    },
    {
        type: "Zucchino siciliano",

        weight: 100,

        length: 11,
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

        length: 11,
    }

];

let weightOverFifteen = 0;

let weightUnderFifteen = 0;

const overFifteen = zucchiniList.filter(element => {

    if(element.length >= 15) {

        return true;
    }

    return false;

});

console.log(overFifteen);

const underFifteen = zucchiniList.filter(element => {

    if(element.length < 15) {

        return true;
    }

    return false;

});

console.log(underFifteen);

overFifteen.forEach(element => weightOverFifteen += element.weight);

console.log("Il peso totale delle zucchine al di sopra dei 15 cm è: " + weightOverFifteen + " gr");

underFifteen.forEach(element => weightUnderFifteen += element.weight);

console.log("Il peso totale delle zucchine al di sotto dei 15 cm è: " + weightUnderFifteen + " gr");