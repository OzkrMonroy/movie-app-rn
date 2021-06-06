import React from 'react'
import { View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { Spinner } from '../components/Spinner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';

export const HomeScreen = () => {
  const { moviesInTheaters, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  return (
    <View>
      {isLoading ? (
        <Spinner/>
      ) : (
        <View style={{ marginTop: top }}>
          <MoviePoster movie={moviesInTheaters[0]}/>
        </View>
      )}
    </View>
  )
}
