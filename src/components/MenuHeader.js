import '../styles/menu.css'
import logo from '../assets/img/logo-bachibouzouk.png'
import { useEffect, useState } from 'react';


function MenuHeader(){

    const [scrollY, setScrollY] = useState(0);
    const scrollAmountStart = 320

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    return (
        <div className={`navHolder ${scrollY > scrollAmountStart && 'sticky'} ${scrollY >= 1 && scrollY< scrollAmountStart && 'not-sticky'}`}>
            <nav>
                {scrollY > scrollAmountStart && <img src={ logo } alt="logo" className="logo" />}   
                         	
                <label htmlFor="toggle" id="burger-button">☰</label>
                
                <input type="checkbox" id="toggle" />
                
                <div className="main_pages">
                    <a href="#home">Accueil</a>
                    <a href="#about">À propos</a>
                    <a href="#eventsDates">Évenements</a>
                    <a href="#members">Membres</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default MenuHeader