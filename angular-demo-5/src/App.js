import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    userName: ''
  }

  inputChangeHandler = (event)=>{
    this.setState({userName: event.target.value})
  }

  deleteCharHandler = (index)=>{
    const text = this.state.userName.split('')
    text.splice(index,1)
    const updatedText = text.join('');
    this.setState({userName: updatedText})
  }

  render(){
    const char = this.state.userName.split('').map((ch,index)=>{
      return <Char clicked = {()=>this.deleteCharHandler(index)} character = {ch} key = {index}/>
    })
  return (
    <div className="App">
      <h1>Angular-Demo-5</h1>
      <input type = 'text' onChange = {this.inputChangeHandler} value = {this.state.userName}/>
      <p>{this.state.userName}</p>
      <Validation inputLength = {this.state.userName.length}/>
      {char}
    </div>
  );
  }
}

export default App;
