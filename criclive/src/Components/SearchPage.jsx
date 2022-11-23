import { Image,Input,Button,Flex } from '@chakra-ui/react'
import React from 'react'

const SearchPage = () => {
  return (
    <div>
<Flex m='4' gap={4}>

      <Input placeholder='Search teams, Players etc'/>
      <Button w='40%' _hover={'none'} color='white'  bg='#984337'>Search</Button>
</Flex>
        <Image src='https://img.freepik.com/premium-vector/cricket-championship-concept_1302-17559.jpg?auto=format&h=200' w='100%'/>

    </div>
  )
}

export default SearchPage