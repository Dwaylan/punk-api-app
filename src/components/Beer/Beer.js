import React, { Component } from "react";
import "./Beer.css";

class Beer extends Component {
  constructor(props) {
    super(props);

    // The toggle component renders a button that lets the user
    // toggle between ON and OFF states. The initial state
    // of the button is true, and since it is true it will be black

    this.state = { toggleOn: true };
    this.state = { black: true };
    // this.buttonColor = this.buttonColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // handleClick sets a new state by acessing the toggle. The function
  // says "if the toggle is on on, set the new state to the toggle is NOT on"
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    this.setState({ black: !this.state.black });
    console.log(this.state);
  }

  render() {
    let like_button = this.state.black ? "button1" : "button2";
    return (
      <div>
        <h1 className="beer_name">{this.props.name}</h1>
        <img src={this.props.image} alt="beer images"></img>
        <br />
        <span className="beer_tagline">{this.props.tagline}</span>
        <p className="beer_description">{this.props.tips}</p>
        <button className={like_button} onClick={this.handleClick}>
          me likey
        </button>
      </div>
    );
  }
}

export default Beer;
