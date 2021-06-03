import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {
  const [moviesInTheaters, setMoviesInTheaters] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const res = await movieDb.get<MovieDBNowPlaying>('/now_playing');
      const movies = res.data.results;
      setMoviesInTheaters(movies)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    moviesInTheaters,
    isLoading
  }
}