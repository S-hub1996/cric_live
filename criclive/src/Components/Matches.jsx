import { Box } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { getMatches } from './api'
import Cards from './Card';
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
           return <Cards match={match}/>
        })}
    </SimpleGrid>
  )
}

export default Matches