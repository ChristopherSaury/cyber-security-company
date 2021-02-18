import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRight,
    SocialIcons,
    SocialIconLink
} from './FooterElements.js';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>A propos</FooterLinkTitle>
                                <FooterLink to='/signin'>A propos</FooterLink>
                                <FooterLink to='/signin'>Témoignage</FooterLink>
                                <FooterLink to='/signin'>Carrière</FooterLink>
                                <FooterLink to='/signin'>Investir</FooterLink>
                                <FooterLink to='/signin'>Comment ça marche ?</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>FAQ</FooterLink>
                                <FooterLink to='/signin'>Partenaires</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Réseaux Sociaux</FooterLinkTitle>
                                <FooterLink to='/signin'>Linkedin</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                                <FooterLink to='/signin'>Youtube</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Support</FooterLinkTitle>
                                <FooterLink to='/signin'>Service Consommateur</FooterLink>
                                <FooterLink to='/signin'>Support Technique</FooterLink>
                                <FooterLink to='/signin'>Formation</FooterLink>
                                <FooterLink to='/signin'>Garantie</FooterLink>
                                <FooterLink to='/signin'>termes et conditions</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>
                            Diamond Shield
                        </SocialLogo>
                        <WebsiteRight>
                            Diamond Shield © {new Date().getUTCFullYear()} tout droits réservé
                        </WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href='/' target='/_blank' aria-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='/_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='/_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='/_blank' aria-label='Linkedin'>
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
