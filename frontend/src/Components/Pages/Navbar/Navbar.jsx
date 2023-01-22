
import { 
  VStack,StackBoxider ,
  Box, 
  Grid, GridItem,HStack ,
  Input, InputGroup, InputLeftElement, Image, 

   Center, Text, Flex, Wrap, position, }

    from '@chakra-ui/react'

import { SearchIcon, CalendarIcon } from "@chakra-ui/icons"

import React from 'react'

import { Link } from 'react-router-dom'
import  becoolimg from  "./becool.png";
import { useNavigate } from 'react-router-dom'


const Navbar = () => {


  
const activeStyle = {
  color:"black",
  backgroundColor:"#fdd835",
  // position:"fixed"
};

const defaultStyle = {
  color:"black",
  backgroundColor:"#fdd835",
  // position:"fixed",
  // zIndex:"999"
};




return (
 
  <Box  className="mainNav" position={"fixed"} zIndex={"999"} bgColor={"black"} width={"100%"}>
   <Wrap justify='center' >

    

      <Grid className="NavbarCNav" templateColumns='repeat(3, 20% 30% 40%)' gap={2} >
          
          <GridItem>
        
          <Link to="/">
              <Image width="80%"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJnEthfPZUDLBSxFTXRYP8IOMKJSyiW-cNg&usqp=CAU"
              />
          </Link>
             

          </GridItem>

          <GridItem>

           <HStack  spacing='24px' >

              <Center  h='50px' >
                <Link to="/product/mens" >
                <Text 
                fontWeight="extrabold" fontSize={"14px"} color={"white"}> MEN</Text> 
                </Link>
              </Center>

              
              <Center padding="0px 20px" 

            //  style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
                  style={activeStyle}
               h='50px' >
                <Link   to="/product/womens" >
                   <Text
                   fontWeight="extrabold" fontSize={"14px"} color={"white"}> WOMEN</Text> 
                   </Link>
              </Center>

              
              <Center  h='50px' >
                <Link to="/product/mobiles"> 
                <Text 
                fontWeight="extrabold" fontSize={"14px"}color={"white"} > MOBILE COVER</Text> </Link>
              </Center>
                    
            </HStack >

          </GridItem>

          <GridItem  style={{marginLeft: "180px"}} >

            <HStack  spacing='24px' >

            <InputGroup>
               <InputLeftElement
                 pointerEvents='none'
                 children={<SearchIcon color='gray.300' />}
                 />
               <Input w={300} placeholder='Search By Product' />
             </InputGroup>

             <Center h='50px' >
                <Text fontWeight="extrabold" fontSize={"14px"} color={"white"} > |</Text> 
              </Center>

                
              <Center h='50px' >
                <Link  to="/login"  >
                   <Text
                    fontWeight="extrabold" fontSize={"14px"} color={"white"} > Login</Text> </Link>
              </Center>

              <Center h='50px' >
                  
                <Link to="/carts"   > <CalendarIcon fontWeight="extrabold" fontSize={"20px"} color={"white"} > </CalendarIcon> </Link>

              </Center>

              
     

           </HStack>

          </GridItem>
            
      </Grid >

    
     
      
      </Wrap>
      <hr />

     

      <HStack justify="center" spacing='24px' >

              <Center  h='50px' >
                <Link to="/product/mens" > 
                <Text 
                fontWeight="extrabold" fontSize={"20px"} color={"white"} > MEN</Text> 
                </Link>
              </Center>

              
              <Center padding="0px 20px" 

            //  style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
              
               h='50px' >
                <Link   to="/product/women" >
                   <Text
                   fontWeight="extrabold" fontSize={"20px"} color={"white"} > WOMEN</Text> 
                   </Link>
              </Center>

              
              <Center  h='50px' >
                <Link to="/product/mobiles" > 
                <Text
                fontWeight="extrabold" fontSize={"20px"}  color={"white"}> MOBILE COVERS</Text> </Link>
              </Center>
                    
            </HStack >

  </Box>

)
}

export default Navbar