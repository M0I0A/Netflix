import React, { useEffect,useState } from 'react'
import './RowPost.css'
import {  API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [Yurl,setYurl]=useState('')
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      },
      };
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setYurl(response.data.results[0])
        }
    })

  }    
  return (
    <div className='row'>
      <h2>{props.title}</h2>

      <div className="posters">
        {
          movies.map((movie)=>
          <img onClick={()=>handleMovie(movie.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
          )
        }
        
      </div>
    { Yurl && <Youtube opts={opts} videoId={Yurl.key}/>}
    </div>
  )
}

export default RowPost
