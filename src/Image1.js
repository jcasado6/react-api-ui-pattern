import React, { Component } from 'react';
import Modal from './Modal'
// import { Route, Link, Switch } from 'react-router-dom'


class Image1 extends Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      render() {
        return (
          <div className="App">
            <button
              class="toggle-button"
              id="centered-toggle-button"
              onClick={e => {
                this.showModal(e);
              }}
            >
              {" "}
              show Modal{" "}
            </button>
            <img src={this.props.picture.url} alt='pic'></img>
                
            <Modal onClose={this.showModal} show={this.state.show}explanation={this.props.explanation} picture={this.props.picture.url}>
              
            </Modal>
          </div>
        );
      }
    }


export default Image1