import React from 'react';
import Tracklist from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props){
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    render() {
        return(
        <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
                <Tracklist track={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} />
            <a className="Playlist-save" onclick={this.props.onSave}>SAVE TO SPOTIFY</a>
        </div>
        );
    }
}

export default Playlist;