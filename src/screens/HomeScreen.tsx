import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { Spinner } from '../components/Spinner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import { getPosterColors } from '../helpers/getColors';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {
  const { moviesInTheaters, popularMovies, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  const getPosterSelected = async (slideIndex: number) => {
    const movieSelected = moviesInTheaters[slideIndex];
    const uri = `https://image.tmdb.org/t/p/w500${movieSelected.poster_path}`;

    const [ primary, secondary ] = await getPosterColors(uri);
  }

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Spinner size={100}/>
      ) : (
        <GradientBackground>
          <ScrollView>
            <View style={{ marginTop: top + 20}}>
              <View style={{ height: 440 }}>
                <Carousel
                  data={moviesInTheaters}
                  renderItem={({ item }: any) => <MoviePoster movie={item} />}
                  sliderWidth={windowWith}
                  itemWidth={300}
                  inactiveSlideOpacity={0.8}
                  onSnapToItem={slideIndex => getPosterSelected(slideIndex)}
                />
              </View>
              <HorizontalSlider title="Populares" movies={popularMovies}/>
              <HorizontalSlider title="Mejores calificadas" movies={topRated}/>
              <HorizontalSlider title="Pronto en cines" movies={upcoming}/>
            </View>
          </ScrollView>
        </GradientBackground>
      )}
    </View>
  )
}