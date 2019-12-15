import React, { Component } from 'react';
import Modal from './Modal';
import './App.css';
import Header from './Header'



class App extends Component {

  state = {
    modal: false,
    modalInfo: "",
  }

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info,
      picture: [],
      explanation: []
    })
  }

  componentDidMount(){
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2014-12-13&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
     
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2002-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture2: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-11-04&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture3: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture4: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2017-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture5: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2016-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture6: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2007-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture7: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2006-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picture8: res.url})
      // this.setState(prevState => ({ pictures: [...prevState.pictures, res]}))
      // this.setState(prevState => ({ explanations: [...prevState.explanations, res]}))
    })
  }
  
  
  render() {
    return (
      <div>
        <Header/>
      
      <div className="App">
          <p onClick={ () => this.selectModal('Modal A') }>
          <img className= 'picture' src={this.state.picture} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal B') }>
          <img className= 'picture' src={this.state.picture2} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal C') }>
          <img className= 'picture' src={this.state.picture3} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal D') }>
          <img className= 'picture' src={this.state.picture4} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal E') }>
          <img className= 'picture' src={this.state.picture5} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal F') }>
          <img className= 'picture' src={this.state.picture6} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal G') }>
          <img className= 'picture' src={this.state.picture7} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal H') }>
          <img className= 'picture' src={this.state.picture8} alt='pic'></img>
          </p>

          {/* <p onClick={ () => this.selectModal('Modal I') }>
          <img className= 'picture' src={this.state.picture5} alt='pic'></img>
          </p>

          <p onClick={ () => this.selectModal('Modal J') }>
          <img className= 'picture' src={this.state.picture5} alt='pic'></img>
          </p> */}

          <Modal 
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}/>
      </div>
      </div>
    );
  }
}

export default App;
