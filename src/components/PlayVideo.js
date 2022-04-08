import React, { Component, useState, useEffect  } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../css/site.css';
import '../css/style.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { useParams } from "react-router-dom";

import axios from 'axios';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Filmvideo from './filminfo/Filmvideo';
import VideoPlayer from 'react-video-js-player';
import link from "../assets/images/film1.mp4"
const PlayVideo = () => {
    
    const [items, setItems] = useState([]);
    const videosrc = link;
    const poster = "../assets/images/movies/call.jpg";
    useEffect(() => {
        const fetchItems = async () => {
            // fix lỗi CRORS
            //https://www.breakingbadapi.com/api/characters
            //http://localhost:5000/api/film/listallfilm

            const result = await axios.get(`http://localhost:5000/api/film/listallfilm`);
           // console.log(result.data)
            setItems(result.data)
            
            
           
        }
        fetchItems()
    }, [])
    return (
        <><Header />
        
        <Filmvideo  items = {items}/>
      
   
           
            <Footer />
            </>
    );
}
export default PlayVideo;