/* eslint-disable no-unused-vars */
import { Box, Center, Flex, VStack, Divider, Text } from '@chakra-ui/react';
import PostList from 'components/common/PostList';
import Spacer from 'components/common/Spacer';
import FeaturedPost from 'components/common/FeaturedPost';
import HomePageFirstFeaturedPost from '../../../assets/images/temp/featured-post-cover.png';
import HomePageSecondFeaturedPost from '../../../assets/images/temp/featured-post-banner.png';

export default function Home() {
  return (
    <Flex
      direction={'column'}
      width={'100%'}
      paddingTop={{ base: '25px' }}
      alignItems="center"
    >
      <FeaturedPost
        metaDataStyle={{
          marginLeft: { md: '30px', sm: '20px', base: '10px' },
          top: { sm: '0px', base: '20px' },
          left: '0',
        }}
        wrapperStyle={{
          background: `linear-gradient(0deg, rgba(28, 28, 28, 0.1), rgba(28, 28, 28, 0.1)), url(${HomePageFirstFeaturedPost});`,
        }}
        postData={{
          tags: 'Featured Article',
          title: 'World’s Most Dangerous Technology Ever Made.',
          link: '#first-link',
          author: 'Ralph Hawkins',
          createdAt: 'May 7, 2019',
          excerpt: `Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.`,
          timeToRead: '10 mins read',
        }}
      />

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
        width={{
          xl: '190px',
          lg: '160px',
          md: '150px',
          sm: '135px',
          base: '100px',
        }}
        border={{
          md: '3px solid var(--primary-color)',
          base: '2px solid var(--primary-color)',
        }}
        opacity="1"
      />

      <Spacer />

      <PostList
        wrapperStyle={{
          width: { xl: '50%', lg: '70%', md: '80%', sm: '80%', base: '90%' },
        }}
        metaDataWrapperStyle={{ width: { sm: '50%', base: '100%' } }}
        thumbnailStyle={{
          width: { sm: '45%', base: '100%' },
          height: { sm: '100%', base: '50%' },
          margin: {},
        }}
        postData={[{ id: 'pl-1' }, { id: 'pl-2' }, { id: 'pl-3' }]}
      />

      <Spacer />

      <FeaturedPost
        wrapperStyle={{
          background: `url(${HomePageSecondFeaturedPost})`,
        }}
        postData={{
          title: 'Laborum Ullamco Sunt id ut Sunt',
          tags: 'Interior',
          author: 'Bessie Hawkins',
          createdAt: 'May 7, 2019',
          excerpt:
            'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
          timeToRead: '10 mins',
          link: '#second-link',
        }}
      />

      <Spacer />
    </Flex>
  );
}
