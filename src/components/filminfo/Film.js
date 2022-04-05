import React from 'react'
import Filmitem from './Filmitem'
const Film = ({items, isLoading}) => {
  return (

    isLoading ?<h1>Loading...</h1> : (<section className='movie-item'>
      {items.map((item) =>(
          <Filmitem key={item._id} item = {item}></Filmitem>
      ))}
  </section>) 

  )
}

export default Film