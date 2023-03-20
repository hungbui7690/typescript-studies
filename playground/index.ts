/*
  Introducing Union Types
  - pic
  - multiple types

*/

let age: number | string = 21
age += 1
age = '24'

/////////////////////////////////////

type Point = {
  x: number
  y: number
}

type Loc = {
  lat: number
  lng: number
}

// (***)
let coord: Point | Loc = {
  x: 1,
  y: 20,
}

coord = {
  lat: 324.123,
  lng: 123.213,
}
