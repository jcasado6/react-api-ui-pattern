import React from 'react'
import Styled from 'styled-components'

// const Square = styled.div`
//     height: 40vh;
//     width:40vw;
//     padding: 25px 50px;`


const Modal = props => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close'>X</span>
            </div>
        </div>
    )
}

export default Modal

