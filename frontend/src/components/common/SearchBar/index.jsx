/* eslint-disable no-unused-vars */
import { Input, Icon, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ReactComponent as searchIcon } from '../../../assets/icons/search-icon.svg';

export default function SearchBar({
  customStyle = {},
  inputStyle = {},
  placeholder = 'Search...',
}) {
  return (
    <InputGroup {...customStyle}>
      <Input
        type="search"
        fontStyle="normal"
        textStyle="normal"
        border="2px solid #1C1C1C"
        placeholder={placeholder}
        borderRadius="10px"
        focusBorderColor="var(--primary-color)"
        className="search-input"
        {...inputStyle}
      />
      <InputRightElement
        pointerEvents="none"
        fontSize="1.5em"
        children={<Icon as={searchIcon} />}
      />
    </InputGroup>
  );
}
