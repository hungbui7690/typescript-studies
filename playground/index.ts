/*
  Creating Type Aliases P2
  - pic: type-alias
  
*/

// (***) define
type Point = {
  x: number
  y: number
}

// use
let coordinate: Point = { x: 32, y: 2 }

// use
function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() }
}

// use
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 }
}
