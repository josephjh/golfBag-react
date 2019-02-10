import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Club from './components/Club';
import Pocket from './components/Pocket';

class App extends Component {
  constructor(){
    super()
    this.state= {
      clubs:[],
    }
  }

  componentDidMount(){
    axios.get("http://localhost:4000/api/clubs").then((res) => {
      this.setState({
        clubs:res.data
      })
    })
  }

  handlePost = (e) => {
    e.preventDefault();
    const type = e.target.elements.type.value;
    const brand = e.target.elements.brand.value;
    const model = e.target.elements.model.value;
    axios.post("http://localhost:4000/api/clubs", {type, brand, model}).then((res) =>{
      this.setState({
        clubs:res.data
      })
    })
     e.target.elements.type.value = "";
     e.target.elements.brand.value = "";
     e.target.elements.model.value = "";
  }

  handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/clubs/${id}`).then((res) => {
      this.setState({
        clubs:res.data
      })
    })
  }

  handleUpdate = (e, id) => {
    e.preventDefault();
    const type = e.target.elements.type.value;
    const brand = e.target.elements.brand.value;
    const model = e.target.elements.model.value;
    axios.put(`http://localhost:4000/api/clubs/${id}`, {type, brand, model}).then((res) =>{
      this.setState({
        clubs:res.data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handlePost}>
          <input placeholder="Type" name="type"/>
          <input placeholder= "Brand" name="brand"/>
          <input placeholder="Model" name="model"/>
          <button>Add</button>
        </form>

        {this.state.clubs.map((club) => 
        <Club key={club.id} updater={this.handleUpdate} eraser={this.handleDelete} club={club}/>
        )}
        <Pocket/>
        
      </div>
    );
  }
}



export default App;
