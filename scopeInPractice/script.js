'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = ` YOu are ${age}, born in ${birthYear}`

        console.log(output);
    }
    printAge();
}

const firstName = 'Joana';
calcAge(1991);



