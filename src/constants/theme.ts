import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

const myTheme = {
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#afafaf',
    lightgray: '#ddd',
    brightGreen: '#4DDB00',
    success: '#55b21B',
  },
};

export {myTheme};
