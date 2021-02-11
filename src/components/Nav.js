import React from 'react';
import styled from 'styled-components';
//router
//Link component
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact Us</Link></li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.div`
    min-height: 5vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding: 3rem;
        position: relative;
    }
`;

export default Nav;