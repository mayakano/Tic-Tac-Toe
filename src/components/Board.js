import React, { Component } from 'react';
import Row from './Row';

class Board extends Component{

  drawRows(){
    return (
      Array(this.props.numRows).fill(0).map( (elem, indx) => {
        return <Row
                  key={indx}
                  row={indx}
                  numRows={this.props.numRows}
                  player={this.props.player}
                  markPlay={this.props.markPlay}/>
      })
    )
  }

  render(){
    return(
      <div>
        { this.drawRows() }
      </div>
    )
  }

}

export default Board;
