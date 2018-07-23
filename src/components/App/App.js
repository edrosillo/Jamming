import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResult';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults:[
        {
          name: 'Closer',
          artist: 'Nine Inch Nails',
          album:'The Downward Spiral',
          id:'1'
        },

        {
          name: 'Perfect Drug',
          artist: 'Nine Inch Nails',
          album: 'Lost Highway',
          id: '2'
        },

        {
          name: 'The Wretched',
          artist: 'Nine Inch Nails',
          album: 'The Fragile',
          id: '2'
        }
      ],
      playlistName: 'New PLaylist',
      playlistTracks: [
        {
          name: '',
          artist: '',
          album: '',
          id: ''
        },

        {
          name: '',
          artist: '',
          album: '',
          id: ''
        },

        {
          name: '',
          artist: '',
          album: '',
          id: ''
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack =>
     savedTrack.id === track.id)) {
       return;
     }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <!-- Add a SearchBar component -->
           <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
