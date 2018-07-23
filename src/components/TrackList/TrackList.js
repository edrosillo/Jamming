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
            <Track track={track} onAdd={this.props.onAdd} /> )}
            <!-- You will add a map method that renders a set of Track components  -->
        </div>
    }
}

export default Tracklist;