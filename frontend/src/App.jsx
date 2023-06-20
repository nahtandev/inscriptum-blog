/* eslint-disable no-unused-vars */
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import customTheme from './theme/customTheme';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
