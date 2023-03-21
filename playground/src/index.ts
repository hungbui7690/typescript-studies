/*
  Writing Generic Classes P1
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

class VideoPlaylist {
  public videos: string[] = []
}

class SongPlaylist {
  public songs: string[] = []
}
