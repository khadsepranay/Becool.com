import { Box, Heading, Icon, Img, Text, VStack } from "@chakra-ui/react"
import { BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./SingleProductDivCSS.model.css"
import {AiTwotoneStar} from 'react-icons/ai'
const SingleProductDiv=(ProductData)=>{

const {
  _id,
  Image_Main,
  Ratings,
  Name,
  Brand,
  Price,
  Price1,
  Price2,
  Price3

}=ProductData


    
    return(
        <VStack  className="zoom" w={"100%"}>
      <Link style={{textDecoration:"inherit" , margin:"0",padding:"0"}} to={`p/${_id}`}>
       <Box  w={"100%"}>
        <Box top={1} h={"0"}  pos={"relative"} >
            <Box px="2"  color={"white"} w={"fit-content"} background={"green.300"}>   
          <Text fontSize={"xs"}> 

            BUY 3 FOR {Price}
          </Text>

            </Box>
          </Box>
          <Img 
         className="flash"
          w={"auto"}
          // src="https://images.bewakoof.com/t640/men-s-black-relaxed-fit-short-kurta-302583-1663931104-1.jpg"
          src={Image_Main}
          />

          <Box  h={0}  pos={"relative"} bottom={"3rem"}>
            <Box  px="2" w={"fit-content"} background={"whiteAlpha.500"}>   
            {`${Ratings}`} <Icon as={AiTwotoneStar} color="yellow.500"/>

            </Box>
          </Box>
         
        </Box>
        <Box w={"100%"} display={"flex"}>
         <Box w={"100%"}>
          <Heading fontSize={"sm"} color={"gray.500"} size={"sm"}>{Brand}</Heading>
          <Text color={"gray.500"} fontSize={"xs"} w={"100%"}  >{Name}</Text>
          <Box spacing="2" display={"flex"}>

          <Heading  size={"sm"}> ₹  {Price3} </Heading> 
          <Text color={"gray.400"} as="s" pl={"2"} fontSize={"sm"}>{Price1}</Text>
          </Box>
          <Box my={"1"} px="2" w={"fit-content"} background={"gray.100"} >
              <Heading color="gray.500" fontSize={"xs"}>
           {Price2}
          </Heading>
          </Box>
         
        </Box>
        <Box>
          <Box pr={".3rem"} >
         <Icon  as={BsHeart} color="gray.500" boxSize={5}/>
          </Box>
        </Box>
      
        </Box>
      </Link>
       
      </VStack>
      
    )
}


export default SingleProductDiv