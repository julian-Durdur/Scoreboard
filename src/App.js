import React, { Component } from 'react';
import './App.css';
import Input from "./Input";
import Scoreboard from "./Scoreboard";

class App extends Component {
  state = {
    dataInput: "",
    tableauJoueur: []
  }

  getDataFromInput = (event) => {
    this.setState({
      dataInput: event.target.value
    })
  }
  
  btnClick = () => {
    this.setState({
      tableauJoueur: [...this.state.tableauJoueur, this.state.dataInput]
    }, () => {
      console.log(this.state.tableauJoueur)
    })
  }


  render() {
    return (
      <div className="App">
        <Input btn={this.btnClick} input={this.getDataFromInput}/>
        <Scoreboard tableauJoueur={this.state.tableauJoueur}/>
      </div>
    );
  }
}

export default App;
