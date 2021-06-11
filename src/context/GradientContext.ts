import { createContext } from 'react';
import { ImageColors } from '../interfaces/ImageColorsInterface';

interface ContextProps {
  currentColors: ImageColors;
  prevColors: ImageColors;
  changeCurrentColors: (colors: ImageColors) => void;
  changePrevColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);