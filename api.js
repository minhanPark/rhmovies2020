import axios from "axios";

const TMDB_API = "f89010dc3f15b5c96f27f0a1b4246a53";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_API,
    },
  });

const getAnithing = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnithing("/movie/now_playing"),
  popular: () => getAnithing("/movie/popular"),
  upcoming: () => getAnithing("/movie/upcoming", { region: "kr" }),
  search: (query) => getAnithing("/search/movie", { query }),
  movie: (id) => getAnithing(`/movie/${id}`),
  discover: () => getAnithing("/discover/movie"),
};

export const tvApi = {
  today: () => getAnithing("/tv/airing_today"),
  thisWeek: () => getAnithing("/tv/on_the_air"),
  topRated: () => getAnithing("/tv/top_rated"),
  popular: () => getAnithing("/tv/popular"),
  search: (query) => getAnithing("/search/tv", { query }),
  show: (id) => getAnithing(`/tv/${id}`),
};
