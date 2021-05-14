import React from "react";
import { Flex, Button } from "@chakra-ui/react";

export default function NavBarButtons() {
  if (process.env.REACT_APP_IS_SITE_LIVE === "false") {
    return null;
  }
  return (
    <Flex
      direction={["column", "row", "row", "row", "row"]}
      align="center"
      justify={["center", "flex-end", "flex-end", "flex-end", "flex-end"]}
      w="max"
      fontSize="xl"
    >
      <Button bg="blue.500" mx="4" my="1" minW={100} color="white">
        Sign Up
      </Button>
      <Button bg="blue.500" mx="4" my="1" minW={100} color="white">
        Log in
      </Button>
    </Flex>
  );
}
