/*
  Instanceof Narrowing P1
  - pic
  - work for classes

  > [1, 2] instanceof Array
  > new Date() instanceof Date

*/

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString())
  }

  console.log(new Date(date).toUTCString())
}
