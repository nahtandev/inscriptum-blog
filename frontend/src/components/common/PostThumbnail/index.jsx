/* eslint-disable no-unused-vars */
import { Box, Image } from '@chakra-ui/react';
import postThumbnail from 'assets/images/temp/post-thumbnail.png';
import { Link as RouterLink } from 'react-router-dom';
export default function PostThumbnail({
  src = 'https://via.placeholder.com/500',
  alt = 'Lorem Ipsum Post Thumbnail',
  postLink = '#',
  height = '100%',
  width = '100%',
  margin = {},
}) {
  return (
    <Box width={width} height={height}>
      <Image
        width="100%"
        height="100%"
        margin={margin}
        src={postThumbnail}
        alt={alt}
        fallbackSrc="https://via.placeholder.com/500"
        objectFit="cover"
      />
    </Box>
  );
}
