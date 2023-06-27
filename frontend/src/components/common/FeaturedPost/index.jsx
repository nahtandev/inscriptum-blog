/* eslint-disable no-unused-vars */
import PostItemMetadata from 'components/common/PostItemMetadata';
import { Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function FeaturedPost({
  metaDataStyle = {},
  wrapperStyle = {},
  postData = {},
}) {
  const defaultStyle = {
    wrapper: {
      background: '#',
      backgroundPosition: { base: 'center' },
      backgroundRepeat: 'no-repeat',
      backgroundSize: { base: 'cover' },
      height: { base: '375px', xl: '530px', lg: '500px', sm: '400px' },
      width: { base: '100%' },
    },
    metaData: {
      padding: {
        xl: '50px 40px 40px 40px',
        lg: '30px 25px 25px 25px',
        md: '20px 25px 25px 25px',
        sm: '15px 20px 20px 20px',
        base: '15px',
      },
      top: { lg: '45px', base: '25px' },
      left: { xl: '55%', lg: '45%', md: '40%', sm: '15%', base: '5%' },
      background: '#fff',
      width: { xl: '40%', lg: '45%', md: '55%', sm: '80%', base: '90%' },
      height: { xl: '85%', lg: '80%', md: '90%', sm: '85%', base: '85%' },
    },
  };
  return (
    <LinkBox
      className="featured-post"
      as="article"
      {...defaultStyle.wrapper}
      {...wrapperStyle}
    >
      <LinkOverlay href={postData.link}>
        <PostItemMetadata
          isFeaturedPost={true}
          wrapperStyle={{ ...defaultStyle.metaData, ...metaDataStyle }}
          data={postData}
        />
      </LinkOverlay>
    </LinkBox>
  );
}
