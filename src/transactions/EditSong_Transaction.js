import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works with edit.
 *  It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Diego Sandoval
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initEdit, initTitle, initArtist, initYTID) {
        super();
        this.app = initApp;
        this.editIndex = initEdit;
        this.oldArtist = this.app.state.currentList.songs[initEdit-1].artist;
        this.oldTitle = this.app.state.currentList.songs[initEdit-1].title;
        this.oldYouTubeId = this.app.state.currentList.songs[initEdit-1].youTubeId;
        this.newArtist = initArtist;
        this.newTitle = initTitle;
        this.newYoutTubeId = initYTID;
    }

    doTransaction() {
        this.app.editSong(this.editIndex,this.newTitle,this.newArtist,this.newYoutTubeId);
    }
    
    undoTransaction() {
        this.app.editSong(this.editIndex,this.oldTitle,this.oldArtist,this.oldYoutTubeId);
    }
}