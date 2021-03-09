import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute,
    SidebarMenu} from './SidebarElements.js';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>A propos</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>Découvrir</SidebarLink>
                    <SidebarLink to='services'onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>S'inscrire</SidebarLink>
                </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute to='/signin'>S'identifier</SidebarRoute>
                    </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
