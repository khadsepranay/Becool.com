import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {getData,increaseCartData} from "../../../Redux/Pranay/Actions";

let CartBody = () => {
    let data = [
        {
            url:'https://images.bewakoof.com/t640/men-s-black-feel-most-alive-t-shirt-307093-1655749411-1.jpg',
            rating:'4.5',
            title:'Mens Black Feel Most Alive',
            price1:'₹399',
            price2:'₹1099'
        },
        {
            url:'https://images.bewakoof.com/t640/men-s-black-feel-most-alive-t-shirt-307093-1655749411-1.jpg',
            rating:'4.5',
            title:'Mens Black Feel Most Alive',
            price1:'₹399',
            price2:'₹1099'
        },
        {
            url:'https://images.bewakoof.com/t640/men-s-black-feel-most-alive-t-shirt-307093-1655749411-1.jpg',
            rating:'4.5',
            title:'Mens Black Feel Most Alive',
            price1:'₹399',
            price2:'₹1099'
        }
    ]
    let dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getData())
    },[])

    let state = useSelector((state)=>state)
    console.log(state)

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "5fr 3fr",
        justifyContent: "space-between",
        width: "75vw",
        margin: "auto",
        marginBottom:'100px',
        gap:'50px'
      }}
    >
      <Box sx={{ textAlign: "left" }}>
        
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box component="h4">My Bag</Box>
          <Box>1 item</Box>
        </Box>
        <Box sx={{backgroundColor:'#FCFFEE',padding:'15px'}}>Yay! You get FREE delivery on this order</Box>
        <Box>
          {
            state.Cart.CartData.map((el)=>{
            return <Box sx={{
            border: "1px solid #DEE2E4",
            height: "250px",
            borderRadius: "5px",
            fontSize:'16px',
            boxSizing:'border-box',
            padding:'19px',
            margin:'20px 0px 50px'
            }}>
        <Box sx={{display:'flex',justifyContent:'space-between'}}> 
        <Box>
          <Box sx={{color:'gray',fontSize:'17px'}}>
            {el.productid.Name}
          </Box>
          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              height:'35px'
            }}
          >
            <Box component="h2">₹{el.productid.Price}</Box>
            <Box>₹{el.productid.Price1}</Box>
          </Box>
          <Box sx={{margin:'2px 0px 6px 0px',color:'green'}}>You Saved ₹{el.productid.Price1-el.productid.Price}</Box>
          <Box>
            Quantity : <Button>-</Button>{el.Quantity}<Button onClick={()=>dispatch(increaseCartData(el.productid._id))}>+</Button>
          </Box>
          <Box sx={{margin:'5px 0px 25px',color:'red'}}>Hurry! only 1 left</Box>
          </Box>
          <Box>
        <Box component='img' src="https://images.bewakoof.com/t320/men-s-purpleriot-xxxtentican-oversized-t-shirt-568932-1673613239-1.jpg" width='100px'></Box>
        </Box>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-around',textAlign:'center',alignItems:'center', borderTop:'1px solid grey',padding:'10px',gap:'20px'}}>
            <Button sx={{width:'100%',backgroundColor:'#F3F0F0',color:'grey'}}>Remove</Button>
            <Button  sx={{width:'100%',backgroundColor:'#F3F0F0',color:'grey'}}>Move to wishlist</Button>
        </Box>
        </Box>
      })
    }
        </Box>
        <Box component='h4'>You may also like</Box>
        <Box sx={{display:'flex',justifyContent:'space-between',margin:'auto',gap:'30px'}}>
            {
                data.map((el)=>{
                    return(
                        <Box>
                            <Box component='img' src={el.url} sx={{width:'100%'}}/>
                            <Box>{el.title}</Box>
                            <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
                                <Box>{el.price1}</Box>
                                <Box sx={{fontSize:'10px'}}>{el.price2}</Box>
                            </Box>
                            <Button sx={{width:'100%',padding:'10px',border:'1px solid #66b2ff',margin:'20px auto',color:'#66b2ff'}}>ADD TO BAG</Button>
                        </Box>
                    )
                })
            }
        </Box>
      </Box>
      <Box sx={{marginTop:'135px'}}>
        <Button sx={{width:'100%',backgroundColor:'#FDD835',color:'black',borderRadius:'5px',padding:'10px',":hover":{backgroundColor:'#ff8000'}}}>Save extra ₹40 with TriBe</Button>
        <Box sx={{border:'1px solid #DEE2E4',borderRadius:'5px',marginTop:'20px',padding:'5px',color:'gray'}}>Whistles! Get extra 10% Cashback upto 100 on prepaid orders above Rs.699. Coupon code - MAD10.</Box>
        <Box sx={{border:'1px solid #DEE2E4',boxSizing:'border-box',padding:'5px',marginTop:'20px'}}><Button sx={{backgroundColor:'#E6F2F6',width:'100%',color:'#0F94BD'}}>Click here to redeem coupon</Button></Box>
        <Box sx={{border:'1px solid #DEE2E4',margin:'15px 0px'}}>
          <Box component='h4' sx={{margin:'0px',padding:"10px",backgroundColor:'#E0E0E0'}}>PRICE SUMMARY</Box>
            <Box sx={{display:'flex',justifyContent:'space-between', padding:'10px',boxSizing:'border-box'}}>
              <Box sx={{textAlign:'left',lineHeight:'35px',fontSize:'13px'}}>
                <Box>Total MRP (Incl. of taxes)</Box>
                <Box>Shipping Charges</Box>
                <Box>Bag Discount</Box>
                <Box>Subtotal</Box>
              </Box>
              <Box sx={{textAlign:'left',lineHeight:'35px',fontSize:'13px'}}>
                <Box>₹1499</Box>
                <Box>FREE</Box>
                <Box>-₹1000</Box>
                <Box>₹499</Box>
              </Box>
            </Box>
            <Box sx={{borderRadius:'15px',border:'1px solid #DEE2E4',margin:'0px auto 25px',padding:'5px',boxSizing:'border-box',width:'80%',backgroundColor:'#F1F4F5',color:'green'}}>You are saving ₹1000 on this order</Box>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',padding:'15px',border:'1px solid #DEE2E4',borderRadius:'5px'}}>
          <Box>
            <Box>Total</Box>
            <Box>₹ 499</Box>
          </Box>
          <Button sx={{width:'60%',backgroundColor:'#42a2a2',color:'white',gap:'50px',":hover":{backgroundColor:'#008888'}}}>CONTINUE</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartBody;
