const API_KEY = "d52faf1c3f5a7486d617234325d58aab";
const API_END_POINT = "https://api.themoviedb.org/3";

const MOVIE_NOW_PLAYING = `${API_END_POINT}/movie/now_playing?api_key=${API_KEY}`;
const MOVIE_POPULAR = `${API_END_POINT}/movie/popular?api_key=${API_KEY}`;
const MOVIE_TOP_RATED = `${API_END_POINT}/movie/top_rated?api_key=${API_KEY}`;
const MOVIE_UPCOMING = `${API_END_POINT}/movie/upcoming?api_key=${API_KEY}`;

export { MOVIE_NOW_PLAYING, MOVIE_UPCOMING, MOVIE_TOP_RATED, MOVIE_POPULAR };
