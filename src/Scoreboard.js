import React from "react";
import Player from "./Player";

class Scoreboard extends React.Component {
    state = {
        scoreGlobal : 0
    }

    incrementScore = () => {
        this.setState({
            scoreGlobal : this.state.scoreGlobal +1
        })
    }

    decrementScore = () => {
        this.setState({
            scoreGlobal : this.state.scoreGlobal -1
        })
    }

    render(){
        return (
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Player</th>
      <th scope="col">Score</th>
      <th scope="col">Modifier</th>
    </tr>
  </thead>
  <tbody>
    {this.props.tableauJoueur.map((element, index) => {
        return <Player key={index} ordre={index} nom={element} increment={this.incrementScore} decrement={this.decrementScore} />
    })}
    <tr>
      <th scope="col">TotalScore</th>
      <th scope="col"></th>
      <th scope="col">{this.state.scoreGlobal}</th>
      <th scope="col"></th>
    </tr>
    
  </tbody>
</table>
        )
    }
}

export default Scoreboard;