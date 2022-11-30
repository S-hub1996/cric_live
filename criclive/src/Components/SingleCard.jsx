import {
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SingleCard({ match }) {
// const [TeamA,setTeamA]=useState()
// const [TeamB,setTeamB]=useState()
// console.log(match.score)
useEffect(()=>{
//   if(match.score){
// let scoreA= match.score[0]
// let scoreB= match.score[1]
// setTeamA(scoreA)
// setTeamB(scoreB)
// // console.log(scoreA,scoreB)
// console.log(TeamA)
// console.log(TeamB)
  // }

},[])
  return (
    <Stack minH={"750px"} my={'16'} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"2xl"}>
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

       {/* {
        match.score?  <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Stats</Th>
              <Th>{TeamA.inning}</Th>
              <Th >{TeamB.inning}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Overs</Td>
              <Td>{TeamA.o}</Td>
              <Td>{TeamB.o}</Td>
            </Tr>
            <Tr>
              <Td>Runs</Td>
              <Td>{TeamA.r}</Td>
              <Td >{TeamB.r}</Td>
            </Tr>
            <Tr>
              <Td>Wickets</Td>
              <Td>{TeamA.w}</Td>
              <Td >{TeamB.w}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Results</Th>
              <Th>: {match.status}</Th>
             
             
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
                 
      : "null"
       }   */}

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
