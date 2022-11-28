import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SingleCard({ match }) {
  return (
    <Stack minH={"750px"} my={'16'} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              {match.name}
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              {match.date}
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "xl", lg: "2xl" }} color={"gray.600"}>
            Match Type : {match.matchType}
          </Text>
          <Text fontSize={{ base: "xl", lg: "2xl" }} color={"gray.600"}>
            Match Status : {match.status}
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://media.giphy.com/media/o3eUZdKGqV2GQ/giphy-downsized-large.gif"
          }
        />
      </Flex>
    </Stack>
  );
}
