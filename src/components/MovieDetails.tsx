import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { Cast } from '../interfaces/creditsInterface';
import { MovieDetailsResponse } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';

interface Props {
  movieDetails: MovieDetailsResponse;
  cast: Cast[]
}

export const MovieDetails = ({ movieDetails, cast }: Props) => {
  return (
    <View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='star-outline' color='gray' size={20}/>
          <Text>{movieDetails.vote_average}</Text>
          <Text style={{ marginLeft: 8 }}>
            - {movieDetails.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <Text style={{ fontSize: 23, marginTop: 12, fontWeight: 'bold' }}>Historia</Text>
        <Text style={{ fontSize: 16 }}>{movieDetails.overview}</Text>
        <Text style={{ fontSize: 23, marginTop: 12, fontWeight: 'bold' }}>Presupuesto</Text>
        <Text style={{ fontSize: 18 }}>{currencyFormatter.format(movieDetails.budget, { code: 'USD' })}</Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text style={{ fontSize: 23, marginTop: 12, fontWeight: 'bold', marginHorizontal: 20 }}>Actores</Text>
        <FlatList
          data={cast}
          renderItem={({ item }) => <CastItem actor={item}/>}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 70 }}
        />
      </View>
    </View>
  )
}
