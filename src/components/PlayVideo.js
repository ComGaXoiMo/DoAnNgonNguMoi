import React, { Component, useState, useEffect  } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../css/site.css';
import '../css/style.css';
import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';
import Filmvideo from './filminfo/Filmvideo';
import VideoPlayer from 'react-video-js-player';
import link from "../assets/images/film1.mp4"
function PlayVideo() {
    const [items, setItems] = useState([]);
    const videosrc = link;
    const poster = "../assets/images/movies/call.jpg";
    return (
        <><Header />
        {items.map((item) =>(
        <Filmvideo key={items} items = {item}/>
      
   )
   )}
           
            <Footer />
            </>
    );
}
export default PlayVideo;