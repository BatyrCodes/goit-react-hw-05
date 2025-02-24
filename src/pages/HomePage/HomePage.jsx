import React, { useEffect, useState } from 'react'
import {fetchTrendingMovies} from '../../services/tmdbApi'
import s from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList ';


function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetchTrendingMovies().then(setMovies)
  },[])
 
  return (
    <div className={s.container}>
      <h1 className={s.title}>Trending Movies</h1>
      <MovieList movies={movies}/>
    </div>
  )
}

export default HomePage
