import styled, { createGlobalStyle } from 'styled-components'
export { styled }

export const typography = {
  body: `font-family: 'Open Sans', sans-serif`,
}

export const colors = {
  main: '#393B41',
  secondary: '#43454b',
  inactive: '#4B4D52',
  active: '#808185',
  diceroll: '#A2E8FF',
  muted: '#4D4F54',
  mutedlight: '#75767A',
  players: {
    0: '#DD3939', // red GM
    1: '#EDAF06', // corn
    2: '#009688', // persian green
    3: '#416094', // chambray
    4: '#84B779', // olivine
    5: '#C095C3', // london hue
    6: '#793A3A', // lotus
    7: '#3A5936', // tom thumb
    8: '#4599C3', // pelorous
    9: '#6D6F54', // kokoda
    10: '#AE7D58', // limed oak
    11: '#CCA6A6', // clam shell
    12: '#824E77', // cannon pink
    13: '#D4D9A1', // winter hazel
    14: '#622B2B', // buccaneer
    15: '#768661', // flax smoke
  }
}

export const Box = styled.div`
  display: flex;
`

export const Input = styled.input`
  color: ${colors.active};
`

export const Button = styled.button``

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  body {
    background: ${props => props.storybook ? colors.main : colors.secondary };
    
    ${typography.body};
  }
`

export default Box
