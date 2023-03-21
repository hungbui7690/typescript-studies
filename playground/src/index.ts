/*
  Narrowing With The In Operator P2

*/

interface Movie {
  title: string
  duration: number
}

interface TVShow {
  title: string
  numEpisodes: number
  episodeDuration: number
}

// hover media in each condition
function getRuntime(media: Movie | TVShow) {
  if ('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration
  }

  return media.duration
}

const runtime1 = getRuntime({ title: 'Amadeus', duration: 140 })
const runtime2 = getRuntime({
  title: 'White Collar',
  numEpisodes: 33,
  episodeDuration: 45,
})

console.log(runtime1, runtime2)
