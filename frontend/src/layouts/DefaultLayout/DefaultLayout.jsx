/* eslint-disable no-unused-vars */
/**
 * File name: DefaultLayout.jsx
 * Description: Default Layout component.
 * Author(s): nathandev
 * Creation date: 16/06/2023
 * Last modified date: 16/06/2023
 */

import './DefaultLayout.css';
import { Header } from 'components/DefaultLayoutComponent';
import { VStack, Flex, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <VStack padding={{ base: '10px 0px 10px 0px' }} width={{ base: '100%' }}>
      <Flex width={{ base: '98%' }}>
        <Center flexDirection="column" width="100%">
          <Header />
          <Outlet />
        </Center>
      </Flex>
    </VStack>
  );
}




