/*
  Delayed Initialization & Implicit Any P1
  - this is the case we should use type annotation

*/

const movies = ['Arrivals', 'The Thing', 'Aliens']
let foundMovie // declare but not initialize > right now, type === any

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus' // (***)
  }
}

foundMovie() // we can do all of these
foundMovie = 1
