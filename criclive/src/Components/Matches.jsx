import { Box } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { getMatches } from './api'
const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
      getMatches()
        .then((data) => {
          console.log(data);
          setMatches(data.data);
        })
        .catch((error) => {});
    }, []);
  
console.log(matches)
  return (
    <SimpleGrid columns={[1, 2, 3]}>
        {matches?.map((match) =>{
           return <Box m={2}>
                {match.name}

            </Box>
        })}
    </SimpleGrid>
  )
}

export default Matches