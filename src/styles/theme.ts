export const theme = {
  colors: {
    primary: '#FF6B6B', // The red color you like
    secondary: '#2C3E50', // Dark blue-grey
    background: {
      light: '#FFFFFF',
      dark: '#1A1A1A'
    },
    text: {
      light: '#2C3E50',
      dark: '#FFFFFF'
    },
    grey: {
      100: '#F7F7F7',
      200: '#E0E0E0',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#212121',
      900: '#121212'
    }
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.12)',
    large: '0 8px 16px rgba(0,0,0,0.14)'
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px'
  }
};

export type Theme = typeof theme; 