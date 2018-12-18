import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Artists from './Artists.js'
import Artist from './Artist.js'
import './App.css';

class App extends Component {
  
  state = {
    "artists": [
      {
        "name": "The Beatles",
        "albums": [
          {
            "name": "Help",
            "year": 1965,
            "tracks": [
              {
                "title": "Help!",
                "length": "2:18"
              },
              {
                "title": "The Night Before",
                "length": "2:36"
              },
              {
                "title": "You've Got to Hide Your Love Away",
                "length": "2:09"
              }
            ]
          },
           {
            "name": "Revolver",
            "year": 1966,
            "tracks": [
              {
                "title": "Taxman!",
                "length": "2:36"
              },
              {
               "title": "Eleanor Rigby",
                "length": "2:11"
              },
              {
                "title": "I'm Only Sleeping",
                "length": "2:58"
              }
            ]
          },
           {
            "name": "Abbey Road",
            "year": 1969,
            "tracks": [
              {
                "title": "Come Together",
                "length": "4:19"
              },
              {
               "title": "Something",
                "length": "3:02"
              },
              {
                "title": "Maxwell's Silver Hammer",
                "length": "3:27"
              },
              {
                "title": "Oh! Darling",
                "length": "3:27"
              }
            ]
          }
        ]
      },
      {
        "name": "ACDC",
        "albums": [
          {
            "name": "Highway to Hell",
            "year": 1979,
            "tracks": [
              {
                "title": "Highway to Hell",
                "length": "3:29"
              },
              {
                "title": "Girls Got Rhythm",
                "length": "3:24"
              },
              {
                "title": "Walk All Over You",
                "length": "5:10"
              }
            ]
          },
          {
            "name": "Back in Black",
            "year": 1980,
            "tracks": [
              {
                "title": "Hells Bells",
                "length": "5:10"
              },
              {
               "title": "Shoot to Thrill",
                "length": "5:17"
              }
            ]
          }
        ]
      }
    ]
  }
  render() {
    // console.log(this)
    return (
      // <div className="App">
      //   <Artists artists={this.state.artists}/>
      // </div>
      <div>
        <BrowserRouter>
          <div>
            <Route
              path="/"
              exact
              render={
                (routeProps) => (
                  <Artists artists={this.state.artists} routeoptions={routeProps}/>
                )
              }
            />
            <Route
              path={`/:name`}
              exact
              render={
                (routeProps) => (
                  <Artist artists={this.state.artists}  routeoptions={routeProps}/>
                )
              }
            />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
