/* eslint-disable no-unused-vars */
import { Box, Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Spacer from 'components/common/Spacer';
import { Icon } from '@chakra-ui/react';
import { ReactComponent as dotSeparatorIcon } from '../../../assets/icons/Dot-Separator-Icon.svg';

export default function PostItemMetadata({
  data = {
    title: 'Lorem Impsum Title Post',
    tags: 'Lorem Tag',
    author: 'John Doe',
    createdAt: 'January 5, 1977',
    excerpt: `  Proident aliquip velit qui commodo officia qui consectetur dolor
  ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
  laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
  Commodo duis dolor anim excepteur. `,
    timeToRead: '9 mins',
  },
  wrapperStyle = {
    width: { base: '', sm: '', md: '', lg: '', xl: '50%' },
    height: { base: '', sm: '', md: '', lg: '', xl: '' },
    padding: { xl: '', lg: '', md: '', sm: '', base: '' },
    top: { base: '', sm: '', md: '', lg: '', xl: '' },
    left: { base: '', sm: '', md: '', lg: '', xl: '' },
    right: { base: '', sm: '', md: '', lg: '', xl: '' },
    background: 'none',
  },
  tagsStyle = {},
  titleStyle = {
    fontWeight: '700',
    fontSize: { lg: '25px', xl: '33px', md: '20px', sm: '18px', base: '15px' },
    lineHeight: { lg: '30px', xl: '41px', md: '25px', sm: '20px' },
  },
  isFeaturedPost = false,
}) {
  const defaultTagsStyle = {
    margin: '0 0 10px 0',
    color: 'rgba(28, 28, 28, 0.5)',
    textTransform: 'uppercase',
    fontSize: { xl: '20px', lg: '18px', md: '16px', base: '15px' },
    lineHeight: { xl: '27px', md: '20px', sm: '18px', base: '10px' },
  };

  return (
    <Box
      className="post-item-meta-wrapper"
      {...wrapperStyle}
      position={isFeaturedPost && 'relative'}
    >
      <Text className="post-item-tags" {...defaultTagsStyle} {...tagsStyle}>
        {data.tags}
      </Text>
      <Text
        // className="title"
        fontFamily="var(--secondary-font-family)"
        fontWeight={titleStyle.fontWeight}
        fontSize={titleStyle.fontSize}
        lineHeight={titleStyle.lineHeight}
      >
        {data.title}
      </Text>
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
        <Text className="author-name">{data.author}</Text>
        <Icon
          width="3px"
          height="3px"
          margin="0 10px 0 10px"
          as={dotSeparatorIcon}
        />
        <Text className="date" margin="0 5px 0 0">
          {data.createdAt}
        </Text>
        <Text
          className="read-time"
          fontSize={{ sm: '12px', xl: '14px', base: '10px' }}
          lineHeight="19px"
        >
          {data.timeToRead && `${data.timeToRead} read`}
        </Text>
      </Flex>
      <Text
        className="excerpt"
        fontSize={{ sm: '16px', base: '14px' }}
        lineHeight="24px"
      >
        {data.excerpt}
      </Text>
    </Box>
  );
}
