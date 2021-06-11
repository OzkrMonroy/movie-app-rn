import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number
}

export const MoviePoster = ({ movie, width = 300, height = 420, marginHorizontal = 0 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailsScreen', movie)}>
      <View style={{...styles.imageContainer, width, height, marginHorizontal}}>
        <Image source={{ uri }} style={ styles.image}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  }
});