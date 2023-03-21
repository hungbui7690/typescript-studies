"use strict";
/*
  Writing Generic Classes P2
*/
///////////////////////
// using generic type
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
songs.add({ title: 'Big Big World', artist: 'Gen Z' });
