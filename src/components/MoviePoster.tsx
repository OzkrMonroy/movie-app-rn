import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri }} style={ styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    width: 300,
    height: 420,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  }
});