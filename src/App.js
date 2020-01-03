import React, { Component } from 'react';
import Modal from './Modal';
import './App.css';
import Header from './Header'
import Image from './Image'



class App extends Component {
  constructor(){
    super()
    this.state = {
      // picture: [],
      // explanation: [],
      // title: [],
      picData: [{}]
    }
    // this.selectModal = this.selectModal.bind(this)
  }
  // selectModal = (info = "") => {
  //   this.setState({
  //     modal: !this.state.modal,
  //     modalInfo: info,
  //   })
  // }

  componentDidMount(){
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2014-12-13&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)
      
      
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2002-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)
      
     
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-11-04&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)
     
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)

    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2017-06-10&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)
      
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2016-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)
    
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2007-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)
    
    })
    fetch ('https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2006-07-14&hd=bool')
    .then(res => res.json())
    .then(res => {
      this.setState({picData: [...this.state.picData, {explanation: res.explanation, picture: res.url, title: res.title, date: res.date}]})
      console.log(res)
      console.log(this.state)
    })
  }
  
  render() {
    return (
      <div>
        <Header/>
      
        <Image picData={this.state.picData} selectModal={this.selectModal}/>

          {/* <Modal 
            // displayModal={this.state.modal}
            // modalInfo={this.state.modalInfo}
            // closeModal={this.selectModal}
            // title={this.state.title}
            // explanation={this.state.explanation}
            picData={this.state.picData}/> */}

      </div>
    );
  }
}

export default App;
