import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzc2YTM0NGNlYTI3MzdiMGU2MTZiMDZkMzE2OWVkMiIsIm5iZiI6MTczOTcyNjUwNy4yNzYsInN1YiI6IjY3YjIxZWFiMDlhNDdiNjliOTlmYjI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1W5Qwj_ZYITDFN94x25yDVPxU4mjkDeqdJnq0gHdnM"; // Вставь свой API Read Access Token (v4)
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    Accept: "application/json",
  },
});

// 🔥 Получить трендовые фильмы
export const fetchTrendingMovies = async () => {
  try {
    const { data } = await api.get("/trending/movie/day");
    return data.results;
  } catch (error) {
    console.error("Ошибка при получении трендовых фильмов:", error);
    return [];
  }
};

// 🔍 Поиск фильмов по ключевому слову
export const searchMovies = async (query) => {
  try {
    const { data } = await api.get("/search/movie", {
      params: { query },
    });
    return data.results;
  } catch (error) {
    console.error("Ошибка при поиске фильма:", error);
    return [];
  }
};

// 🎬 Получить детали фильма
export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error("Ошибка при получении информации о фильме:", error);
    return null;
  }
};

// 👥 Получить список актеров фильма
export const fetchMovieCredits = async (movieId) => {
  try {
    const { data } = await api.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.error("Ошибка при получении актеров фильма:", error);
    return [];
  }
};

// 📝 Получить отзывы о фильме
export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await api.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.error("Ошибка при получении отзывов о фильме:", error);
    return [];
  }
};
