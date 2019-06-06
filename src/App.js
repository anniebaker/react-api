import React, { Component } from "react";
import Beer from "./beer";
import "./App.css";
require("es6-promise").polyfill();
require("isomorphic-fetch");

class App extends Component {
  state = {
    beers: [],
    likedBeers: []
  };
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(beers => this.setState({ beers: beers }));
  }
  likeBeer = id => {
    const likedBeer = this.state.beers.find(beer => beer.id === id);
    console.log(likedBeer);
    const newBeers = [...this.state.likedBeers, likedBeer];
    this.setState({ likedBeers: newBeers });
    console.log(newBeers);
  };
  render() {
    return (
      <div className="App">
        <h1>Favorite Beers</h1>
        {this.state.likedBeers.map((beer, index) => (
          <Beer
            name={beer.name}
            img={beer.image_url}
            like={this.likeBeer}
            id={beer.id}
          />
        ))}
        <h1>All Beers</h1>
        {this.state.beers.map((beer, index) => (
          <Beer
            name={beer.name}
            img={beer.image_url}
            like={this.likeBeer}
            id={beer.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
