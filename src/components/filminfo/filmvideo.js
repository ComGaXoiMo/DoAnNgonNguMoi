import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../css/site.css';
import '../css/style.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import VideoPlayer from 'react-video-js-player';
import link from "../assets/images/film1.mp4"
function PlayVideo() {
    const videosrc = link;
    const poster = "../assets/images/movies/call.jpg";
    return (
        <><Header />
            <div class="">
                <VideoPlayer src={videosrc} poster={poster} width="700" height="450" />
            </div>
            <Footer /></>
    );
}
export default PlayVideo;