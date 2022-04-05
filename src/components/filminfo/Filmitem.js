import React from 'react'

const Filmitem = ({ item }) => {
    console.log(item)
    return (
        <>
            <div>{item.nameMovie}</div>
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
        </>


    )
}

export default Filmitem