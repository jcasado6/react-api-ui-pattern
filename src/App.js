import React, { Component } from "react";
import './App.css';
import Modal from './Modal'
import Image1 from './Image1'
// import {Link} from 'react-router-dom'

class App extends Component {
  constructor (){
    super ()
    this.state = {
      // picture: picture,
      // picture2: picture2,
      pictures: [],
      explanations: [],
      // show: false
    }
  }
  // showModal = () => {
  //   this.setState({ show: true });
  // }
  
  // hideModal = () => {
  //   this.setState({ show: false });
  // }

  componentDidMount(){
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-04-07&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      console.log(this.state.picture)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2002-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-11-04&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2017-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2016-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2007-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      // console.log(this.state.picture.hdurl)
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2006-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // this.setState({picture2: res})
      this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
      // console.log(this.state.picture.hdurl)
    })
  }
  
  
  render() {

    const pictures = this.state.pictures.map((picture, i) => (
      <Image1 picture={picture} explanation= {picture.explanation} key={i}/>)
    )
    const explanations = this.state.explanations.map((explanation, i) => {
      return (<div info={explanation.explanation} key={i} />)
    })
    return (
      <div className="App">
        {/* <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>Modal</p>
          <p>Data</p>
        </Modal> */}
        {/* <button type='button' onClick={this.showModal}>Open</button> */}
        <h1>Picture of the day</h1>
        {/* <img src={this.state.pictures[1].hdurl} alt='pic'></img> */}
        {/* <img src={this.state.picture2.hdurl} alt='pic'></img> */}
        {pictures}
        {explanations}
              {/* <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>Modal</p>
          <p></p>
        </Modal>
        <button type='button' onClick={this.showModal}>Open</button> */}
      </div>
    );
  }
}

export default App;
