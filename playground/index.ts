/*
  Union Types and Arrays P2

*/

type Point = {
  x: number
  y: number
}

type Loc = {
  lat: number
  lng: number
}

let coords: (Point | Loc)[] = []

coords.push({
  x: 1,
  y: 2,
})

coords.push({
  lat: 435.32,
  lng: 123.43,
})
