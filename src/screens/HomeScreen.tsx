import React from 'react'
import { View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { Spinner } from '../components/Spinner';

export const HomeScreen = () => {
  const { moviesInTheaters, isLoading } = useMovies();

  return (
    <View>
      {isLoading ? (
        <Spinner/>
      ) : (
        <View>
          
        </View>
      )}
    </View>
  )
}
