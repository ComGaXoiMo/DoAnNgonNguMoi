import React, { Component } from 'react';
import '../assets/app.css'
import { Link } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (

            <div class="nav-wrapper">

                <div class="container">
                    <div class="nav">
                        <a href="#" class="logo">
                            <i class='bx bx-movie-play bx-tada main-color'></i>Phim<span class="main-color">HUB</span>
                        </a>
                        <ul class="nav-menu" id="nav-menu">
                            <li><a href="#">Home</a></li>

                            <li>
                                

                                    <Link to="/Login" >
                                    <a class="btn btn-hover">
                                    <span>Sign in</span>
                                    </a>
                                    </Link>
                                    
                                
                                
                               
                            </li>
                        </ul>

                        <div class="hamburger-menu" id="hamburger-menu">
                            <div class="hamburger"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
