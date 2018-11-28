import React, { Component } from 'react';
import '../css/Box.css';

class Box extends Component{

  constructor(){
    super()
    this.state = {
      class: ""
    }
    this.play = this.play.bind(this)
  }



  play(){
    if (this.props.player !== null){
      switch(this.state.class){
        case this.props.player:
        alert("You already own this box.")
        break
        case "":
        this.addClass()
        this.props.markPlay( this.props.box )
        break
        default:
        alert("Sorry, You can't steal boxes.")
      }
    } else {
      alert("Game has ended.")
    }
  }

  addClass(){
    this.setState({ class: this.props.player });
  }

  render(){
    return(
      <span
        className={this.state.class}
        onClick={this.play}>
          <div className="image"></div>
        </span>
    )
  }

}

export default Box;
