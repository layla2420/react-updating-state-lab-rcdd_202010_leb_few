// Code DigitalClicker Component Here
import React from 'react'

 class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state={
      timeClicked:0,
    }

function handleincrement(){
this.setState(prev=>({timeClicked:prev.timeClicked+1}))
}

  }
  render(){(
  <button onClick={this.handleincrement}>{this.state.timeClicked}</button>
  )
}}
export default DigitalClicker;
