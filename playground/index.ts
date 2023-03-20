/*
  Creating Type Aliases P1
  - pic: type-alias
  - this is basically just a way to reuse the object definition

  > in the below example, we use { x: number; y: number } many times 
    > and the code below looks so nasty
*/

let coordinate: { x: number; y: number } = { x: 32, y: 2 }

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() }
}

function doublePoint(point: { x: number; y: number }): {
  x: number
  y: number
} {
  return { x: point.x * 2, y: point.y * 2 }
}
