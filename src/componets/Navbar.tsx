import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as="nav" p={5} alignItems={"center"}>
      <Heading>Subs</Heading>
      <Spacer />
      <HStack>
        <Box bg="gray.300" borderRadius="6px" p="10px">
          M
        </Box>
        <Text>example@gmail.com</Text>
        <Button>Log out</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
