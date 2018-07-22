import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResult';

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

      ]
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
            <!-- Add a Playlist component -->
          </div>
        </div>
      </div>
    );
  }
}

export default App;
