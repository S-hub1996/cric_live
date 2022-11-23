import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import React from "react";
import video from '../Assets/heroVideo.mp4'
import './hero.css'
const Hero = () => {
  // const video=
  return (
    // <Box >
<div className='main'>
        {/* <div className="overlay"></div> */}
        <video src={video} autoPlay loop muted />
        <div className="content">


            <Heading>Welcome</Heading>
            <Heading>To CricLive</Heading>
        </div>
    </div>
    // </Box>
  );
};

export default Hero;
