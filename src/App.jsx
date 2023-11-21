import React from 'react'
import './App.css'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  Increase = () =>{
    this.setState({count : this.state.count+1})
  }

  Decrease = () =>{
    if(this.state.count>0){
    this.setState({count : this.state.count-1})
    }
  }

  Reset = () =>{
    this.setState({count : 0})
  }
    render(){
      return( 
        <>
        <div className='body'>
        <h1>Counter App</h1>
        <div className='count'>{this.state.count}</div>
        <button onClick={this.Increase}>+</button>
        <button onClick={this.Decrease}>-</button>
        <button on onClick={this.Reset}>Reset</button>
        </div>
        </>
      )
    }
  
}

export default App