import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/tmdbApi";
import MovieList from "../../components/MovieList/MovieList ";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return; // Если пусто - не делаем запрос
    searchMovies(query.toLowerCase()) // 🔍 Приводим запрос к нижнему регистру
      .then(setMovies)
      .catch((error) => console.error("Ошибка поиска:", error));
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim(); // Убираем пробелы
    if (value) setSearchParams({ query: value });
  };

  return (
    <div>
      <h1>Поиск фильмов</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" defaultValue={query} placeholder="Введите название..." />
        <button type="submit">Искать</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
