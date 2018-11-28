import React, { Component } from 'react';
import WinnerMessage from './WinnerMessage';
import PlayerTurnMessage from './PlayerTurnMessage';
import '../css/ScoreBoard.css'

class ScoreBoard extends Component{

  render(){
    return(
      <div>
        <div className="play">Utlimate Super Awesome Tic Tac Toe now in React!</div>
        {
          this.props.winner == null ? <PlayerTurnMessage/> : <WinnerMessage />

          }
        
        }
      </div>
    )
  }

}

export default ScoreBoard;
