import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../axios'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        const movies = response.data.results
        const randomMovie = movies[Math.floor(Math.random() * movies.length)]
        console.log(randomMovie)
        setMovie(randomMovie)
    })
  },[])
  return (
    <div 
      style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
      className='banner'>
        <div className='content'>
            <h1 className='title'> 
                {movie?movie.title:""}
            </h1>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
