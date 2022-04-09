import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/site.css';
import '../css/style.css';
import { useParams } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import axios from 'axios';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Filmvideo from './filminfo/Filmvideo';
import Coment from '../components/filminfo/Coment'
import link from "../assets/images/film1.mp4"
const PlayVideo = () => {
     
    const  idFF  = useParams();
    const [items, setItems] = useState([]);
    const [coment, setcomentComent] = useState([]);    
    const body = {       
            idF:idFF.id          
    };  
    console.log(idFF.id)
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`http://localhost:5000/api/film/listallfilm`);
            
            const resulComent = await axios.post(`http://localhost:5000/api/comment/loadComment`,body);
            setItems(result.data)
            setcomentComent(resulComent.data)
            
        }
        fetchItems()
        console.log(coment)
    }, [])
    return (
        <><Header />
        <div class="row">
            <div class="col ">
                
                <Filmvideo items={items} />
                
                
                
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
                  <Coment items={coment} />   
                
                    
                </div>
            </div>
</div>
            <Footer />
        </>
    );
}
export default PlayVideo;