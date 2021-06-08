import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigation'

const heightScreen = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'>{}

export const DetailsScreen = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.posterImage}
        />
      </View>
      <View>
        <Text>{movie.original_title}</Text>
        <Text>{movie.title}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: heightScreen * 0.7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
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
  posterImage: {
    flex: 1,
  },
  movieTitleContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  originalTitle: {
    fontSize: 16,
    opacity: .8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});