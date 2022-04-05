import React from 'react'
import Filmitem from './Filmitem'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Film = ({items, isLoading}) => {
  return (

    isLoading ?<h1>Loading...</h1> : (<section>
      <OwlCarousel className="owl-theme" loop nav margin={3} >
      {items.map((item) =>(
        
         <a href="#" class="movie-item">
           <Filmitem key={item._id} item = {item}></Filmitem>
         </a>
      )
      )}
      </OwlCarousel>                 
  </section>) 

  )
}

export default Film