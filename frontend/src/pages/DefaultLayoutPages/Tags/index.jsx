/* eslint-disable no-unused-vars */
import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react';
import SearchBar from 'components/common/SearchBar';
import Spacer from 'components/common/Spacer';
import { hotTagsList } from 'placeholder';

function Tags() {
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
    >
      <Spacer
        height={{
          xl: '220px',
          lg: '180px',
          md: '150px',
          sm: '120px',
          base: '100px',
        }}
      />

      <SearchBar
        placeholder="Find the topics you care about..."
        customStyle={{
          width: { lg: '50%', md: '70%', base: '80%' },
        }}
        inputStyle={{ borderRadius: '25px' }}
      />

      <Spacer height={{ base: '30px', sm: '50px' }} />

      <Box display="flex" flexWrap="wrap" width="80%" justifyContent="center">
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
  );
}

export { Tags as default };
