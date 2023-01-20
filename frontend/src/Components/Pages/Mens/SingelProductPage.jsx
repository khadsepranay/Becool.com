import { Box, Button, Flex, Heading, HStack, Img, Stack, Text, VStack } from "@chakra-ui/react"
import OffersDropDown from "./SingleProductPage/SingleProductPageComps/OfferDropDown"


const HorizontalDivider=()=>{
    return   <Box my="5" bg={"gray.100"} h="3px"></Box>
}
const SizeArray=["S","M","L","XL","2XL","3XL"]

const SizeBoxes=(params)=>{

// console.log(size)
    return( <Box my="2" >

    <Box borderRadius={"15%"} h={"50px"} alignItems="center" justifyContent="center" display={"flex"} border={"1px solid black"} w="50px" >
            <Text >
        {params.size}
    </Text>
    </Box>

</Box>)
}









const SingleProductPage = () => {


    return (
        <Box textAlign={"left"}>
            <Box mx={"10"} my="5" p="5">
                <Text color={"gray.600"}>
                    Home / Men / Clothing / Men's / T-ShirtsMen's Printed T-Shirts / Men's Black Deathnote Ryuk Graphic Printed Oversized T-shirt

                </Text>

            </Box>
            <Box m="auto" w={"85%"} display={"flex"} >

                <Flex py={"2"} pos={"sticky"} top="10px" gap={"5"} display={"flex"}
                
                height={"90vh"}
                
                w={"100%"}>

                    <VStack p={""} w={"30%"}  >
                        <Box p="4" w={"80%"}>
                            <VStack>
                                <Img src="https://images.bewakoof.com/t1080/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg" />
                                <Img src="https://images.bewakoof.com/t1080/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg" />
                                <Img src="https://images.bewakoof.com/t1080/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg" />
                                <Img src="https://images.bewakoof.com/t1080/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg" />
                            </VStack>

                        </Box>


                    </VStack>
                    <Box h={"100%"}  w={"100%"}>
                        <Img src="https://images.bewakoof.com/t1080/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg" />
                    </Box>



                </Flex>

                {/* Product Details Div */}
                <Box  w={"100%"}>
                    <Flex w={"85%"} m="5" px={4} flexDir={"row"}>
                        <Box spacing={3} >
                            <Heading color={"gray.500"} size={"md"}>
                                Bewakoof
                            </Heading>
                            <Box>
                                <Text color={"gray.500"} lineHeight={"5"} fontSize={"lg"}>
                                    Men's Black Deathnote Ryuk Graphic Printed Oversized T-shirt
                                </Text>
                            </Box>
                            <Box w={"100%"} border="0.5px solid silver">Ratings</Box>
                            <Box display={'flex'}>
                                <Heading size={'md'}>
                                    ₹499

                                </Heading>
                                <Text mx={"2"} color={"gray.300"} as={"s"}>
                                    ₹1499</Text>
                                <Heading color={"green.400"} size={"sm"}>
                                    Discount Price!

                                </Heading>
                            </Box>
                            <Text fontSize="sm" color={"gray.400"}>inclusive of all taxes</Text>
                            <HStack>
                                <Box border={"0.5px solid gray"} px="2" color={"white"} bg={"gray.500"} w={"fit-content"}>
                                    <Text as={"b"} fontSize={"sm"}>

                                        OVERSIZED FIT
                                    </Text>
                                </Box>
                                <Box px="2" border={"0.5px solid black"} color="gray.600" w={"fit-content"}>
                                    <Text as={"b"} fontSize={"sm"}>

                                        DESIGN OF THE WEEK
                                    </Text>
                                </Box>

                            </HStack>
                            <Box my="5" bg={"gray.100"} h="3px"></Box>

                            <Box>
                                <Text fontSize={"sm"} color={"gray.500"}>TriBe members get an extra discout of ₹40 FREE shipping. </Text>
                            </Box>

                            <Box my="5" bg={"gray.100"} h="3px"></Box>

                            <Box>
                                <Box>
                                    <Flex justifyContent={"space-between"}>
                                        <Text fontSize={"sm"} as={"b"} >SELECT SIZE</Text>
                                        <Text color={"teal.400"} fontSize={"sm"} as={"b"} >


                                            Size Guide

                                        </Text>

                                    </Flex>
                                    <HStack w={"80%"}>
                    
                                     
                                      {SizeArray.map((el)=>{
                                        return <SizeBoxes key={el} size={el}/>
                                      })}




                                    </HStack>
                                    <Box   my="5" >
                                        <HStack gap={'2'} >
                                            <Button background={'yellow.300'} px='80px'>ADD TO BAG</Button>
                                            <Button border={'0.5px solid gray'} color='gray.400' background={'white'} px='50px'>WISHLIST</Button>
                                        </HStack>
                                    </Box>
                                    {/* <HorizontalDivider/> */}
                                    <OffersDropDown/>
                                    {/* <HorizontalDivider/> */}
                                    <OffersDropDown/>
                                    <OffersDropDown/>
                                    <OffersDropDown/>
                                    <OffersDropDown/>
                                    {/* <HorizontalDivider/> */}
                                </Box>
                            </Box>
                        </Box>

                    </Flex>

                </Box>
            </Box>
            <Box w={"100%"} bg={"purple"} height={"500px"}>

            </Box>




        </Box>
    )






}

export default SingleProductPage