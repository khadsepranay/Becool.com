import { Box, Button, Flex, Heading, HStack, Img, SimpleGrid, Text, VStack,Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductData,addToCart } from "../../../Redux/Vpawar/Actions"
import "../Mens/SingleProductPage/SingleProductPageComps/SinglePage.model.css"
import OffersDropDown from "./SingleProductPage/SingleProductPageComps/OfferDropDown"
import SinglePageProductDiv from './SingleProductPage/SingleProductPageComps/SinglePageProductDiv'
import {AiTwotoneStar} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'


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
let n=4
let i=0








const SingleProductPage = () => {
    // let A=[]
    const dispatch=useDispatch()
    const AllProduct=useSelector((store)=>store.ProductReducer.ProductData)
    const [pData,setPdata]=useState({})
    const [proArray,setProArray]=useState([])
    const [mainImg,setMainImg]=useState('Image')
    const params=useParams()
    // const proArray=[]
    const location=useLocation()
    console.log(location)
    // window.location.reload()
    
    

 useEffect(()=>{
    let Arr=[]
    dispatch(getProductData())
     AllProduct.length&&AllProduct.map( (el)=>{
        if(params.id==el._id){
             setPdata(el)
             setMainImg(el.Image_Main)
   
        }
        if(i<n){
            i++
            Arr.push(el)
        }
        setProArray(Arr)
    })

    setProArray(Arr)


 },[AllProduct.length,params.id])

//  useEffect(()=>{

//  },[])

const handleMainImg=(e)=>{
    // console.log(e.target.src)
    setMainImg(e.target.src)

}

    return (
        <Box textAlign={"left"}>
            <Box mx={"10"} my="5" p="5">
                <Text color={"gray.600"}>
                    Home {location.pathname} / {`${pData.Name}`}

                </Text>

            </Box>
            <Box m="auto"  w={"85%"} display={"flex"}  >

                <Flex  py={"2"} pos={"sticky"} top="10px" gap={"5"} display={"flex"}
                
                height={"90vh"}
                
                w={"100%"}>

                    <VStack p={""} w={"30%"}  >
                        <Box p="4" w={"80%"}>
                            <VStack>
                                <Img onClick={(e)=>handleMainImg(e)} src={pData.Image_Main}/>
                                <Img onClick={(e)=>handleMainImg(e)}  src={pData.Image1}/>
                                <Img onClick={(e)=>handleMainImg(e)} src={pData.Image2}/>
                                <Img onClick={(e)=>handleMainImg(e)} src={pData.Image3}/>
                               
                            </VStack>

                        </Box>


                    </VStack>
                    <Box h={"100%"}  w={"100%"}>
                        {/* <Img src="https://images.bewakoof.com/t1080/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg" /> */}
                        <Img src={`${mainImg}`}/>
                    </Box>



                </Flex>

                {/* Product Details Div */}
                <Box  w={"100%"}>
                    <Flex  w={"85%"} m="5" px={4} flexDir={"row"}>
                        <Box  spacing={3} >
                            <Heading  color={"gray.500"} size={"md"}>
                               {pData.Brand}
                            </Heading>
                            <Box className="Vspacing">
                                <Text color={"gray.500"} lineHeight={"5"} fontSize={"lg"}>
                                    {pData.Name}
                                    {/* Men's Black Deathnote Ryuk Graphic Printed Oversized T-shirt */}
                                </Text>
                            </Box>
                            <Box display={"flex"}  px='.5rem'  className="Vspacing" w={"100%"} border="0.5px solid silver">
                                
                                {/* Ratings */}
                                <Text>

                                {pData.Ratings} 
                                </Text>
                                <Icon my="auto" as={AiTwotoneStar} boxSize="5" color='yellow.400'/>
                                </Box>
                            <Box className="Vspacing" display={'flex'}>
                                <Heading size={'md'}>
                                    {/* ₹499 */}
                                    ₹ {pData.Price3}
                                </Heading>
                                <Text mx={"2"} color={"gray.300"} as={"s"}>
                                    {/* ₹1499 */}
                                    {pData.Price}
                                    </Text>
                                <Heading color={"green.400"} size={"sm"}>
                                    Discount Price!

                                </Heading>
                            </Box>
                            <Text fontSize="sm" color={"gray.400"}>inclusive of all taxes</Text>
                            <HStack className="Vspacing">
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

                            <Box className="Vspacing">
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
                                            <Button background={'yellow.300'} px='80px' onClick={()=>dispatch(addToCart(pData._id))}>ADD TO BAG</Button>
                                            <Button border={'0.5px solid gray'} color='gray.400' background={'white'} px='50px'>WISHLIST</Button>
                                        </HStack>
                                    </Box>
                                    {/* <HorizontalDivider/> */}
                                    <OffersDropDown/>
                                    {/* <HorizontalDivider/> */}
                                   
                                  
                                    {/* <HorizontalDivider/> */}
                                </Box>
                            </Box>
                        </Box>

                    </Flex>

                </Box>
            </Box>
            <Box w={'100%'} display='flex' justifyContent={'center'}>
                <SimpleGrid m={'auto'} justifyContent={'center'} mx="5" w={"80%"} spacing={4} columns={[1, 2, 4, 4]} >
                                      
                                      
                                     {AllProduct.map((el)=><SinglePageProductDiv key={el._id} {...el}/>)}
                                      
                                </SimpleGrid>
            </Box>
            
            {/* <Box w={"100%"} bg={"purple"} height={"500px"}>

            </Box> */}




        </Box>
    )






}

export default SingleProductPage