import React from 'react';
import { Flex, Button, Box } from '@chakra-ui/core';

export const Header = () => {
  return (
    <Flex
      bg="coral"
      w="100%"
      px="10px"
      py="5px"
      color="white"
      justify="space-between"
      verticalAlign="center"
      alignItems="center"
    >
      <Box>
        My Electron Release Server
      </Box>
      <Button
        size="xs"
        variantColor="teal"
      >
        로그인
      </Button>
    </Flex>
  )
};