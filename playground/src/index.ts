/*
  Writing Generic Classes P2
*/

interface Song {
  title: string
  artist: string
}

interface Video {
  title: string
  creator: string
  resolution: string
}

///////////////////////

// using generic type
class Playlist<T> {
  public queue: T[] = []
  add(el: T) {
    this.queue.push(el)
  }
}

const songs = new Playlist<Song>()
const videos = new Playlist<Video>()
songs.add({ title: 'Big Big World', artist: 'Gen Z' })
