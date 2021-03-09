import React, {useState} from 'react'
import HeaderSection from '../components/HeaderSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
           <HeaderSection/> 
        </>
    )
}

export default Home;
