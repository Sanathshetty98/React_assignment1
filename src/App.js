import React, { Component } from 'react';
import UserInput from './Comp/UserInput';
import UserOutput from './Comp/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username : 
       { name : 'Sanath' }
    
  }
  switchNameHandler = () => {
    this.setState({
      username : 
       { name : 'Dev' }
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      username : 
       { name : event.target.value }
    }
    )
  }

  render() {
    const style = {
    backgroundColor : 'white',
    font : 'inherit',
    border : ' 2px solid #eee',
    padding : '16px'
    }

    return (
      <div className="App">
        
        <UserInput 
        name= {this.state.username.name} 
        click={this.switchNameHandler} 
        changed ={this.nameChangedHandler} />
        <button style={style} onClick = {this.switchNameHandler} > Click Me!</button>
        <UserOutput  name = {this.state.username.name}/>
      </div>
    );
  }
}

export default App;
