import React, { Component } from 'react';
import '../css/Game.css';
import WINNERS from '../data/winner.js';

import Board from './Board';
import ScoreBoard from './ScoreBoard';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Game extends Component {
  constructor(){
    super()
    this.state = {
      numRows: 3,
      player: "Cross",

      playerCross: [],
      playerCircle: [],
      winner: null
    }
    this.markPlay = this.markPlay.bind(this)
    // Your code here
  }

  render() {
    return (
      <div>
        <div className="score-board">
          <ScoreBoard
            winner={this.state.winner}
            player={this.state.player}/>
        </div>
        <div className="board">
          <Board
              player={this.state.player}
              numRows={this.state.numRows}
              markPlay={this.markPlay} />
        </div>
        <div
          className="play-again"
          hidden={ this.state.winner ? false : true }>

          <div className="play" onClick={this.playAgain}>Play again</div>
        </div>
      </div>
    );
  }

  checkWinner(){
    let currPlayer = this.state.player
    let moves = this.state[`player${currPlayer}`].sort().join("")
    if ( WINNERS.includes(moves) ){
      console.log(`${currPlayer} wins!`);
      this.setState(  {
                        winner: currPlayer,
                        player: null
                      })
    } else {
      var playerNew = {
        "Cross": "Circle", 
        "Circle": "Cross" 
      }
      this.setState({player: playerNew[this.state.player] })

    }
  }


  markPlay(box){
    let currPlayer = this.state.player
    this.setState( {
      [`player${currPlayer}`]: [
                                  ...this.state[`player${currPlayer}`],
                                  box
                                ].sort()
    }, this.checkWinner )
  }

  playAgain(){
    window.location.reload()
  }

}

export default Game;
