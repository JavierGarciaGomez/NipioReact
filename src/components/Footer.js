import React from "react";
import logo from '../assets/images/logofooter.png'
import { IonIcon } from "react-ion-icon";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="box-footer">
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="terms">
                        <p></p>
                    </div>
                </div>
                <div className="box-footer ">
                    <NavLink to="/">Aviso Legal</NavLink>
                    <a href="/">Política de privacidad</a>
                    <a href="/">Política legal</a>
                </div>
                <div className="box-footer-icons">
                    <div className="contact-footer">
                        <h2>Contacto</h2>
                    </div>
                    <div className="icons-footer">
                        <a href="https://www.instagram.com/nipio_lopogopedia/" target="_blank" rel='noreferrer'><IonIcon name="logo-instagram"/></a>
                        <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'><IonIcon name="logo-youtube"/></a>
                        <a href="https://www.tiktok.com/" target="_blank" rel='noreferrer'><IonIcon name="logo-tiktok"/></a>
                        <a href="mailto:nipiologopedia@gmail.com" target="_blank" rel='noreferrer'><IonIcon name="mail-outline"/></a>
                        <a href="https://api.whatsapp.com/send/?phone=351913557223&text=hola+me+gustar%C3%ADa+recibir+infomaci%C3%B3n+de+logopedia+online&app_absent=0
                        " target="_blank" rel='noreferrer'><IonIcon name="logo-whatsapp"/></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyrigth 2022©Ni Pio_Logopedia</p>
            </div>
        </footer>
    )
}

export default Footer;