/* eslint-disable no-unused-vars */
import { Box, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
export default function PostThumbnail({
  src = 'https://via.placeholder.com/500',
  alt = 'Lorem Ipsum Post Thumbnail',
  postLink = '#',
  wrapperStyle = {},
  imgStyle = {},
}) {
  const defaultWrapperStyle = {
    height: '100%',
    width: '100%',
  };
  const defaultImgStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <Box {...defaultWrapperStyle} {...wrapperStyle}>
      <Image
        objectFit={'cover'}
        {...defaultImgStyle}
        {...imgStyle}
        src={src}
        alt={alt}
        fallbackSrc="https://via.placeholder.com/500"
      />
    </Box>
  );
}
