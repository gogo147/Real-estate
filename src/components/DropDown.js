
import React from 'react';
import styled from 'styled-components';
import { MenuData } from '../data/MenuData';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropDownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: linear-gradient(#e66465, #9198e5);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
  opacity: 0.9;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  dispay: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  padding-bottom: 2rem;
  font-size: 2rem;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
`;

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            {MenuData.map((item, index) => (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            ))}
          </DropdownMenu>
        </DropdownWrapper>
      
    </DropDownContainer>
  )
}

export default DropDown