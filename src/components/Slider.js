import React, {Component} from "react";

class Slider extends Component{

    render() {
        return (
            <section className="body-menu">
                <div className="banner">
                    <div className="teraphy">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.subtitle}</h2>
                    </div>
                    
                </div>  
            </section>
        )
    }
}

export default Slider;

