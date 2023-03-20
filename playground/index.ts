/*
  Intersection Types P1
  - combine types

*/

type Circle = {
  radius: number
}

type Colorful = {
  color: string
}

// intersection type > combination of Circle & Color
type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'red',
}
