/* eslint-disable no-unused-vars */
/**
 * File name: Header.jsx
 * Description: Header Layout Component.
 * Author(s): nathandev
 * Creation date: 02/06/2023
 * Last modified date: 02/06/2023
 */

import './Header.css';
import Logo from 'components/common/Logo';
import CustomButton from 'components/common/CustomButton';
import SearchBar from 'components/common/SearchBar';
import {
  Box,
  Flex,
  Link,
  Show,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useRef } from 'react';
import { routesConfig } from '../../../config';

function SiteHeader() {
  const DefaultLayout = routesConfig[0];
  const { isOpen, onOpen, onClose } = useDisclosure({});
  const btnRef = useRef();

  return (
    <>
      {/* Desktop Header */}
      <Show above="lg">
        <Flex justifyContent="space-between" height="90px" as="header">
          <Box
            display={{ base: 'flex' }}
            alignItems="center"
            width={{ base: '40%' }}
          >
            <Logo width={{ base: '30%' }} />

            <Flex
              as="nav"
              marginLeft="30px"
              width={{ base: '' }}
              alignItems="center"
              height="100%"
            >
              {DefaultLayout.pages.map((link) => (
                <Link
                  key={link.id}
                  className="nav-link"
                  as={ReactRouterLink}
                  to={link.path}
                >
                  {link.name}
                </Link>
              ))}
            </Flex>
          </Box>
          <Box
            height="100%"
            display="flex"
            width={{ base: '40%' }}
            justifyContent="flex-end"
            alignItems="center"
          >
            <SearchBar customStyle={{ marginRight: '10px', width: '70%' }} />

            <CustomButton value="Login" />
          </Box>
        </Flex>
      </Show>

      {/* Tablet & Mobile Header */}
      <Show below="lg">
        <Box
          as="header"
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width="100%"
          mt={'5px'}
        >
          <Box ml={'10px'}>
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              variant="outline"
              color={'whte'}
              colorScheme="var(--primary-color)"
              icon={<HamburgerIcon />}
            />
            <Drawer
              placement="left"
              onClose={onClose}
              isOpen={isOpen}
              finalFocusRef={btnRef}
              onEsc={true}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  <Flex width={'100%'} justifyContent={'space-between'}>
                    <Logo imgWidth={{}} />
                    <IconButton
                      onClick={onClose}
                      variant=""
                      colorScheme="var(--primary-color)"
                      icon={<CloseIcon />}
                    />
                  </Flex>
                </DrawerHeader>
                <DrawerBody display={'flex'} flexDirection={'column'}>
                  <SearchBar
                    customStyle={{
                      marginBottom: '10%',
                      marginRight: '10px',
                      width: '100%',
                    }}
                  />
                  <Box>
                    {DefaultLayout.pages.map((link) => (
                      <LinkBox
                        key={`rs-${link.id}`}
                        as={'div'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        padding={'10px'}
                        marginBottom={'30px'}
                        alignItems={'center'}
                        _hover={{
                          backgroundColor: 'var(--primary-color)',
                          color: '#fff',
                        }}
                      >
                        <LinkOverlay
                          className="nav-link"
                          to={link.path}
                          padding={0}
                          as={ReactRouterLink}
                        >
                          {link.name}
                        </LinkOverlay>

                        <ChevronRightIcon fontSize={'1.5em'} />
                      </LinkBox>
                    ))}
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          <Logo width={{ md: '20%', sm: '25%', base: '40%' }} />
          <CustomButton
            value="Login"
            width={{ base: '20%', md: '10%', sm: '15%' }}
          />
        </Box>
      </Show>
    </>
  );
}
//

export default SiteHeader;
