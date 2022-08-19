import React, {Component} from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Error from "./components/Error";
import Slider from './components/Slider';
import Body from './components/Body';
import Footer from './components/Footer'; 
import Equipo from "./components/Equipo";
import NavBar from "./components/NavBar";

class Router extends Component {
    render(){
        return(
           
            <BrowserRouter>
            <NavBar/>
               
                <section>
                        <Slider
                        title="NI PÍO_LOGOPEDIA"
                        subtitle="ESPECIALISTAS EN LA COMUNICACIÓN"
                        />
                </section>

             {/*Configurar rutas y páginas*/}
                <Routes>
                    <Route path="/home" component={<Body/>}/>
                    <Route path="/equipo" component={<Equipo/>}/>
                    <Route component={Error}/>
                </Routes>
                <section>
                    <Body/>
                    <Equipo/>
                </section>

                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;