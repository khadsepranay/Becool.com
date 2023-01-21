

import React from 'react'
import { Image,Box,SimpleGrid,Text,Img } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const Gangs = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("http://localhost:8080/homepage");
      console.log(res);
      setData(res.data.slice(35,39));

      console.log(res)
    };
    getData();
  }, []);

 
  return (
    <>
      <Box className="moment" p="20px" pb="auto">
      <Text color="black" 
     fontSize={"35"}>TOO HOT TO BE MISSED</Text>
        
        
        <SimpleGrid columns={[1,1,1,2]} gap={3}>
          {data.map((items, index) => {
            return (
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                key={index}
                className="imgs"
              >
                <NavLink
               
                >
                  <Img
                  width={"100%"}
                    src={items.url}
                    alt=""
                  />
                </NavLink>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Gangs







