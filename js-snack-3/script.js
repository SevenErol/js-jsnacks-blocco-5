
// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

const reverse = string => {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    // return the string reversed
    return reverseString;
}

// example
let result = reverse("Ciao");

// print in console
console.log(result);