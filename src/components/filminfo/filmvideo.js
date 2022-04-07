import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// import '../css/site.css';
// import '../css/style.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import VideoPlayer from 'react-video-js-player';
// import link from "../assets/images/film1.mp4"

    const Filmvideo = ({item}) => {
        console.log(item._id)
        return (<section>
            
            {/* {items.map((item) =>(
              
                 <VideoPlayer key={item._id} src={item.videoLink}  poster={item.poster} width="700" height="450" ></VideoPlayer>
               
            )
            )}
                            */}
        </section> 
      
        )
      }
      
//}
export default Filmvideo;