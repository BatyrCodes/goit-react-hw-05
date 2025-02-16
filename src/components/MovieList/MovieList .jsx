import React from 'react'
import s from './MovieList .module.css'
import { Link, useLocation } from 'react-router-dom'

function MovieList ({movies}) {
  const location = useLocation()
  return (
    <div>
      <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
           <Link to={`/movies/${movie.id}`} state={{from:location}}>{movie.title}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default MovieList 
