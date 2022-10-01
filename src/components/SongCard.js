import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    
    handleClick = (event) => {
        if (event.detail === 2) {
            let eIndex = parseInt(this.props.id.substring("playlist-song-".length));
            this.props.editCallback(eIndex);
        }
    }

    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    handleRemoveSong = (event) => {
        event.stopPropagation();
        let rIndex = parseInt(this.props.id.substring("playlist-song-".length));
        this.props.removeCallback(rIndex);
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        console.log("num: " + num);
        let hyperlink = 'https://www.youtube.com/watch?v=' + song.youTubeId
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
             itemClass = "playlister-song-dragged-to";
        }
        return (
            <div
                id={'song-' + num}
                className={'list-card ' + "unselected-list-card"}
                onClick={this.handleClick}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                draggable="true"
            >
                
                {num}.<a href= {hyperlink}>{song.title} by {song.artist}</a>
                 
                <input
                        type="button"
                        className="list-card-button"
                        onClick={this.handleRemoveSong}
                        value={"\u2716"} />
            </div>
        )
    }
}