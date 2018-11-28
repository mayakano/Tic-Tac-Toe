import React, { Component } from 'react';
import '../css/Row.css'
import Box from './Box';

class Row extends Component{

  drawBoxes(){
    return(
      Array(this.props.numRows).fill(this.props.row).map( (item, indx) => {
        return <Box
                  key={indx}
                  box={(item * this.props.numRows) + indx}
                  player={this.props.player}
                  markPlay={this.props.markPlay} />
      })
    )
  }

  render(){
    return(
      <div className="row">
        { this.drawBoxes() }
      </div>
    )
  }

}

export default Row;
