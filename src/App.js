import React, { Component } from "react";
import Modal from "./Modal";
import "./App.css";
import Header from "./Header";
import nasa from "./Backround.jpg";

class App extends Component {
  state = {
    modal: false,
    modalInfo: "",
    picture: [],
    explanation: []
  };

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
    });
  };

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2014-12-13&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture: res.url });
        this.setState({ explanation: res.explanation });
      });
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2002-07-14&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture2: res.url });
      });
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-11-04&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture3: res.url });
      });
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2019-06-10&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture4: res.url });
      });
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2017-06-10&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture5: res.url });
      });
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2016-07-14&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture6: res.url });
      });
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2007-07-14&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture7: res.url });
      });
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ArL5YQaUhO73pDtc8SF1f4ZVgMUd2nlvRaOitLHQ&date=2006-07-14&hd=bool"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ picture8: res.url });
      });
  }

  render() {
    return (
      <div>
        <Header />

        <div className="App" styles={{ backgroundImage: "url(${nasa})" }}>
          <p onClick={() => this.selectModal("Modal A")}>
            <img className="picture" src={this.state.picture} alt="pic"></img>
          </p>

          <p onClick={() => this.selectModal("Modal B")}>
            <img className="picture" src={this.state.picture2} alt="pic"></img>
          </p>

          <p onClick={() => this.selectModal("Modal C")}>
            <img className="picture" src={this.state.picture3} alt="pic"></img>
          </p>

          <p onClick={() => this.selectModal("Modal D")}>
            <img className="picture" src={this.state.picture4} alt="pic"></img>
          </p>

          <p onClick={() => this.selectModal("Modal E")}>
            <img className="picture" src={this.state.picture5} alt="pic"></img>
          </p>

          <p onClick={() => this.selectModal("Modal F")}>
            <img className="picture" src={this.state.picture6} alt="pic"></img>
          </p>

          <p onClick={() => this.selectModal("Modal G")}>
            <img className="picture" src={this.state.picture7} alt="pic"></img>
          </p>

          <p onClick={() => this.selectModal("Modal H")}>
            <img className="picture" src={this.state.picture8} alt="pic"></img>
          </p>

          <Modal
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}
            title={this.state.title}
            explanation={this.state.explanation}
            picture={this.state.picture}/>
        </div>
      </div>
    );
  }
}

export default App;


