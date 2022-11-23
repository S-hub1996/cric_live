import { Box } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
          <Box>
         
       <AspectRatio maxW='560px' ratio={1}>
  <iframe 
     title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
          </Box>
  )
}

export default Hero