/* eslint-disable no-unused-vars */
import { Box, Center, Flex, VStack, Divider, Text } from '@chakra-ui/react';
import Spacer from 'components/common/Spacer';
import HomeFeaturedArticle from 'components/DefaultLayoutComponent/FeaturedArticle';

export default function Home() {
  return (
    <Flex
      direction={'column'}
      width={'100%'}
      paddingTop={{ base: '25px' }}
      alignItems="center"
    >
      <HomeFeaturedArticle />
      <Spacer />
      <Text
        fontWeight="700"
        fontSize={{
          xl: '42px',
          lg: '35px',
          md: '30px',
          sm: '25px',
          base: '20px',
        }}
        lineHeight={{
          xl: '57px',
          lg: '45px',
          md: '35px',
          sm: '25px ',
          base: '20px',
        }}
        marginBottom={{ lg: '15px', base: '10px' }}
      >
        Editor’s Picks
      </Text>
      <Divider
        width={{ xl: '190px', lg: '160px', md: '150px', sm: '135px', base: '100px' }}
        border={{
          md: '3px solid var(--primary-color)',
          base: '2px solid var(--primary-color)',
        }}
        opacity="1"
      />
    </Flex>
  );
}
