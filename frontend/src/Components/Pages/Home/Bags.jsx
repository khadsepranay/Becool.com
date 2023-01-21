

import React from 'react'
import { Image,Box,SimpleGrid,Text,Img } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
// import Gangs from './Gangs';

const Bags = () => {

    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("http://localhost:8080/homepage")
      console.log(res);
      setData(res.data.slice(39,45));
    };
    getData();
  }, []);


  
 
  return (
    <>
      <Box className="moment" p="20px" pb="auto">
      <Text color="black" 
     fontSize={"35"}>CATEGORIES TO BAG</Text>
                
        <SimpleGrid columns={[1, 3, 4, 6]} gap={3}>
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
                  boxSize={"350"}
                    // borderRadius="20px 20px 0px 0px"
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

export default Bags







