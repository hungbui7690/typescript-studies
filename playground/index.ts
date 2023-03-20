/*
  Return Type Annotations P2

*/

// we have to add return type > so that if we forget return keyword, ts will notify us
function add(a: number, b: number): number {
  a + b
}
add(1, 2)

// hover : string | number > ts is smart
function random(num: number) {
  if (Math.random() < 0.5) {
    return num.toString()
  }

  return num
}
