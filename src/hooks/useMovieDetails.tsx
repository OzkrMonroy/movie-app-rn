import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { MovieDetails } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieState {
  isLoading: boolean;
  movieDetails?: MovieDetails;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [movieState, setMovieState] = useState<MovieState>({
    isLoading: true,
    movieDetails: undefined,
    cast: []
  })

  useEffect(() => {
    getMovieDetails()
  }, []);

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDb.get<MovieDetails>(`/${movieId}`);
    const castMoviePromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResp, castMovieResp] = await Promise.all([movieDetailsPromise, castMoviePromise]);

    setMovieState({
      isLoading: false,
      movieDetails: movieDetailsResp.data,
      cast: castMovieResp.data.cast
    })
  }

  return {...movieState}
}