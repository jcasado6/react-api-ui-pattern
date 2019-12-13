import React, { Component } from "react";
import './App.css';
// import Modal from './Modal'

class App extends Component {
  constructor (){
    super ()
    this.state = {
      picture: [],
      picture2: []
    }
  }
  componentDidMount(){
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-04-07&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({picture: res})
      console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=1995-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({picture2: res})
      console.log(this.state.picture.hdurl)
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Picture of the day</h1>
        {/* <Modal /> */}
        <img src={this.state.picture.hdurl} alt='pic'></img>
        <img src={this.state.picture2.hdurl} alt='pic'></img>
      </div>
    );
  }
}

export default App;
