/*
  Production Configuration
  - right now, our setup is for development
  - create webpack.prod.js + change dev config file to webpack.dev.js
  - config build command
    + serve command: dev
    + build command: prod

  
  - we also need to clean dist/ everytime we build
    + add hash to filename > webpack.prod.js
      > [hash] or [chunkhash] or [contenthash]
    + now, everytime we build, we create a new file 

  
  Clean Webpack Plugin
  > npm i clean-webpack-plugin
  > setup in webpack.prod.js



*/

import Dog from './Dog'
import ShelterDog from './ShelterDog'
import { add, multiply, divide } from './utils'
console.log('FROM INDEX FILE!!!!!!!!')

const elton = new Dog('Elton', 'Aussie', 0.5)
elton.bark()

console.log(add(4, 5))
console.log(multiply(4, 5))
console.log(divide(4, 5))

const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Desert Springs Shelter')
