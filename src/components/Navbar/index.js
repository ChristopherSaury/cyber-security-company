import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavbarElements.js';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to=''>Security</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>A propos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Découvrir</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>S'inscrire</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/signin'>S'identifier</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;