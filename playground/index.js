/*
  Nested Objects
  - pic
  
  > tsc index.ts
  > node index.js
*/
function calculatePayout(song) {
    return 0.0033 * song.numStreams;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
//////////////////////////////////////
var unchained = {
    title: 'Unchained Melody',
    artist: 'Brothers',
    numStreams: 123885483,
    credits: {
        producer: 'Phil Jones',
        writer: 'Phoenix '
    }
};
var earning = calculatePayout(unchained);
console.log(earning);
printSong(unchained);
