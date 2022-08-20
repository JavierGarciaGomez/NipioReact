import React, {Component} from "react";
import logo from '../assets/images/logo ni pio  circulo turquesa.png';

class Header extends Component {

    render() {
        return(
            <header>
                <div className="barra">
                    <div className="text-icons">
                        <h5>Logopeda especialista</h5>
                        <a href="mailto:nipiologopedia@gmail.com" target="_blank" rel='noreferrer'><ion-icon name="mail-outline"></ion-icon></a>
                        <a href="https://api.whatsapp.com/send/?phone=351913557223&text=hola+me+gustar%C3%ADa+recibir+infomaci%C3%B3n+de+logopedia+online&app_absent=0
                        " target="_blank" rel='noreferrer'><ion-icon name="logo-whatsapp"></ion-icon></a>
                        <div className="icons-barra">
                        <a href="https://www.instagram.com/nipio_lopogopedia/" target="_blank" rel='noreferrer'><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'><ion-icon name="logo-youtube"></ion-icon></a>
                        <a href="https://www.tiktok.com/" target="_blank" rel='noreferrer'><ion-icon name="logo-tiktok"></ion-icon></a>
                        </div>
                            
                    </div>
                </div>
                <nav className="index"> 
                    <div className="logo">
                        <img className="logo" src={logo} alt="logo" width="100px" height="100px"/>
                    </div>
                    
                    <ul className="nav-links">
                        <li>
                            <a href="home.php">Inicio</a>
                        </li>
                        <li>
                            <a href="quienesSomos.php">Equipo</a>
                        </li>
                        <li>
                            <a href="pack.php">Pack logopedia</a>
                        </li>
                        <li>
                            <a href="consultation.php">Consultas</a>
                        </li>   
                                                
                        <li>
                            <a href="contacto.php">Contacto</a>
                        </li>         
                                    
                        
                    </ul>

                    <div className="menu-burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                        
                </nav>
               

            </header>
       
        );
    }
}

export default Header;