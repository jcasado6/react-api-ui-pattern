import React from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
    background-color: rgb(226, 220, 132);
    font-size: 15px;
    color: black;
    height: 10vh;
    `

function Header () {
        return (
            <Nav>
              <h2>NASA API: Astronomy Picture of the Day</h2>
            </Nav>
        );
    }


export default Header;

