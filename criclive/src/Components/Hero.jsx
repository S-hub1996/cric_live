import { Box } from "@chakra-ui/react";
import React from "react";
import video from "../Assets/heroVideo.mp4";
import "./hero.css";
const Hero = () => {
  // const video=
  return (
    <Box>
      <div className="outer">
        <video src={video} autoPlay loop muted />
      </div>
    </Box>
  );
};

export default Hero;
