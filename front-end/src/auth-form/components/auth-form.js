import React from 'react';
import { 
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex
} from '@chakra-ui/core';

export const AuthForm = () => {
  return (
    <FormControl
      as="form"
      w="350px"
      p="1rem"
      borderWidth="1px"
      roundedBottomRight="md"
      roundedTopRight="md"
    >
      <FormLabel
        htmlFor="email"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          Email address
        </Box>
        <Box
          fontSize="xs"
          color="gray.300"
        >
          [required]
        </Box>
      </FormLabel>
      <Input
        id="email"
        placeholder="email"
        type="email"
        bg="gray.100"
        py={2}
        px={4}
        mb={4}
        rounded="md"
        fontSize="xs"
        _hover={{
          borderColor: "gray.200",
          bg: "gray.200"
        }}
        _focus={{
          outline: "none",
          bg: "white",
          boxShadow: "outline",
          borderColor: "gray.300"
        }}
      />
      <FormLabel
        htmlFor="password"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          Password
        </Box>
        <Box
          fontSize="xs"
          color="gray.300"
        >
          [required]
        </Box>
      </FormLabel>
      <Input
        id="password"
        placeholder="password"
        type="password"
        bg="gray.100"
        py={2}
        px={4}
        mb={4}
        rounded="md"
        fontSize="xs"
        _hover={{
          borderColor: "gray.200",
          bg: "gray.200"
        }}
        _focus={{
          outline: "none",
          bg: "white",
          boxShadow: "outline",
          borderColor: "gray.300"
        }}         
      />
      <Flex
        flexDirection="row-reverse"
      >
        <Button
          mt={2}
          variantColor="blue"
          type="submit"
          rounded="md"
          fontSize="xs"
        >
          Login
        </Button>      
      </Flex>
    </FormControl>
  )
};