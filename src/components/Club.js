import React, {Component} from 'react';


class Club extends Component {
    

    render(){
        return (
        <form onSubmit={(e) => this.props.updater(e, this.props.club.id)}>
            <input placeholder="Type" name="type" defaultValue={this.props.club.type}/>
            <input placeholder= "Brand" name="brand" defaultValue={this.props.club.brand}/>
            <input placeholder="Model" name="model" defaultValue={this.props.club.model}/>
            <button type="submit">Update</button>
            <button type="button" onClick={(e) => this.props.eraser(this.props.club.id)}>Delete</button>
        </form>
        )
    }
}

export default Club