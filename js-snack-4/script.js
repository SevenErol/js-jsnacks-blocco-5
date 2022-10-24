
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
//  prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const lettersList = ["a", "b", "c"];

const numberList = [1, 2, 3];

const mixArray = (firstArray, secondArray) => {

    let finalArray = [];

    firstArray.forEach((element, i) => {

        finalArray.push(element);

        finalArray.push(secondArray[i]);

    })

    return finalArray
};

let finalArray = mixArray(lettersList, numberList);

console.log(finalArray);

