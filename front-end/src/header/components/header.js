import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Image } from '@chakra-ui/core';
import logo from '../../assets/icons/marlin_logo.svg';

export const Header = () => {
  return (
    <Flex
      w="100%"
      px="10px"
      py="5px"
      color="white"
      justify="space-between"
      verticalAlign="center"
      alignItems="center"
      borderWidth="1px"
    >
      <h1>
        <Link to="/">
          <Image
            size="40px"
            src={logo}
          />
        </Link>
      </h1>
      <Button
        size="xs"
        variantColor="blue"
      >
        <Link to="/auth/login">
          로그인
        </Link>
      </Button>
    </Flex>
  )
};