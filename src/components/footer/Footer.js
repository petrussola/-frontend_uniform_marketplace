import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      direction={["column", "column", "row", "row", "row"]}
      align="center"
      justify="center"
      h="min"
      p={4}
      borderTop="1px"
      borderColor="gray.200"
    >
      <Text
        fontSize={["sm", "sm", "lg", "lg", "lg"]}
        color="gray.500"
        textAlign="center"
      >
        © 2021 ShareUniform.com. All rights reserved.
      </Text>
      <Text fontSize={["sm", "sm", "md", "lg", "lg"]} color="gray.500" pl={1}>
        Made with{" "}
        <span role="img" aria-label="blue heart emoji">
          💙
        </span>{" "}
        by{" "}
        <Link href="https://www.peresola.com" isExternal color="blue.600">
          peresola.com
        </Link>
      </Text>
    </Flex>
  );
}
