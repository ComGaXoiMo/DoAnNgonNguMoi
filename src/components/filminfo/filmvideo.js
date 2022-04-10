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

const Filmvideo = ({ items }) => {
  const { id } = useParams();

  //console.log(items)
  return (
    <section>

      {
        items.map((item) => {
          if (item._id == id) {
            return (
              <>
                <h2 class="TenPhim">{item.nameMovie} </h2>
                <video id="videoPlayer" width="650" height="450" controls muted="muted" autoplay>
                {/* <source src={"http://localhost:5001/video"} type="video/mp4" /> */}
                  <source src={"http://localhost:5001/video1?v=" + item.videoLink} type="video/mp4" />
                </video>
                <h3 class="motaphim1">  Mô tả:</h3>
                <h4 class="motaphim">{item.Discription}</h4>
              </>

            )
          }
        }
        )}

    </section>

  )
}

//}
export default Filmvideo;