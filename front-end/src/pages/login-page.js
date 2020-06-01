import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Image } from '@chakra-ui/core';
import { AuthForm } from '../auth-form';
import logo from '../assets/icons/marlin_logo_w.svg';

export const  LoginPage = () => {
  return (
    <Flex
      h="100vh"
      justify="center"
      alignItems="center"
    >
      <Flex>
        <Box
          p="10px"
          background="#3182ce"
          roundedTopLeft="md"
          roundedBottomLeft="md"
        >
          <Link
            to="/"
          >
            <Image
              size="70px"
              src={logo}
            />          
          </Link>
        </Box>
        <AuthForm />      
      </Flex>
    </Flex>
  )
}