import React from 'react'
import { Dimensions, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { Spinner } from '../components/Spinner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {
  const { moviesInTheaters, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  return (
    <View>
      {isLoading ? (
        <Spinner/>
      ) : (
        <View style={{ marginTop: top }}>
          {/* <MoviePoster movie={moviesInTheaters[0]}/> */}
          <Carousel
            data={moviesInTheaters}
            renderItem={({ item } : any) => <MoviePoster movie={item}/>}
            sliderWidth={windowWith}
            itemWidth={300}
          />
        </View>
      )}
    </View>
  )
}
