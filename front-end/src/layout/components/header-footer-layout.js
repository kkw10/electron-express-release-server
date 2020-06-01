import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { Header } from '../../header';
import { Footer } from '../../footer';

export const HFLayout = ({ children }) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      height="100vh"
    >
      <Header />
      <Box>
        { children }
      </Box>
      <Footer />
    </Flex>
  )
}