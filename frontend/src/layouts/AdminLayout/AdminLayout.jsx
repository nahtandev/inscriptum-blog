/* eslint-disable no-unused-vars */
/**
 * File name: AdminLayout.jsx
 * Description: Admin Layout component.
 * Author(s): nathandev
 * Creation date: 16/06/2023
 * Last modified date: 16/06/2023
 */

import { Outlet } from 'react-router-dom';
import './AdminLayout.css';
import { HStack, Flex, Center } from '@chakra-ui/react';

export default function AdminLayout() {
  return (
    <HStack padding={{ base: '10px 0px 10px 0px' }} width={{ base: '100%' }}>
      <Center flexDirection="column" width="100%">
        Admin page is building. Please, come back later...
      </Center>
    </HStack>
  );
}
