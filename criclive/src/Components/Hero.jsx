import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import React from "react";
import video from '../Assets/heroVideo.mp4'
import './hero.css'
const Hero = () => {
  // const video=
  return (
    // <Box >
<Box>
        {/* <div className="overlay"></div> */}
        <video src={video} autoPlay loop muted />
       <h1 className="content">Welcome to criclive</h1>
    </Box>
    // </Box>
  );
};

export default Hero;
     
  

