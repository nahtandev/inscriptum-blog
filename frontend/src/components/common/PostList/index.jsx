/* eslint-disable no-unused-vars */
import { LinkBox, LinkOverlay, Box, Flex, VStack } from '@chakra-ui/react';
import PostItemMetadata from 'components/common/PostItemMetadata';
import PostThumbnail from 'components/common/PostThumbnail';
import Spacer from 'components/common/Spacer';

export default function PostList({
  postData = [],
  wrapperStyle = {},
  thumbnailStyle = {},
  metaDataWrapperStyle = {},
  postItemWrapperStyle = {},
}) {
  return (
    <VStack {...wrapperStyle} className="post-list-wrapper">
      {postData.map((post) => {
        return (
          <>
            <LinkBox
              //   backgroundColor="blue.100"
              key={post.id}
              className="post-item-wrapper"
              {...postItemWrapperStyle}
            >
              <LinkOverlay
                display="flex"
                href={post.link}
                width="100%"
                height="100%"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                <PostThumbnail
                  imgStyle={{}}
                  src={post.cover}
                  wrapperStyle={thumbnailStyle}
                />
                <PostItemMetadata
                  data={{ ...post }}
                  wrapperStyle={{ ...metaDataWrapperStyle }}
                  tagsStyle={
                    metaDataWrapperStyle.tagsStyle && {
                      ...metaDataWrapperStyle.tagsStyle,
                    }
                  }
                />
              </LinkOverlay>
            </LinkBox>
            <Spacer />
          </>
        );
      })}
    </VStack>
  );
}
