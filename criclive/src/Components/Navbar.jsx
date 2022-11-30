import { React } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ball from "../Assets/ball.jpg";
import { Link as Rlink } from "react-router-dom";
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box zIndex={999} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Rlink to='/'>  <Avatar size={"md"} src={ball} /></Rlink>
         
             <Flex>
             <Text fontSize={"lg"} fontWeight={"bold"} m={2} p={1}>
             <Rlink to='/'>  CricLive</Rlink>
          
          </Text>
          <Text fontSize={"lg"} fontWeight={"bold"} m={2} p={1}>
            <Rlink to='/search'>
              Search</Rlink>
              </Text>
             </Flex>
    

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
       
        </Flex>
      </Box>
    </>
  );
}
