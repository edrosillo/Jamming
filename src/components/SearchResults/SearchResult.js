import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList track={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
        </div>
    }
}

export default SearchResults;