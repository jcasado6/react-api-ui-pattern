import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    height: 40vh;
    width:40vw;
    padding: 25px 50px;`


const Modal = props => {

    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    }

    function exitModal(evt){
        evt.stopPropagation()
        props.exitModal
    }

    return (
        <div className='modal'
            onClick={ exitModal }
            style= { divStyle }>

            <div className='modal-content'
                onClick={ evt => evt.stopPropagation() }>

                <span className='close'>X
                onClick={ exitModal }
                </span>
            </div>
        </div>
    )
}

export default Modal

