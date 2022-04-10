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

const PlayVideo = () => {
     
    const  idFF  = useParams();
    const [items, setItems] = useState([]);
    const [coment, setcomentComent] = useState([]);   
    const [upcoment, setUpcomentComent] = useState(""); 
    const body = {       
            idF:idFF.id          
    };  
    const bdUpcomment={
        idU:localStorage.getItem('idLg'),
        idF:idFF.id,
        imgUser:"link",
        userName: localStorage.getItem('nameLg'),
        content:upcoment
    
    }
    console.log(upcoment)
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`http://localhost:5000/api/film/listallfilm`);
            const resulComent = await axios.post(`http://localhost:5000/api/comment/loadComment`,body);
            setItems(result.data)
            setcomentComent(resulComent.data)         
        }
        fetchItems()
        
    }, [])
    const upCm = async () => {
        const resulupComent = await axios.post(`http://localhost:5000/api/comment/addcomment`,bdUpcomment);
        setUpcomentComent(resulupComent.data)
    }
    return (
        <><Header  userID={localStorage.getItem('idLg')} isLogin={localStorage.getItem("isLg")}/>
        <div class="row">
            <div class="col ">
                
                <Filmvideo items={items} />
                
                
                
            </div>
            <div class="col" id="formcmt">
                {/*nhap comment */}
                <hr></hr>
                <form onSubmit={upCm}>
                    
                    <div class=" row1" >
                        <p class="" >{localStorage.getItem('nameLg')}</p>
                    </div>
                    <div class=" row" >
                        <label class=" col-sm-3" >Bình luận:</label>
                        <input class=" col-sm-6" onChange={(e)=>setUpcomentComent(e.target.value)} 
                        type="text" name="commnent" placeholder="Nhập bình luận " />
                        <input type="submit" class="btngbl col-sm-2 " value="Gửi" />
                    </div>
                </form>
                <hr></hr>
                {/* coment dã co */}
                <div class="KhungBinhLuan">
                  <Coment items={coment} />   
                
                    
                </div>
            </div>
</div>
            <Footer />
        </>
    );
}
export default PlayVideo;