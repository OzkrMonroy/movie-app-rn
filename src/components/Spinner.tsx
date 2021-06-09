import React from 'react';
import { ActivityIndicator, View } from 'react-native';

interface Props {
  size: number;
  top?: number;
}

export const Spinner = ({ size, top=0 }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginTop: top}}>
      <ActivityIndicator color='red' size={size}/>
    </View>
  )
}
