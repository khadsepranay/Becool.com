
import React from 'react'
import { Image,Box,SimpleGrid,Text,Img } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const Homes = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const getDataa = async () => {
      let ress = await axios.get("http://localhost:8080/homepage");
      console.log(ress);
      setData(ress.data.slice(19,31));
    };
    getDataa();
  }, []);

 
  return (
    <>
      <Box className="moment" p="20px" pb="auto">
      <Text color="black" 
     fontSize={"35"}>TRENDING CATEGORIES</Text>
                
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

export default Homes







