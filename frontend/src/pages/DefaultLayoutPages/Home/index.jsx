/* eslint-disable no-unused-vars */
import {
  Box,
  Center,
  Flex,
  VStack,
  Divider,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import PostList from 'components/common/PostList';
import Spacer from 'components/common/Spacer';
import FeaturedPost from 'components/common/FeaturedPost';
import {
  HomePageFirstFeaturedPost,
  HomePageSecondFeaturedPost,
  homepagePostList1,
  homepagePostList2,
  hotTagsList,
} from 'placeholder';

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
          background: `linear-gradient(0deg, rgba(28, 28, 28, 0.1), rgba(28, 28, 28, 0.1)), url(${HomePageFirstFeaturedPost.cover});`,
        }}
        postData={HomePageFirstFeaturedPost}
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
          width: { xl: '60%', lg: '70%', md: '80%', sm: '80%', base: '90%' },
        }}
        metaDataWrapperStyle={{
          width: { sm: '50%', base: '100%' },
          tagsStyle: {
            mt: {
              base: '20px',
              sm: '0px',
            },
          },
        }}
        thumbnailStyle={{
          width: { sm: '45%', base: '100%' },
          height: { sm: '100%', base: '50%' },
          margin: {},
        }}
        postData={homepagePostList1}
      />

      <Spacer />

      <FeaturedPost
        wrapperStyle={{
          background: `url(${HomePageSecondFeaturedPost.cover})`,
        }}
        postData={HomePageSecondFeaturedPost}
      />

      <Spacer />

      <Box
        display={'flex'}
        flexDirection={{ base: 'column', lg: 'row' }}
        width={{ lg: '100%' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={{ lg: '70%', md: '100%' }}
        >
          <PostList
            wrapperStyle={{
              width: {
                xl: '85%',
                lg: '100%',
                base: '90%',
              },
            }}
            postItemWrapperStyle={{
              width: '100%',
            }}
            thumbnailStyle={{
              width: { sm: '45%', base: '100%', xl: '30%', md: '40%' },
            }}
            metaDataWrapperStyle={{
              width: { sm: '50%', base: '100%', xl: '65%', md: '55%' },

              tagsStyle: {
                mt: {
                  base: '20px',
                  sm: '0px',
                },
              },
            }}
            postData={homepagePostList2}
          />
        </Box>
        <Box
          width={{ lg: '20%' }}
          display={{ base: 'none', lg: 'block' }}
          mr={{ xl: '20px' }}
          className="homepage-tags-list"
        >
          <Text
            fontWeight={{ lg: '700' }}
            fontSize={{ lg: '20px' }}
            mb={{ lg: '5px' }}
          >
            tags.
          </Text>

          <Box>
            {hotTagsList.map((tags) => (
              <LinkBox
                fontSize={{ lg: '16px' }}
                width={{ lg: '80%' }}
                lineHeight={{ lg: '45px' }}
                mb={{ lg: '5px' }}
              >
                <LinkOverlay href={tags.link}>{tags.name}</LinkOverlay>
              </LinkBox>
            ))}
          </Box>
        </Box>
        <Box
          width={{ base: '100%' }}
          display={{ lg: 'none', base: 'flex' }}
          flexDirection={{ base: 'column' }}
          alignItems={{ base: 'center' }}
          mr={{ xl: '20px' }}
          className="homepage-tags-list"
        >
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
            marginTop={{ base: '10px' }}
          >
            Hot Tags
          </Text>
          <Divider
            width={{
              md: '90px',
              sm: '60px',
              base: '50px',
            }}
            border={{
              md: '3px solid var(--primary-color)',
              base: '2px solid var(--primary-color)',
            }}
            opacity="1"
          />

          <Spacer height="30px" />

          <Box
            display="flex"
            flexWrap="wrap"
            width="80%"
            justifyContent="center"
          >
            {hotTagsList.map((tags) => (
              <LinkBox
                border="1px solid var(--primary-color)"
                borderRadius="50px"
                display="grid"
                placeItems="center"
                padding={{ base: '10px' }}
                textTransform="lowercase"
                margin={{ md: '10px', sm: '8px', base: '5px' }}
              >
                <LinkOverlay href={tags.link}>#{tags.name}</LinkOverlay>
              </LinkBox>
            ))}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
