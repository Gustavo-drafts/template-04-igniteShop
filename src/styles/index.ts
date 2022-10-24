import { createStitches } from "@stitches/react";


export const { 
  config, 
  styled, 
  css, 
  globalCss, 
  keyframes, 
  getCssText, 
  theme, 
  createTheme
 } = createStitches({
  
  theme: {
    colors: {
      white: '#fff',

      gray100: '#121214',
      gray200: '#202024',
      gray300: '#8d8d99',
      gray400: '#c4c4cc',
      gray500: '#e1e1e6',

      green100: '#00875f',
      green200: '#00b37e',

    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  }

})