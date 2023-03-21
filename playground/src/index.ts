/*
  Webpack Dev Server
  - webpack config: 
    > mode: 'development', 
    > output: {
        publicPath: '/dist',
      },
  - after this, we can see the bundle.js is not minified



  - about wp dev server: it is live server + bundling & save in memory (not in dist/)
    > https://github.com/webpack/webpack-dev-server
    > npm install --save-dev webpack-dev-server

  - to run dev server
    > npx webpack serve
    > npm run serve

  
  (***) after start server, we can delete all files in dist/ > everything still works because it used the data in the memory 


  (***) for webpack 5, need to have this: 
    devServer: {
      static: {
        directory: path.join(__dirname, '/'),
      },
    },
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
