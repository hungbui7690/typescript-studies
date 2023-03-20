/*
  Delayed Initialization & Implicit Any P2

*/

const movies = ['Arrivals', 'The Thing', 'Aliens']
let foundMovie: string // set type to string

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus'
  }
}

foundMovie() // complain if we don't anything crazy or nonsense
foundMovie = 1
