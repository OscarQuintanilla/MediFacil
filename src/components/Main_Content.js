import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return(
        <div>
            <div className="slider_area">
            <div className="slider_active owl-carousel">
                <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slider_text ">
                                    <span>La mejor forma de telemedicina</span>
                                    <h3> <span>Empieza a vivir con nostros</span><br></br> 
                                        la experiencia completa de la telemedicina</h3>
                                    <a href="hola" className="boxed-btn5">Empieza ahora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="expert_doctors_area">
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-lg-6">
                        <div className="section_title mb-55 text-center">
                            <h3>¿Eres un medico?</h3>
                            <p>Empieza ahora trabajar en remoto</p>
                            <div className="book_btn">
                                                <a className="btn btn-warnning" href="">Empieza ahora</a>
                                            </div>
                        </div>
                    </div>
                </div>
                
                    
                </div>
            </div>
            <div className="Emergency_contact">
            <div className="Emergency_contact_inner ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="single_emergency">
                                <div className="info">
                                    <span>Hey Dr!</span>
                                    <h3>Empeza a trabajar con nostros</h3>
                                </div>
                                <div className="info_button">
                                    <a href="hola" className="boxed-btn3-white">Empezar ahora
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single_emergency align-items-center d-flex justify-content-end">
                                
                                <div className="info">
                                    <h3>Grupo 198 - Edexor :)</h3>
                                    <span>www.resolvamospues.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
}
}