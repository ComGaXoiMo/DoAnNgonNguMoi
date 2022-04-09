import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
 import '../../assets/app.css';
 import '../../css/style.css';
 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Filmitem from './Filmitem';
import VideoPlayer from 'react-video-js-player';
//import link from "http://localhost:5001/video1?v=film1"

const Coment = ({ items }) => {  
  return (
    <section>
      {items.map((item) => (     
              <>
              <div class="row" >
                        <label class=" col-sm-3" >{item.userName}:</label>
                        <label class=" col-sm-9" >{item.content}</label>
                    </div>            
              </>           
            
            //  <VideoPlayer key={item._id} src={"http://localhost:5001/video1?v=film1"}  poster={item.poster} width="700" height="450" ></VideoPlayer>
          )
     
        )}

    </section>

  )
}

//}
export default Coment;