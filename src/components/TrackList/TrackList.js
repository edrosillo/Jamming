import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

class Tracklist extends React.Component{
    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    render(){
        <div className="TrackList">
            {this.props.tracks.map(track =>
                <Track track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={true} /> )}
        </div>
    }
}

export default Tracklist;