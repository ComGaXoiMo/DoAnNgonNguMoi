import React, { Component, useState, useEffect } from 'react';
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
            const result = await axios.get(`http://localhost:5000/api/film/listallfilm`);

            setItems(result.data)
        }
        fetchItems()
    }, [])
    return (
        <><Header />
        <div class="row">
            <div class="col ">
                <hr></hr>
                <Filmvideo items={items} />
                <hr></hr>
                
                
            </div>
            <div class="col">
                {/*nhap comment */}
                <hr></hr>
                <form>
                    <div class=" row" >
                        <label class=" col-sm-3" >Tên</label>
                    </div>
                    <div class=" row" >
                        <label class=" col-sm-3" >Bình luận:</label>
                        <input class=" col-sm-6" type="text" name="commnent" placeholder="Nhập bình luận " />
                        <input type="submit" class="btngbl col-sm-2 " value="Gửi" />
                    </div>
                </form>
                <hr></hr>
                {/* coment dã co */}
                <div>
                    <div class="row" >
                        <label class=" col-sm-3" >Duc nguyen duy duc :</label>
                        <label class=" col-sm-9" >The interactive example below demonstrates some of the values for align-items using grid layouthay ay hay</label>
                    </div>
                    <div class="row" >
                        <label class=" col-sm-3" >Duc :</label>
                        <label class=" col-sm-9" >The interactive example below demonstrates some of the values for align-items using grid layouthay ay hay</label>
                    </div>
                    <div class="row" >
                        <label class=" col-sm-3" >Duc :</label>
                        <label class=" col-sm-9" >The interactive example below demonstrates some of the values for align-items using grid layouthay ay hay</label>
                    </div>
                    <div class="row" >
                        <label class=" col-sm-3" >Duc :</label>
                        <label class=" col-sm-9" >The interactive example below demonstrates some of the values for align-items using grid layouthay ay hay</label>
                    </div>
                </div>
            </div>
</div>
            <Footer />
        </>
    );
}
export default PlayVideo;