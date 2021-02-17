import React from 'react';
import Icon1 from '../../images/svg4.svg';
import Icon2 from '../../images/svg6.svg';
import Icon3 from '../../images/svg5.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements.js';

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Nos Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Formation cyber défense</ServicesH2>
                    <ServicesP>Exercices d'entraînement avec équipe d'attaquant et de défenseur. Introduction aux bonnes pratiques.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Protection de données</ServicesH2>
                    <ServicesP>Nos solutions de protection des données fournissent des mesures de protection équilibrées.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Conseil et suivi</ServicesH2>
                    <ServicesP>Nous aidons les clients à comprendre leur environnement actuel, leurs menaces stratégiques.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
