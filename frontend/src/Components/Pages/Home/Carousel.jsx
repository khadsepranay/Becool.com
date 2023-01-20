import React from "react";
import { Box, IconButton, useBreakpointValue,Button,Icon } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {  BiRightArrowAlt } from "react-icons/bi";
import {  AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
import { AiFillStar } from 'react-icons/ai'

// And react-slick as our Carousel Lib
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { AiFillDollarCircle } from "react-icons/ai";
import { setItem } from "./utility";
import { useNavigate } from "react-router";
import {
  Text,
  Card,
  CardBody,
  Link,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);
  const navigate=useNavigate();
  const handleClick=(item)=>{
    setItem("singleproduct",item)
  navigate("/jewelery/singleproduct")
}

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/homepage")
      .then((response) => {
        // console.log("res", response.data);
        console.log(response)
        console.log(data)
        setData(response.data.slice(0,12));
      });
  }, []);

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"100%"}
     
      overflow={"hidden"}
    >
     
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >  
   <Button><AiFillCaretLeft color="black" /></Button>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0% ,-50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
     <Button><AiFillCaretRight color="black" /></Button>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((el, index) => (
          <Card cursor="pointer" onClick={()=>handleClick(el)} 
           maxW="sm">
            <CardBody>
              <Image
              columns={[1, 1, 1,3]}
                width="150%"
                height="500px"
                src={el.url}
                alt="carousel img"
                borderRadius="lg"
              />
              
            </CardBody>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}