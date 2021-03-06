import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  title: string;
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ height: (title) ? 250 : 220, marginBottom: 10 }}>
      {title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 10}}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} marginHorizontal={8} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
