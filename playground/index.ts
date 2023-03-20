/*
  Optional Properties
  > ?: 
  
*/

type Point = {
  x: number
  y: number
  z?: number // (***) z is optional
}

const myPointX: Point = { x: 1, y: 2, z: 3 }
const myPointY: Point = { x: 1, y: 2 } // doesn't need to have z
