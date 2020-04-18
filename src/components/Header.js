import React, {Component} from 'react';
import { BrowserRouter, Link} from 'react-router-dom'
import Home from '../home'
import Login from '../login';
export default class Header extends Component {
    render(){
        return(
        <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3">
                            <div className="logo-img">
                                <a href="index.html">
                                    <h1>Medifacil</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9">
                            <div className="menu_wrap d-none d-lg-block">
                                <div className="menu_wrap_inner d-flex align-items-center justify-content-end">
                                    <div className="main-menu">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="index.html">Inicio</a></li>
                                                <li><a href="about.html">Acerca de</a></li>
                                                <li><a href="hola">lol <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">lel</a></li>
                                                        <li><a href="single-blog.html">lel</a></li>
                                                    </ul>
                                                </li>
                                            
                                                <li><a href="contact.html">No se xd</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="book_room">
                                        <div className="book_btn">
                                        <BrowserRouter>
                                            <Link to={'./home'} className="item">Comienza</Link>
                                        </BrowserRouter>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
            )
        }
    }