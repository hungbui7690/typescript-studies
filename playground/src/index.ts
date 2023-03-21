/*
  Whats The Point Of Webpack
  - grouping multiple files of our project and create a bundle (compress, shrink...)
  - when a page is loaded, it need to send multiple requests to server to get data to display on the screen
    > and it needs to load many files, many libraries... > take time
    > pic: 
      - if we have multiple files > easy to code and understand, but slow loading time 
      - if we have just only 1 file > faster loading time, hard to read and maintain 
    > with the help of webpack, everything becomes easier

///////////////////////////////////

  Setting Up a Project P1
  - multiple files 

  - script > type=module
  - .js extension
  - tsconfig > module=ES6
  - comment import lodash line (utils.js)

  > after finish > check network tab > load many files 

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
