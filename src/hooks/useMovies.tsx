import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
  moviesInTheaters: Movie[];
  popularMovies: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    moviesInTheaters: [],
    popularMovies: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const nowPlayingPromise = movieDb.get<MovieDBMoviesResponse>('/now_playing');
      const popularPromise = movieDb.get<MovieDBMoviesResponse>('/popular');
      const topRatedPromise = movieDb.get<MovieDBMoviesResponse>('/top_rated');
      const upcomingPromise = movieDb.get<MovieDBMoviesResponse>('/upcoming');

      const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);
      setMoviesState({
        moviesInTheaters: response[0].data.results,
        popularMovies: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      })

      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }
  }

  return {
    ...moviesState,
    isLoading
  }
}