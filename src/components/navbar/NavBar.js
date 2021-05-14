import React from "react";
import { Flex, Spacer, Heading, Box } from "@chakra-ui/react";

// components
import NavBarButtons from "./NavBarButtons";

export default function NavBar() {
  return (
    <Flex
      direction="row"
      borderBottom="1px"
      borderColor="gray.200"
      align="center"
      justify="space-between"
      p={4}
    >
      <Box>
        <Heading fontWeight="normal" fontStyle="italic">
          Share Uniforms
        </Heading>
      </Box>
      <Spacer />
      <NavBarButtons />
    </Flex>
  );
}
