import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/tmdbApi";

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
    <div>
      <Link to={location.state?.from || "/movies"}>🔙 Назад</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>Рейтинг: {movie.vote_average}</p>
      <p>Дата выхода: {movie.release_date}</p>

      {/* Навигация по Cast и Reviews */}
      <nav>
        <NavLink to="cast" state={{ from: location.state?.from }}>🎭 Актеры</NavLink>
        <NavLink to="reviews" state={{ from: location.state?.from }}>📝 Отзывы</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
