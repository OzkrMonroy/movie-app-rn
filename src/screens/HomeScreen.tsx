import React from 'react';
import { Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { Spinner } from '../components/Spinner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {
  const { moviesInTheaters, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  return (
    <View>
      {isLoading ? (
        <Spinner />
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
            <HorizontalSlider title="En cine" movies={moviesInTheaters}/>
          </View>
        </ScrollView>
      )}
    </View>
  )
}

// https://github.com/meliorence/react-native-snap-carousel