import Locked from '../../images/svg1.svg';
import Dashboard from '../../images/svg2.svg';
import Form from '../../images/svg3.svg';

export const homeObjOne = {
    id : 'about',
    lightBg : false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Service Premium',
    heading: 'Renforcez la résilience de votre entreprise',
    description: " A mesure que votre entreprise se développe vous devez vous doter d'une forte capacité de cyber-résilience pour faire face au menaces. Nous vous proposons de mettre à votre service tous notre savoir et notre expertise.",
    buttonLabel: 'Commencer',
    imgStart: false,
    img : Locked,
    alt: 'locked screen',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id : 'discover',
    lightBg : true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Service Premium',
    heading: 'Nos expertises en cybersécurité',
    description: "Parce que les intrusions peuvent provenir de n’importe où et par n’importe quelle porte dérobée, nous suivons une approche globale d’audit de l’ensemble des accès (réseau, wifi, serveurs) et périphériques",
    buttonLabel: 'Commencer',
    imgStart: true,
    img: Dashboard,
    alt: 'Dashboard',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id : 'signup',
    lightBg : false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Service Premium',
    heading: 'Rejoignez-nous',
    description: "Tout ce que vous avez à faire, c’est d’ajouter vos renseignements et vous êtes prêt à partir.",
    buttonLabel: "S'inscrire",
    imgStart: false,
    img: Form,
    alt: 'locked screen',
    dark: true,
    primary: true,
    darkText: false
}