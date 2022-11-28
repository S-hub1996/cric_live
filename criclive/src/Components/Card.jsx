import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getMatchDetail } from './api';
import { Link as Rlink } from 'react-router-dom';
export default function Cards({match}) {
    const [teamA,setTeamA]=useState({})
    const [teamB,setTeamB]=useState({})
    const [id,setid]=useState("")
//   console.log(match?.teamInfo)
useEffect(()=>{
    if(match?.teamInfo?.length===2){
        setTeamA(match.teamInfo[0]) 
        setTeamB(match.teamInfo[1])
        setid(match.id) 
      }
},[])



  return (
    
    <>
  
    <Center py={6} >
      <Box
        maxW={'400px'}
        h={'600px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
         src={teamA.img}
          objectFit={'cover'}
        />

        <Flex justify={'center'} my={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://www.sportzcraazy.com/wp-content/uploads/2019/08/43439811-stock-vector-symbol-competition-vs-vector-illustration-.jpg'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />    
        </Flex>
        
        <Image
        
          h={'120px'}
          w={'full'}
          src={teamB.img}
          objectFit={'cover'}
        />

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} textAlign='center'>
               {match.name}
            </Heading> 
            
            <Text color={'gray.500'}>Date:  {match.date}</Text>
            <Text color={'gray.500'}>Match Type : {match.matchType}</Text>
            <Text color={'gray.500'}>Status: {match.status}</Text>
            <Text color={'gray.500'} textAlign='center'>Venue: {match.venue}</Text>
          </Stack>


          <Rlink to={`match/${match.id}`}> 
          <Button
           onClick={getMatchDetail}

            w={'full'}
            
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
             See More
          </Button>
          </Rlink>
        </Box>
      </Box>
    </Center>
    </>
  );
}