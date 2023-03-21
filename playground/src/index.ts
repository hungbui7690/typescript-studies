/*
  Installing Webpack Dependencies
  > npm install --save-dev webpack webpack-cli typescript ts-loader
    > why do we need to install typescript, though it was installed globally 
      + reason: because we want to version of TS in package.json
    > ts-loader
      + middleman between TS & Webpack: 
        > call tsc command 
        > hand js files to webpack

//////////////////////////////////////////

  Basic Webpack Config P1
  - create webpack.config.js
  - setup build command in package.json

  > now if we build > error > next lesson

*/

import Dog from './Dog.js'
import ShelterDog from './ShelterDog.js'
import { add, multiply, divide } from './utils.js'
console.log('FROM INDEX FILE!!!!!!!!')

const elton = new Dog('Elton', 'Aussie', 0.5)
elton.bark()

console.log(add(4, 5))
console.log(multiply(4, 5))
console.log(divide(4, 5))

const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Desert Springs Shelter')
