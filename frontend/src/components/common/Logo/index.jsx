/* eslint-disable no-unused-vars */
import { Image, Link } from '@chakra-ui/react';
import LogoWithoutBg from 'assets/images/logo-no_bg.svg';

export default function Logo({
  width = { base: '150px' },
  imgWidth = { base: '100%' },
}) {
  return (
    <Link href="/" width={{ ...width }}>
      <Image width={imgWidth} src={LogoWithoutBg} alt="Inscriptum Logo" />
    </Link>
  );
}
