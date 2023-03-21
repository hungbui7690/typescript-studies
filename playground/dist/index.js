/*
  Basic Webpack Config P2
  - remove .js when import
    > another error > cannot handle .ts file > fix in webpack.config > add .tsx
      > test: /\.tsx?$/
    > ok > now we just have a warning that said: 'mode' option has not been set > but if we check dist/ > we should see bundle.js

  - index.html > link to bundle.js
    > everything is ok > but what if we want to debug js file > how? > next lesson
*/
import Dog from './Dog';
import ShelterDog from './ShelterDog';
import { add, multiply, divide } from './utils';
console.log('FROM INDEX FILE!!!!!!!!');
const elton = new Dog('Elton', 'Aussie', 0.5);
elton.bark();
console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));
const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Desert Springs Shelter');
