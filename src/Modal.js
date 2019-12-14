import React from 'react';

const Modal = props => {
  
  function displayInfo () {
    switch(props.modalInfo) {
      case 'Modal A':
        return <div className="modal-info">This is Modal A</div>
      case 'Modal B':
        return <div className="modal-info">This is Modal B</div>
      case 'Modal C':
        return <div className="modal-info">This is Modal C</div>
      case 'Modal D':
        return <div className="modal-info">This is Modal D</div>
      case 'Modal E':
        return <div className="modal-info">This is Modal E</div>
      case 'Modal F':
        return <div className="modal-info">This is Modal E</div>
      case 'Modal G':
        return <div className="modal-info">This is Modal E</div>
      case 'Modal H':
        return <div className="modal-info">This is Modal E</div>
      default:
        return null
    }
  }

  function closeModal(e) {
    e.stopPropagation()
    props.closeModal()
  }
  
  const divStyle = {
    display: props.displayModal ? 'block' : 'none',
  };

    return (
      <div 
        className="modal"
        onClick={ closeModal }
        style={divStyle}>

        <div className="modal-content"
          onClick={ e => e.stopPropagation() }>
          
          <span 
            className="close"
            onClick={ closeModal }>&times;
          </span>

          <div className="modal-flex">
            {displayInfo()}
          </div>

        </div>

      </div>
    );
}

export default Modal;