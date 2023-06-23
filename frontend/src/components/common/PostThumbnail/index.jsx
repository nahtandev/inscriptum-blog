/* eslint-disable no-unused-vars */
import { LinkBox, LinkOverlay, Image } from '@chakra-ui/react';
import postThumbnail from 'assets/images/temp/post-thumbnail.png';
import { Link as RouterLink } from 'react-router-dom';
export default function PostThumbnail({
  src = 'https://via.placeholder.com/500',
  alt = 'Lorem Ipsum Post Thumbnail',
  postLink = '#',
  boxHeight = '100%',
  boxWidth = '100%',
  margin = {},
  //   backgroundImage = false,
}) {
  return (
    <LinkBox width={boxWidth} height={boxHeight}>
      <LinkOverlay href={postLink}>
        <Image
          width="100%"
          height="100%"
          margin={margin}
          src={postThumbnail}
          alt={alt}
          fallbackSrc="https://via.placeholder.com/500"
          objectFit="cover"
        />
      </LinkOverlay>
    </LinkBox>
  );
}
