import React, { Component } from 'react'
import Styled from 'styled-components'

const Square = styled.div`
    height: 40vh;
    width:40vw;
    padding: 25px 50px;`


class Square extends Component {
    render () {
        return (
        <div>{this.props.hdurl}</div>
        )
    }
}

export default Square