"use strict";
/*
  Exhaustiveness Checks With Never P2
  
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
        case 'sheep': // (***)
            animal;
            return 'Baaaaa!';
        // no err > all cases are handled
        default:
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster',
};
console.log(getAnimalSound(stevie));
