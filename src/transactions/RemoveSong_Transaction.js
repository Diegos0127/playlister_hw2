import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * RemoveSong_Transaction
 * 
 * This class represents a transaction that works with remove.
 *  It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Diego Sandoval
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initRemove) {
        super();
        this.app = initApp;
        this.removeIndex = initRemove;
        this.artist = this.app.state.currentList.songs[initRemove-1].artist;
        this.title = this.app.state.currentList.songs[initRemove-1].title;
        this.youTubeId = this.app.state.currentList.songs[initRemove-1].youTubeId;
    }

    doTransaction() {
        this.app.removeSong(this.removeIndex);
    }
    
    undoTransaction() {
        this.app.addSong();
        this.app.moveSong(this.app.state.currentList.songs.length,this.removeIndex);
    }
}