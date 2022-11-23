import { Heading } from '@chakra-ui/react';
import React from 'react'
import Hero from "./Hero";
import Matches from "./Matches";
const Home = () => {
  return (
    <div>
        <Hero/>
{/* <BgHero/> */}
<Heading textAlign='center' m='2' fontFamily='sans-serif'>Current Matches</Heading>
<Matches/>
    </div>
  )
}

export default Home