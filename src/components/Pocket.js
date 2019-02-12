import React, {Component} from 'react';

class Pocket extends Component {
    constructor(){
        super();

        this.state = {
            ball: 0
        }
    }

    addBall = () => {
        this.setState({
           ball: this.state.ball += 1
        })
    }

    lostBall = () => {
        this.setState({
            ball: this.state.ball -= 1
        })
    }

    render(){
        return(
        <div>
            <p>{this.state.ball}</p>
            <button onClick={this.addBall}>Add Ball</button>
            <button onClick={this.lostBall}>Foreeeeeee</button>
        </div>
        )
    }

}

export default Pocket