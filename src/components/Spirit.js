import React, {Component} from 'react';
import Pictures from './Pictures';

class Spirit extends Component {
    constructor(){
        super();

        this.state = {
            index: null
        }
    }

    handleChange(value){
        this.setState({
            index: value
        })
    }

    
    render(){
        return(
        <div>
            <div className="inputs">
                <input type="radio" name="golfer" onClick={() => this.handleChange(0)}/> John Daly
                <input type="radio" name="golfer" onClick={() => this.handleChange(1)}/> Tiger Woods
                <input type="radio" name="golfer" onClick={() => this.handleChange(2)}/> Fred Couples
                <input type="radio" name="golfer" onClick={() => this.handleChange(3)}/> Bubba Watson
                <input type="radio" name="golfer" onClick={() => this.handleChange(4)}/> Carl Spackler
                <input type="radio" name="golfer" onClick={() => this.handleChange(5)}/> The Devil
                <input type="radio" name="golfer" onClick={() => this.handleChange(6)}/> Happy Gilmore
                <input type="radio" name="golfer" onClick={() => this.handleChange(7)}/> Tin Cup
                <input type="radio" name="golfer" onClick={() => this.handleChange(8)}/> Al Czervik
                <input type="radio" name="golfer" onClick={() => this.handleChange(9)}/> Jack Nicklaus
                <input type="radio" name="golfer" onClick={() => this.handleChange(10)}/> Shooter McGavin
                <input type="radio" name="golfer" onClick={() => this.handleChange(11)}/> Party Bros
                <input type="radio" name="golfer" onClick={() => this.handleChange(12)}/> Charles Barkley

            </div>
            
            <div className="gifs">
                <Pictures index={this.state.index}/>
            </div>
          </div>
        )
    }
}

export default Spirit