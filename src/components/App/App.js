import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';

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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack =>
     savedTrack.id === track.id)) {
       return;
     }
  }

  removeTrack(track){
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState(
        {
          playlistName: 'New Playlist',
          playlistTracks: []
        })
    })
  }

  search(searchTerm){
    Spotify.search(searchTerm).then(tracks => {
      this.setState({
        searchResults: tracks
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar  onSearch={this.search} />
           <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
