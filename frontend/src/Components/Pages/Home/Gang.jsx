
import React from 'react'
import { Image,Box,SimpleGrid,Text,Img } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const Gang = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("http://localhost:8080/homepage")
      console.log(res);
      setData(res.data.slice(31,35));
    };
    getData();
  }, []);

 
  return (
    <>
      <Box className="moment" p="20px" pb="auto">
     <Text color="black" 
     fontSize={"35"}>THE GANG'S FAVOURITE</Text>
        
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
      <img style={{ width:"100%",marginBottom:"10px"}} src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" alt="" />
      
      <img style={{ width:"100%"}} src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt="" />
    </>
  )
}

export default Gang







