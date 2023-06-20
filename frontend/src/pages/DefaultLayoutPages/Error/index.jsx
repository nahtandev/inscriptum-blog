/* eslint-disable no-unused-vars */
/**
 * File name: ErrorPage.jsx
 * Description: Error Page.
 * Author(s): nathandev
 * Creation date: 19/06/2023
 * Last modified date: 19/06/2023
 */

import { Box, Text, Heading } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      height={'100%'}
    >
      <Heading as={'h1'}>Ooh 😮😮</Heading>
      <Text fontSize={'2xl'}>Sorry, an unexpected error has occured.</Text>
      <Text fontSize={'1xl'}>{error.statusText || error.message}</Text>
    </Box>
  );
}
