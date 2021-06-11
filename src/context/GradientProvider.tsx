import React from 'react';
import { useState } from 'react';
import { ImageColors } from '../interfaces/ImageColorsInterface';
import { GradientContext } from './GradientContext';

export const GradientProvider = ({children}: any) => {
  const [currentColors, setCurrentColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const changeCurrentColors = (colors: ImageColors) => {
    setCurrentColors(colors);
  }

  const changePrevColors = (colors: ImageColors) => {
    setPrevColors(colors);
  }

  return (
    <GradientContext.Provider value={{
      currentColors,
      prevColors,
      changeCurrentColors,
      changePrevColors
    }}>
      {children}
    </GradientContext.Provider>
  )
}