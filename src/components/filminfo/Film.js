import React from 'react'
import Filmitem from './Filmitem'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Film = ({items, isLoading}) => {
  return (

    isLoading ?<h1>Loading...</h1> : (<section>
      {items.map((item) =>(
         
                        <Filmitem key={item._id} item = {item}></Filmitem>
                    
      ))}
  </section>) 

  )
}

export default Film