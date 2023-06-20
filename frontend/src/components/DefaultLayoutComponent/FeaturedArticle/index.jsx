/* eslint-disable no-unused-vars */
import './FeaturedArticle.css';
import { Box, Text, Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { ReactComponent as dotSeparatorIcon } from '../../../assets/icons/Dot-Separator-Icon.svg';
import FeaturedArticleCover from '../../../assets/images/temp/featured-post-cover.png';

export default function FeaturedArticle() {
  return (
    <Box
      background={`linear-gradient(0deg, rgba(28, 28, 28, 0.1), rgba(28, 28, 28, 0.1)), url(${FeaturedArticleCover});`}
      className="homepage-featured-article"
      width={'100%'}
    >
      <Box className="meta">
        <Text>Featured Article</Text>
        <Text className="title">
          World’s Most Dangerous Technology Ever Made.
        </Text>
        <Flex>
          <Text className="author-name">Ralph Hawkins</Text>
          <Icon as={dotSeparatorIcon} />
          <Text className="date">May 7, 2019</Text>
          <Text className="read-time">(10 mins read)</Text>
        </Flex>
        <Text className="excerpt">
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </Text>
      </Box>
    </Box>
  );
}
