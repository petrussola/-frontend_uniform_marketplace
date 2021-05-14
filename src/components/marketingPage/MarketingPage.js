import React from "react";
import { Flex, Text, Button, Center, Image } from "@chakra-ui/react";

// media
import uniform from "../../media/uniform_1.jpg";

export default function MarketingPage() {
  return (
    <Flex
      direction={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
      ]}
      align="center"
      justify={["center", "center", "center", "center", "space-around"]}
      h="100%"
      py="4"
    >
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        p={[2, 2, 2, 4]}
        w={["100%", "100%", "100%", "100%", "50%"]}
      >
        <Text
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          fontWeight="bold"
          pb={4}
        >
          School uniforms are expensive, and kids outgrow them.{" "}
          <span style={{ color: "#3182CE" }}>Very fast.</span>
        </Text>
        <Text fontSize={["xl", "xl", "2xl", "2xl", "2xl"]} pb={4}>
          Marketplace for communities of parents to donate or sell school
          uniforms so others can reuse them.
        </Text>
        <Button
          p={4}
          fontSize="lg"
          bg="blue.500"
          w="100%"
          _hover={{ bg: "blue.500" }}
          _focus={{ bg: "blue.500" }}
          _active={{ bg: "blue.500" }}
          color="white"
        >
          Coming soon to your local school
        </Button>
      </Flex>
      <Center
        width="100%"
        p={4}
        w={["100%", "100%", "100%", "100%", "50%"]}
        id="image-container"
      >
        <Image
          src={uniform}
          alt="school uniform"
          h="auto"
          w="65%"
          borderRadius="md"
          boxShadow="lg"
          fallbackSrc="https://via.placeholder.com/170x120"
        />
      </Center>
    </Flex>
  );
}
