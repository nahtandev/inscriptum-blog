/* eslint-disable no-unused-vars */
import { Box, Flex, VStack } from '@chakra-ui/react';
import PostItemMetadata from 'components/common/PostItemMetadata';
import PostThumbnail from 'components/common/PostThumbnail';
import Spacer from 'components/common/Spacer';

export default function PostList({
  data = [{ id: 'pl-1' }, { id: 'pl-2' }, { id: 'pl-3' }],
  wrapperWith = { xl: '50%', lg: '70%', md: '80%', sm: '80%', base: '90%' },
  thumbnailStyle = {
    width: { sm: '45%', base: '100%' },
    height: { sm: '100%', base: '50%' },
    margin: {},
  },
  wrapperStyle = {
    width: { sm: '50%', base: '100%' },
  },
}) {
  return (
    <VStack width={wrapperWith} className="post-list-wrapper">
      {data.map((post) => {
        return (
          <>
            <Flex
              //   backgroundColor="blue.100"
              key={post.id}
              className="post-item-wrapper"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <PostThumbnail
                margin={thumbnailStyle.margin}
                boxWidth={thumbnailStyle.width}
                boxHeight={thumbnailStyle.height}
              />
              <PostItemMetadata wrapperStyle={{ width: wrapperStyle.width }} />
            </Flex>
            <Spacer />
          </>
        );
      })}
    </VStack>
  );
}
