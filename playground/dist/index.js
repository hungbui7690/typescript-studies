"use strict";
/*
  Exhaustiveness Checks With Never P1
  
*/
function getAnimalSound(animal) {
    switch (animal.kind) {
        case 'pig':
            animal;
            return 'Oink!';
        case 'cow':
            animal;
            return 'Mooo!';
        case 'rooster':
            animal;
            return 'Cookoo!';
        // (***) we should never make it here, if we handle all cases correctly! > because it show error here > there should be some cases that we did not handle
        default:
            const shouldNeverGetHere = animal;
    }
}
const stevie = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster',
};
console.log(getAnimalSound(stevie));
