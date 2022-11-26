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
        <div className="outer">
        <video src={video} autoPlay loop muted />
              {/* <Heading className="heading">wlcm to criclive</Heading> */}
              </div>
    </Box>
    // </Box>
  );
};

export default Hero;
     
  

