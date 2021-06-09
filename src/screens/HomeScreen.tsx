import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { Spinner } from '../components/Spinner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {
  const { moviesInTheaters, popularMovies, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  return (
    <View>
      {isLoading ? (
        <Spinner size={100}/>
      ) : (
        <ScrollView>
          <View style={{ marginTop: top }}>
            <View style={{ height: 440 }}>
              <Carousel
                data={moviesInTheaters}
                renderItem={({ item }: any) => <MoviePoster movie={item} />}
                sliderWidth={windowWith}
                itemWidth={300}
                inactiveSlideOpacity={0.8}
              />
            </View>
            <HorizontalSlider title="Populares" movies={popularMovies}/>
            <HorizontalSlider title="Mejores calificadas" movies={topRated}/>
            <HorizontalSlider title="Pronto en cines" movies={upcoming}/>
          </View>
        </ScrollView>
      )}
    </View>
  )
}