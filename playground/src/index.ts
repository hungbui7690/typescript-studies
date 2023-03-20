/*
  Include & Exclude Options P2
  - put dontTouch into src/
  - "exclude" will filter based on "include" setting
  
  
  - check pic: we can see that by default, exclude will exclude node_modules 
  > but if we have exclude setting > we need to add "node_modules" to exclude settings as well
      "exclude": ["dontTouch.ts", "node_modules"]
  
*/

interface Chicken {
  breed: string
  eggsPerWeek: number
  name: string
  age: number
}

const norma: Chicken = {
  breed: 'Silk',
  eggsPerWeek: 4,
  name: 'Norma',
  age: 2,
}
