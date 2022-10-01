import React, { Component } from 'react';

export default class EditSongModal extends Component {
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
        console.log(event.target.value);
    }
    render() {
        const { songInfo, editSongCallback, hideEditSongModalCallback } = this.props;
        let song = ["","","",""];
        if (songInfo) {
            song = songInfo.split("_");
        }
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Title:
                                <input
                                    id={"title-box"}
                                    className='list-card'
                                    type='text'
                                    onChange={this.handleUpdate}
                                    defaultValue={song[0]}/>
                                Artist:
                                <input
                                    id={"artist-box"}
                                    className='list-card'
                                    type='text'
                                    onChange={this.handleUpdate}
                                    defaultValue={song[1]}/>
                                You Tube Id:
                                <input
                                    id={"youtube-id-box"}
                                    className='list-card'
                                    type='text'
                                    onChange={this.handleUpdate}
                                    defaultValue={song[2]}/>
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}