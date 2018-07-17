import React from "react";

class Player extends React.Component {
    state= {
        score : 0
    }

    incrementScore = () => {
        this.setState({
            score : this.state.score +1
        })
        this.props.increment();
    }

    decrementScore = () => {
        this.setState({
            score : this.state.score -1
        })
        this.props.decrement();
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.ordre +1}</th>
                <td>{this.props.nom}</td>
                <td>{this.state.score}</td>
                <td>
                    <button onClick={this.incrementScore} class="btn btn-primary">+</button>
                    &nbsp;
                    <button onClick={this.decrementScore} class="btn btn-danger">-</button>
                </td>
            </tr>
        )
    }
}

export default Player;