/*
  Nested Objects
  - pic
  
  > tsc index.ts
  > node index.js
*/

// assume we work on a project for Spotify
type Song = {
  title: string
  artist: string
  numStreams: number
  credits: {
    producer: string
    writer: string
  }
}

function calculatePayout(song: Song): number {
  return 0.0033 * song.numStreams
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`)
}

//////////////////////////////////////

const unchained = {
  title: 'Unchained Melody',
  artist: 'Brothers',
  numStreams: 123885483,
  credits: {
    producer: 'Phil Jones',
    writer: 'Phoenix ',
  },
}

const earning = calculatePayout(unchained)
console.log(earning)

printSong(unchained)
