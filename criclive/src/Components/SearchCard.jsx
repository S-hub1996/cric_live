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
  
  export default function SearchCard({match}) {

    return (
  
      <Center py={6} >
        <Box
          maxW={'300px'}
          h={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>

  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} textAlign='center'>
                 {match.name}
              </Heading> 
              
              <Text color={'gray.500'}>Start Date:  {match.startDate}</Text>
              <Text color={'gray.500'}>Matches: {match.matchs}</Text>
              <Text color={'gray.500'}>End Date: {match.endDate}</Text>
              <Text color={'gray.500'} textAlign='center'>ODI: {match.odi}</Text>
              <Text color={'gray.500'} textAlign='center'>T20: {match.t20}</Text>
              <Text color={'gray.500'} textAlign='center'>test: {match.test}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
               See More
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }