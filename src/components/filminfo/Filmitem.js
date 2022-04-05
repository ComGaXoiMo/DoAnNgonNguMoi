import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Filmitem = ({ item }) => {
    console.log(item)
    return (    
        <OwlCarousel className="owl-theme" loop nav margin={3} >
        <a href="#" class="movie-item">
                <img src={item.poster} alt="" />
                <div class="movie-item-content">
                    <div class="movie-item-title">
                        {item.nameMovie}
                    </div>
                    <div class="movie-infos">
                        <div class="movie-info">
                            <i class="bx bxs-star"></i>
                            <span>{item.rate}</span>
                        </div>
                        <div class="movie-info">
                            <i class="bx bxs-time"></i>
                            <span>{item.quality}</span>
                        </div>
                        {/* <div class="movie-info">
                            <span>HD</span>
                        </div> */}
                        <div class="movie-info">
                            <span>{item.minimumAge}</span>
                        </div>
                    </div>
                </div>
            </a>
    </OwlCarousel>   
            
        


    )
}

export default Filmitem