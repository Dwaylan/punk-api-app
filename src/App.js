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

  // Promise chain: If the component mounts console log "mounted" and then fetch
  // data from the API in json
  componentDidMount() {
    console.log("mounted");
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ beers: data });
      });
  }
  // Rendering a list, mapping through the beer API and returning names, images
  // etc of beers. <Beer/> will render the bill component within the DOM.
  render() {
    return (
      <div className="App">
        <ul className="list">
          {" "}
          {this.state.beers &&
            this.state.beers.map((beer) => {
              return (
                <Beer
                  name={beer.name}
                  tagline={beer.tagline}
                  image={beer.image_url}
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
