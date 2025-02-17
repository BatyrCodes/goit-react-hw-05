import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { fetchMovieDetails } from "../../services/tmdbApi";
import s from './MovieDetailsPage.module.css'

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    }
    getMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Загрузка...</p>;

  return (
    <div className={s.wrapper}>
      <Link  to={location.state?.from || "/movies"}><button className={s.btn}><IoArrowBackOutline />Go back</button></Link>
      <div className={s.container}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <div className={s.infofilms}>
      <h1 className={s.movieTitle}>{movie.title}</h1>

      <p className={s.userDesc}>User Score: {movie.vote_average}%</p>

      <h3 className={s.option}>Owerview</h3>
      <p className={s.userDesc}>{movie.overview}</p>

      <h3 className={s.option}>Genres</h3>
      <p className={s.userDesc}>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      </div>

      {/* Навигация по Cast и Reviews */}
      <nav>
        <h3 className={s.option}>Additional information</h3>
       <div className={s.linkWrapper}>
        <NavLink className={s.nav} to="cast" state={{ from: location.state?.from }}>Cast</NavLink>
        <NavLink className={s.nav} to="reviews" state={{ from: location.state?.from }}>Reviews</NavLink>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
