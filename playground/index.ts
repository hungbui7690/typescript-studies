/*
  The Files Compiler Option
  - pic
  - we want to just compile specific files > use files options
  - create dontTouch.ts
    > when we run "tsc" > compile all files 

  - Config
      "files": ["farmstand.ts", "index.ts"]
  - Run tsc > now just compile these 2 files 

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
