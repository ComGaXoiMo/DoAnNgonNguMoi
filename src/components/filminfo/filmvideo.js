import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
// import '../css/site.css';
// import '../css/style.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Filmitem from './Filmitem';
import VideoPlayer from 'react-video-js-player';
 //import link from "http://localhost:5001/video1?v=film1"
    
    const Filmvideo = ({items}) => {
      const {id} = useParams();
        console.log(items)
        return (
        <section>
            
             {
             items.map((item) =>(
               
                //  <VideoPlayer key={item._id} src={"http://localhost:5001/video1?v=film1"}  poster={item.poster} width="700" height="450" ></VideoPlayer>
                <video  id="videoPlayer" width="650" height="450" controls muted="muted" autoplay>
                  
                <source src={"http://localhost:5001/video1?v="+ item.videoLink} type="video/mp4" />
              </video>
            )
            )}
                            
        </section> 
      
        )
      }
      
//}
export default Filmvideo;