import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/tmdbApi";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const reviewsData = await fetchMovieReviews(movieId);
      setReviews(reviewsData);
    }
    getReviews();
  }, [movieId]);

  if (reviews.length === 0) return <p>Нет отзывов.</p>;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
