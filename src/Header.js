import React from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
    background-color: black;
    font-size: 15px;
    color: rgb(226, 220, 132);
    height: 10vh;
    `

function Header (props) {
        return (
            <Nav>
              <h2>NASA API: Astronomy Picture of the Day</h2>
            </Nav>
        );
    }


export default Header;

