import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props){
        super(props);

        this.removeTrack = this.removeTrack.bind(this);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction (){
        if(isRemoval === true){
            return <a>-</a>;
        } else {
            return <a onClick={this.addTrack}>+</a>;
        }
    }
    render(){
        <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            <a className="Track-action"><!-- + or - will go here --></a>
        </div>
    }
}

export default Track;