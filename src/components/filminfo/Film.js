import React from 'react'

const Film = ({items, isLoading}) => {
  return (

    isLoading ?<h1>Loading...</h1> : (<section className='movie-item'>
      {items.map((item) =>(
          <h1>{item.nameMovie}</h1>
      ))}
  </section>) 

  )
}

export default Film