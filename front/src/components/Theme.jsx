import { createTheme } from '@mui/material/styles';

const colors = {
  primary: {
    100: '#cfd1d4',
    200: '#9ea4aa',
    300: '#6e767f',
    400: '#3d4955',
    500: '#0d1b2a',
    600: '#0a1622',
    700: '#081019',
    800: '#050b11',
    900: '#030508',
  },
  blueAccent: {
    100: '#d1d4d8',
    200: '#a4a8b1',
    300: '#767d89',
    400: '#495162',
    500: '#1b263b',
    600: '#161e2f',
    700: '#101723',
    800: '#0b0f18',
    900: '#05080c',
  },
  secondary: {
    100: '#d9dee4',
    200: '#b3bdc9',
    300: '#8d9cad',
    400: '#677b92',
    500: '#415a77',
    600: '#34485f',
    700: '#273647',
    800: '#1a2430',
    900: '#0d1218',
  },
  shadow_blue: {
    100: '#e4e8ee',
    200: '#c9d1dd',
    300: '#adbbcb',
    400: '#92a4ba',
    500: '#778da9',
    600: '#5f7187',
    700: '#475565',
    800: '#303844',
    900: '#181c22',
  },
  bg: {
    100: '#f9f9f8',
    200: '#f3f3f1',
    300: '#ecedeb',
    400: '#e6e7e4',
    500: '#e0e1dd',
    600: '#b3b4b1',
    700: '#868785',
    800: '#5a5a58',
    900: '#2d2d2c',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary[500],
    },
    secondary: {
      main: colors.shadow_blue[500],
    },
    neutral: {
      dark: colors.blueAccent[700],
      main: colors.blueAccent[500],
      light: colors.blueAccent[100],
    },
    background: {
      default: colors.bg[500],
      paper: 'white',
    },
  },
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: { fontSize: '32px !important' },
      },
    },
  },
});
