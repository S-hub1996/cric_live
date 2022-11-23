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
        <div className="content">

            <Heading>Welcome</Heading>
            <Heading>To CricLive</Heading>
        </div>
    </Box>
    // </Box>
  );
};

export default Hero;
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
