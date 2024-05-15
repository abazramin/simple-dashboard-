import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Setting = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      minH="80vh"
      minW="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex>
        <Box
          minW="400px"
          border="1px solid #eee"
          p={5}
          borderRadius="10px"
          display="flex"
          justifyContent="space-between"
        >
          <Text>Dark Mode</Text>
          <Switch
            size="md"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Setting;
