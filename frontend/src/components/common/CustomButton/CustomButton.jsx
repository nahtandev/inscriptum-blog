/* eslint-disable no-unused-vars */
import { Button } from '@chakra-ui/react';

export default function CustomButton({
  width = { base: '15%' },
  height,
  value = 'Button',
  fontSize,
  color = "var('--primary-color')",
  backgroundColor = '#fff',
  customStyle = {},
}) {
  return (
    <Button
      borderRadius="10px"
      border="2px solid #1C1C1C"
      fontWeight="700"
      fontFamily="var(--secondary-font-family)"
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      style={customStyle}
    >
      {value}
    </Button>
  );
}
