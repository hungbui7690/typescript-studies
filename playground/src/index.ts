/*
  Truthiness Guards P2

*/

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char)
    }
  } else {
    word // hover
    console.log(`You did not pass in a word !!`)
  }
}
