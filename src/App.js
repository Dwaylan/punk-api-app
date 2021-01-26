import React, { Component } from "react";
import Beer from "./components/Beer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
    };
  }
  componentDidMount() {
    console.log("mounted");
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ beers: data });
      });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {" "}
          {this.state.beers &&
            this.state.beers.map((beer) => {
              return (
                <Beer
                  name={beer.name}
                  image={beer.image_url}
                  tagline={beer.tagline}
                  tips={beer.brewers_tips}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
