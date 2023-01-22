
import React from 'react'
import { Image,Box,SimpleGrid,Text,Img,Flex } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink,Link } from 'react-router-dom';

import Homes from './Homes';
import Gang from './Gang';
import Banner from './Carousel';
import Top from './Top';
import Gangs from './Gangs';
import Bags from './Bags';



const Home = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("http://localhost:8080/homepage");
      setData(res.data.slice(12,19));
      console.log(res);
    };
    getData();
  }, []);
  
 
  return (
    <>
    <Box bg={"white"}>
   

<Box>
<Flex mb={"20px"}  gap={"10px"}>
          <Box>          
            <img  src='https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg' alt='Dan Abramov' />
          </Box>
          <Box>           
             <img  src="https://images.bewakoof.com/uploads/grid/app/1x1-flat-70-common-1674282158.jpg" alt='Dan Abramov' />
            </Box>

            <Box>           
             <img  src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg" alt='Dan Abramov' />
            </Box>
        </Flex>
        </Box>








    
    <img  style={{ width:"100%"}}src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg' alt='Dan Abramov' />

  
      <Box className="moment" p="20px" pb="auto">
        
        <SimpleGrid columns={[1, 3, 4, 7]} gap={3}>
          {data.map((items, index) => {
            return (
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                key={index}
                className="imgs"
            
              >
                <NavLink to="/product/mens"
               
                >
                  <Img
                   
                    src={items.url}
                    alt=""
                  />
                </NavLink>
                <Text align="center" color="black" p="0px 5px">
                  {items.title}
                </Text>
                
              </Box>
            );
          })}
        </SimpleGrid>
          <Text  fontSize={"35"} color={"black"} mt={"10"}>DESIGN OF THE WEEK</Text>
        <Flex ml={"40px"}>
          <Box>  
            <Link to ="/product/mens">       
            <img width={"100%"}   src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1673937544.jpg' alt='Dan Abramov' />
          </Link> 
          </Box>
          <Box>  
            <Link to ="/product/womens">        
             <img   width={"100%"} src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women--1673937544.jpg' alt='Dan Abramov' />
             </Link> 
            </Box>
        </Flex>
        
      </Box>



       <Homes/>
   
 <Gangs/>
 <Bags/>
<Banner />
<Top/>
<Gang /> 

</Box>
    
      
    </>
  )
}


export default Home