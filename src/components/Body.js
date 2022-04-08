import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/app.css';
import '../assets/app.js';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Film from './filminfo/Film';
const Body = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [items2, setItems2] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
    
    useEffect(() => {
        const fetchItems = async () => {
            // fix lỗi CRORS
            //https://www.breakingbadapi.com/api/characters
            //http://localhost:5000/api/film/listallfilm

            const result = await axios.get("http://localhost:5000/api/film/listnewfilm");
            const result2 = await axios.get("http://localhost:5000/api/film/listallfilm");
            console.log(result2.data)
            setItems(result.data)
            setItems2(result2.data)
            setIsLoading(false)
            setIsLoading2(false)
        }
        fetchItems()
    }, [])
    return (

        <>
            <div class="section">
                <div class="container">
                    <div class="section-header">
                        New Film
                    </div>
                    <Film isLoading={isLoading} items={items} />



                </div>
            </div>

            <div class="section">
                <div class="container">
                    <div class="section-header">
                        All Film
                    </div>
                    <Film isLoading={isLoading2} items={items2} />
                    
                </div>
            </div>
            


            <div class="section">
                <div class="hero-slide-item">
                    <img src="../assets/images/transformer-banner.jpg" alt="" />
                    <div class="overlay"></div>
                    <div class="hero-slide-item-content">
                        <div class="item-content-wraper">
                            <div class="item-content-title">
                                Transformer
                            </div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>9.5</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span>120 mins</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>16+</span>
                                </div>
                            </div>
                            <div class="item-content-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                            </div>
                            <div class="item-action">
                                <a href="#" class="btn btn-hover">
                                    <i class="bx bxs-right-arrow"></i>
                                    <span>Watch now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Body;