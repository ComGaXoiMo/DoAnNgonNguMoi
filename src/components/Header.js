import React, { Component } from 'react';
import '../assets/app.css'

import { Link } from "react-router-dom";
export default function Header ({userID, isLogin}) {
    const  Signout=()=>{
            localStorage.removeItem("idLg");
            localStorage.setItem("isLg",false)
            window.location.href="/";
    }
    if(userID){
        return (
            <form>

            <div class="nav-wrapper">
                <div class="container">
                    <div class="nav">
                        <Link to="/" >
                            <a class="logo">
                                <i class='bx bx-movie-play bx-tada main-color'></i>Phim<span class="main-color">HUB</span>
                            </a>
                        </Link>
                        <ul class="nav-menu" id="nav-menu">
                            <li>
                                <Link to="/" >
                                    <a  class="btn ">
                                        <span class="white">Home</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                
                                    <a  class="btn ">
                                        <span class="white">chào {userID}</span>
                                    </a>
                                
                            </li>
                            <li>
                            
                                    <a onClick={Signout} class="btn ">
                                        <span class="white">Sign Out</span>
                                    </a>
                                    
                            </li>
                        </ul>
                        <div class="hamburger-menu" id="hamburger-menu">
                            <div class="hamburger"></div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        )
    }
    else{
        return (
            <div class="nav-wrapper">
                <div class="container">
                    <div class="nav">
                        <Link to="/" >
                            <a class="logo">
                                <i class='bx bx-movie-play bx-tada main-color'></i>Phim<span class="main-color">HUB</span>
                            </a>
                        </Link>
                        <ul class="nav-menu" id="nav-menu">
                            <li>
                                <Link to="/" >
                                    <a class="btn ">
                                        <span class="white">Home</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Login"  >
                                    <a class="btn btn-hover">
                                        <span class="white">Sign in</span>
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
