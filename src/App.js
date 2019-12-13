import React, { Component } from "react";
import './App.css';
import Modal from './Modal'

class App extends Component {
  constructor (){
    super ()
    this.state = {
      // picture: picture,
      // picture2: picture2,
      pictures: []
    }
  }
  componentDidMount(){
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-04-07&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2002-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-11-04&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2017-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2016-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2007-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2006-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // console.log(this.state.picture.hdurl)
    })
  }
  
  
  render() {

    const pictures = this.state.pictures.map((picture, i) => {
      return (<img src={picture.url} alt="whatever" key={i} />)
    })
    return (
      <div className="App">
        <h1>Picture of the day</h1>
        {/* <Modal /> */}
        {/* <img src={this.state.pictures[1].hdurl} alt='pic'></img> */}
        {/* <img src={this.state.picture2.hdurl} alt='pic'></img> */}
        {pictures}
      </div>
    );
  }
}

export default App;
