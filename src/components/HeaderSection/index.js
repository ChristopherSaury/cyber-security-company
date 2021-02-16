import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements.js';

import {
    HeaderContainer,
    HeaderBg,
    VideoBg,
    HeaderContent,
    HeaderH1,
    HeaderP,
    HeaderBtnWrapper,
    ArrowForward,
    ArrowRight } from './HeaderElements';

const HeaderSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeaderContainer>
            <HeaderBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeaderBg>
            <HeaderContent>
                <HeaderH1>Pour une sécurité à toute épreuve</HeaderH1>
                <HeaderP>Offre spéciale: 20% de réduction pour la création d'un compte</HeaderP>
            <HeaderBtnWrapper>
                <Button to='signup'
                 onMouseEnter={onHover}
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'>Commencer {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
            </HeaderBtnWrapper>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default HeaderSection;
