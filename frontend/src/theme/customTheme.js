import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyle: {
    normal: {
      fontStyle: 'normal',
    },
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'var(--primary-font-family)',
        fontStyle: 'normal',
        color: 'var(--primary-color)',
        fontWeight: '400'
      },
      a: {},
    },
  },
});

export default theme;
