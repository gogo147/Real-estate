import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MenuData } from '../data/MenuData.js';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const MenuBars = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0; 
        right: 0;
        transform: translate(-50%, 25%);
        color: #fff;
        opacity: 0.9;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
        <MenuBars onClick={toggle}/>
        <NavMenu>
            { MenuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            )) }
        </NavMenu>
        
    </Nav>
  )
}

export default Navbar