/*
  More Array Syntax P2

*/

type Point = {
  x: number
  y: number
  z?: number
}

const coords: Point[] = []
coords.push({ x: 2, y: 3 })
coords.push({ x: 99, y: 0 })
coords.push({ x: 99, y: 99, z: 123 })
