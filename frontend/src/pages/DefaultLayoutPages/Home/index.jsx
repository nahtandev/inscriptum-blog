/* eslint-disable no-unused-vars */
import { Box, Center, Flex, VStack } from '@chakra-ui/react';
import HomeFeaturedArticle from 'components/DefaultLayoutComponent/FeaturedArticle';

export default function Home() {
  return (
    <Flex direction={'column'} width={'100%'} paddingTop={{ base: '25px' }}>
      <Center>
        <HomeFeaturedArticle />
      </Center>
    </Flex>
  );
}
