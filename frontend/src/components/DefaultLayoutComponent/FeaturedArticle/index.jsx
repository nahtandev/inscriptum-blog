/* eslint-disable no-unused-vars */
import './FeaturedArticle.css';
import { Box, LinkBox, LinkOverlay, Text, Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { ReactComponent as dotSeparatorIcon } from '../../../assets/icons/Dot-Separator-Icon.svg';
import FeaturedArticleCover from '../../../assets/images/temp/featured-post-cover.png';

export default function FeaturedArticle() {
  return (
    <LinkBox
      className="homepage-featured-article"
      as="article"
      background={`linear-gradient(0deg, rgba(28, 28, 28, 0.1), rgba(28, 28, 28, 0.1)), url(${FeaturedArticleCover});`}
      backgroundPosition={{ base: 'center' }}
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: 'cover' }}
      height={{ base: '375px', xl: '530px', lg: '500px', sm: '400px' }}
      width={{ base: '100%' }}
    >
      <Box
        className="meta"
        backgroundColor={{ base: '#fff' }}
        height={{ xl: '85%', lg: '80%', md: '90%', sm: '85%', base: '85%' }}
        width={{ xl: '40%', lg: '45%', md: '55%', sm: '80%', base: '90%' }}
        marginLeft={{ md: '30px', sm: '20px', base: '10px' }}
        position={{ base: 'relative' }}
        top={{ sm: '0px', base: '20px' }}
        padding={{
          xl: '50px 40px 40px 40px',
          lg: '30px 25px 25px 25px',
          md: '20px 25px 25px 25px',
          sm: '15px 20px 20px 20px',
          base: '15px',
        }}
      >
        <Text
          fontSize={{ xl: '20px', lg: '18px', md: '16px', base: '15px' }}
          lineHeight={{ xl: '27px', md: '20px', sm: '18px', base: '10px' }}
          color="rgba(28, 28, 28, 0.5)"
          textTransform="uppercase"
          className="label"
          margin="0 0 10px 0"
        >
          Featured Article
        </Text>
        <LinkOverlay
          href="#"
          className="title"
          fontFamily="var(--secondary-font-family)"
          fontWeight="700"
          fontSize={{
            lg: '25px',
            xl: '33px',
            md: '20px',
            sm: '18px',
            base: '15px',
          }}
          lineHeight={{ lg: '30px', xl: '41px', md: '25px', sm: '20px' }}
        >
          World’s Most Dangerous Technology Ever Made.
        </LinkOverlay>
        <Flex
          color="rgba(28, 28, 28, 0.5)"
          fontSize={{ xl: '16px', sm: '15px', base: '13px' }}
          lineHeight={{ xl: '22px', lg: '20px', sm: '18px', base: '14px' }}
          margin={{
            xl: '10px 0 10px 0',
            lg: '8px 0 8px 0',
            md: '6px 0 6px 0',
            sm: '10px 0 10px 0',
            base: '5px 0 5px 0',
          }}
          alignItems="center"
        >
          <Text className="author-name">Ralph Hawkins</Text>
          <Icon
            width="3px"
            height="3px"
            margin="0 10px 0 10px"
            as={dotSeparatorIcon}
          />
          <Text className="date" margin="0 5px 0 0">
            May 7, 2019
          </Text>
          <Text
            className="read-time"
            fontSize={{ sm: '12px', xl: '14px', base: '10px' }}
            lineHeight="19px"
          >
            (10 mins read)
          </Text>
        </Flex>
        <Text className="excerpt" fontSize={{ sm: '16px', base: '14px' }} lineHeight="24px">
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </Text>
      </Box>
    </LinkBox>
  );
} 
