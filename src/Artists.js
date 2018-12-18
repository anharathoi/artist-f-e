import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Artists extends Component {
  render() {
    console.log(this)
    return (
      
      <div className="Artists">
      <h1>Artists</h1>
        {
          this.props.artists.map(artist => {
            const path = `/${artist.name}`
            return (
              <div key={artist.name}>
                <Link to={path}><h4>{artist.name}</h4></Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Artists;
