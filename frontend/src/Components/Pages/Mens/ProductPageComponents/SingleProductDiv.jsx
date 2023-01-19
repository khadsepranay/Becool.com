import { Box, Heading, Img, Text, VStack } from "@chakra-ui/react"


const SingleProductDiv=(ProductData)=>{

const {
  Image_Main,
  Ratings,
  Name,
  Price,
  Price1,
  Price2,
  Price3

}=ProductData


    
    return(
        <VStack w={"100%"}>
             
        <Box w={"100%"}>
        <Box  h={0}  pos={"relative"} >
            <Box px="2" color={"white"} w={"fit-content"} background={"green.300"}>   
          <Text fontSize={"xs"}> 

            BUY 3 FOR {Price}
          </Text>

            </Box>
          </Box>
          <Img 
          w={"auto"}
          // src="https://images.bewakoof.com/t640/men-s-black-relaxed-fit-short-kurta-302583-1663931104-1.jpg"
          src={Image_Main}
          />

          <Box  h={0}  pos={"relative"} bottom={"12%"}>
            <Box px="2" w={"fit-content"} background={"whiteAlpha.500"}>   
            {`${Ratings}`}

            </Box>
          </Box>
         
        </Box>
        <Box w={"100%"} display={"flex"}>
         <Box w={"100%"}>
          <Heading fontSize={"sm"} color={"gray.500"} size={"sm"}>BeCool</Heading>
          <Text color={"gray.500"} fontSize={"xs"} w={"100%"} Color="gray.900" >{Name}</Text>
          <Box spacing="2" display={"flex"}>

          <Heading  size={"sm"}>{Price3} </Heading> 
          <Text color={"gray.400"} as="s" pl={"2"} fontSize={"sm"}>{Price1}</Text>
          </Box>
          <Box my={"1"} px="2" w={"fit-content"} background={"gray.100"} >
              <Heading color="gray.500" fontSize={"xs"}>
           {Price2}
          </Heading>
          </Box>
         
        </Box>
        <Box>
          <Heading size={"sm"}>
           Icon
          </Heading>
        </Box>
      
        </Box>
      </VStack>
      
    )
}


export default SingleProductDiv