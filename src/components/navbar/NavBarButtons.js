import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBarButtons() {
  const isLive = process.env.REACT_APP_IS_SITE_LIVE;
  if (!isLive || isLive === "false") {
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
      <Link to="/signup">
        <Button
          bg="blue.500"
          mx="4"
          my="1"
          minW={100}
          color="white"
          variant="solid"
        >
          Sign Up
        </Button>
      </Link>
      <Link to="/login">
        <Button bg="blue.500" mx="4" my="1" minW={100} color="white">
          Log in
        </Button>
      </Link>
    </Flex>
  );
}
