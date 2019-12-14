import React, { Component } from 'react';
import Modal from './Modal'



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
              onclick={e => {
                e.stopPropagation()
              }}
              class="toggle-button"
              id="centered-toggle-button"
              onClick={e => {
                this.showModal(e);
              }}
              
            >
              {" "}
              show Modal{" "}
              
            </button>
            <img className='pictures'src={this.props.picture.url} alt='pic'></img>
                
            <Modal 
            onClose={this.showModal} 
            show={this.state.show} 
            explanation={this.props.explanation} 
            picture={this.props.picture.url}>
            </Modal>
          </div>
        );
      }
    }


export default Image1