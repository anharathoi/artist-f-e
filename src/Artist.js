import React, { Component } from 'react';

class Artist extends Component {
  render() {
    // console.log(this.props.routeoptions.match.params)
    const { name } = this.props.routeoptions.match.params;
    // console.log(name)
    const artist = this.props.artists.find(artist => artist.name === name);
    // console.log(this.props.artists)
    // console.log(artist)
    
    const albums = artist.albums.map(album => album)
    console.log(albums)
    // console.log(albums.map(album => album.tracks.map(track => track.title)))
  
    return (
      
      <div className="Artist">
        <h1>Albums of {artist.name}</h1>
        {albums.map(album => {
           return (
             <div key={album.name}>
              <h4 >{album.name}</h4>
              {album.tracks.map(track => <li key={track.title}>{track.title}</li>)}
            </div>
           )
        })
          }
      </div>
    )
  }
}

export default Artist;
