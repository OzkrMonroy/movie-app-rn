import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'

export const HomeScreen = () => {
  const { moviesInTheaters, isLoading } = useMovies();

  if(isLoading){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color='red' size={100}/>
      </View>
    )
  }

  return (
    <View>
      
    </View>
  )
}
