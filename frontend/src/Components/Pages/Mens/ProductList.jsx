import { Box, Heading, Img, SimpleGrid, Skeleton, Text, useTimeout, VStack } from "@chakra-ui/react"
import React from "react"
// import SingleProductDiv from "../SingleProductDiv"
// import CategorySelector from "./FiltersComponent"
import SingleProductDiv from "../Mens/ProductPageComponents/SingleProductDiv"
import CategorySelector from "../Mens/ProductPageComponents/FiltersComponent"
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import {useDispatch ,useSelector}from "react-redux"
import { getProductData } from "../../../Redux/Vpawar/Actions"


const ProductList = () => {
const [isLoaded,setIsLoaded]=useState(false)

useTimeout(()=>setIsLoaded(true),1500)
  const dispatch=useDispatch()

  const ProductData=useSelector((store)=>store.ProductReducer.ProductData)
  // console.log("Product Data ",ProductData)


  useEffect(()=>{
    dispatch(getProductData())
  },[])


  return (
    <Box   textAlign={"left"} margin={"auto"} w={"85%"} paddingTop={'30px'}>
        <Box mt="30rem" my="4">
          <Heading >
            Men Clothing
          </Heading>
          <Box w={"15%"} height={"3px"} bg={"yellow.300"}>
          </Box>

        </Box>
      <Box justifyContent={"center"} display="flex">
        

      <Box w={"100%"} display="flex" m="10px" >
        <Box  width={"100%"} >
          <Box   w={"100%"}  top={0} position={"sticky"} >

            <h1>Filters</h1>
            <Box 
              mt="20px"
              overflow="scroll"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            
            height="90vh"   >
              <CategorySelector />
            
            </Box>
          </Box>
        </Box>
        <Box  >
          <Box textAlign={"right"}>
            <Text>Sort By</Text>
          </Box>
        
        <SimpleGrid mb="10rem" mx="5" w={"100%"} spacing={7} columns={[1, 2, 3, 3]} >

      
             {
              ProductData.map((el)=> <SingleProductDiv key={el._id} {...el}/> )
             }
            
        

          </SimpleGrid>   
         
        </Box>
      </Box>



    </Box>
    </Box>
    
  )



}

export default ProductList























let Kurtas = [
  {
    Brand: "Bewakoof",
    Image_Main:
      "https://images.bewakoof.com/t640/men-s-black-relaxed-fit-short-kurta-302583-1663931104-1.jpg",
    Image1:
      "https://images.bewakoof.com/t1080/men-s-black-relaxed-fit-short-kurta-302583-1663931115-3.jpg",
    Image2:
      "https://images.bewakoof.com/t1080/men-s-black-relaxed-fit-short-kurta-302583-1663931120-4.jpg",
    Image3:
      "https://images.bewakoof.com/t1080/men-s-black-relaxed-fit-short-kurta-302583-1663931125-5.jpg",
    Fit: "RELAXED FIT",
    Ratings: "4.6",
    Category: "Kurta",
    Sizes: "S",
    Sleeve: "Full Sleves",
    Color: "Black",
    Design: "Printed",
    Name: "Men's Black Relaxed Fit Short Kurta",
    Price: "₹699",
    Price1: "₹999",
    Price2: "₹639For TriBe Members",
    Price3: "₹639",
  },
  {
    Brand: "See Designes",
    Image_Main:
      "https://images.bewakoof.com/t1080/see-designs-black-solid-asymmetrical-kurta-404677-1656160951-1.jpg",
    Image1:
      "https://images.bewakoof.com/t1080/see-designs-black-solid-asymmetrical-kurta-404677-1656160956-2.jpg",
    Image2:
      "https://images.bewakoof.com/t1080/see-designs-black-solid-asymmetrical-kurta-404677-1656160961-3.jpg",
    Image3:
      "https://images.bewakoof.com/t1080/see-designs-black-solid-asymmetrical-kurta-404677-1656160966-4.jpg",
    Fit: "REGULAR FIT",
    Ratings: "4.5",
    Category: "Kurta",
    Sizes: "M",
    Sleeve: "Full Sleves",
    Color: "Black",
    Design: "Solid",
    Name: "Men's Black Relaxed Fit Long Kurta",
    Price: "₹699",
    Price1: "₹999",
    Price2: "₹639For TriBe Members",
    Price3: "₹639",
  },
  {
    Brand: "See Designs",
    Image_Main:
      "https://images.bewakoof.com/t1080/see-designs-black-embroidered-straight-kurta-404680-1656151829-1.jpg",
    Image1:
      "https://images.bewakoof.com/t1080/see-designs-black-embroidered-straight-kurta-404680-1656151845-4.jpg",
    Image2:
      "https://images.bewakoof.com/t1080/see-designs-black-embroidered-straight-kurta-404680-1656151850-5.jpg",
    Image3:
      "https://images.bewakoof.com/t1080/see-designs-black-embroidered-straight-kurta-404680-1656151855-6.jpg",
    Fit: "REGULAR FIT",
    Ratings: "4.3",
    Category: "Kurta",
    Sizes: "L",
    Sleeve: "Full Sleves",
    Color: "Black",
    Design: "Printed",
    Name: "Men's Black Plus Size Relaxed Fit Long Kurta",
    Price: "₹899",
    Price1: "₹2949",
    Price2: "₹839For TriBe Members",
    Price3: "₹839",
  },
  {
    Brand: "See Designs",
    Image_Main:
      "https://images.bewakoof.com/t1080/men-s-black-striped-kurta-1-541654-1663134222-1.jpg",
    Image1:
      "https://images.bewakoof.com/t1080/men-s-black-striped-kurta-1-541654-1663134227-2.jpg",
    Image2:
      "https://images.bewakoof.com/t1080/men-s-black-striped-kurta-1-541654-1663134232-3.jpg",
    Image3:
      "https://images.bewakoof.com/t1080/men-s-black-striped-kurta-1-541654-1663134237-4.jpg",
    Fit: "RELAXED FIT",
    Ratings: "3.3",
    Category: "Kurta",
    Sizes: "M",
    Sleeve: "Full Sleves",
    Color: "Black",
    Design: "Printed",
    Name: "Men's Black Striped Kurta",
    Price: "₹764",
    Price1: "₹1499",
    Price2: "₹699For TriBe Members",
    Price3: "₹699",
  },
  {

    Brand: "Bewakoof",
    Image_Main:
      "https://images.bewakoof.com/t1080/men-s-black-all-over-mataka-printed-relaxed-fit-mid-kurta-318087-1663931347-1.jpg",
    Image1:
      "  https://images.bewakoof.com/t1080/men-s-black-all-over-mataka-printed-relaxed-fit-mid-kurta-318087-1663931352-2.jpg",
    Image2:
      "https://images.bewakoof.com/t1080/men-s-black-all-over-mataka-printed-relaxed-fit-mid-kurta-318087-1663931357-3.jpg",
    Image3:
      "https://images.bewakoof.com/t1080/men-s-black-all-over-mataka-printed-relaxed-fit-mid-kurta-318087-1663931362-4.jpg",
    Fit: "RELAXED FIT",
    Ratings: "4.0",
    Category: "Kurta",
    Sizes: "M",
    Sleeve: "Full Sleves",
    Color: "black",
    Design: "Printed",
    Name: "Men's Black All Over Mataka Printed Relaxed Fit Mid Kurta",
    Price: "₹549",
    Price1: "₹1699",
    Price2: "₹509For TriBe Members",
    Price3: "₹509",
  },
];