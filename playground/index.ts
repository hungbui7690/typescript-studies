/*
  Introducing Interfaces
  - pic
  - describe the shape of objects 

*/

// type alias
type Point = {
  x: number
  y: number
}

const pt: Point = { x: 1, y: 10 }

//////////////////////////////

// interface > no = sign
interface IPoint {
  x: number
  y: number
}

// right now, it is similar to "type alias", but we will learn about the different later
const ptX: IPoint = { x: 1, y: 213 }
