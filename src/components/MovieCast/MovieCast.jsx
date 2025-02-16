import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/tmdbApi";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const castData = await fetchMovieCredits(movieId);
      setCast(castData);
    }
    getCast();
  }, [movieId]);

  if (cast.length === 0) return <p>Нет информации о касте.</p>;

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <p>{actor.name} ({actor.character})</p>
          {actor.profile_path && <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />}
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
