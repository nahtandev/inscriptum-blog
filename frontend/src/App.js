/* eslint-disable no-unused-vars */
import './App.css';
import { Header } from 'layouts';
import customTheme from './theme/customTheme';
import { Center, ChakraProvider, Flex, VStack } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <VStack padding={{ base: '10px 0px 10px 0px' }} width={{ base: '100%' }}>
        <Flex width={{ base: '98%' }}>
          <Center flexDirection="column" width="100%">
            <Header />
          </Center>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
