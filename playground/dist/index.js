"use strict";
/*
  Discriminated Unions
  - pic
  - create common property
    > each interface must have a field to discriminate
  
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
    }
}
const stevie = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster',
};
console.log(getAnimalSound(stevie));
