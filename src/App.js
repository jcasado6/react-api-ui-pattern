import React, { Component } from "react";
import './App.css';
import Modal from './Modal'

class App extends Component {
  constructor (){
    super ()
    this.state = {
      picture: []
    }
  }
  componentDidMount(){
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({picture: res})
      console.log(this.state.picture.hdurl)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Picture of the day</h1>
        <Modal />
        <img src={this.state.picture.hdurl} alt='pic'>  
        </img>
      </div>
    );
  }
}

export default App;
