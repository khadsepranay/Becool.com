import axios from "axios";
import { isAddedToCart } from "./Action.types";

const getProductReq = () => {
  return {
    type: "PRODUCT_REQ",
  };
};
const getProductSuccess = (payload) => {
  return { type: "PRODUCT_SUCCESS", payload: payload };
};

const getProductData = (params) => (dispatch) => {
  dispatch(getProductReq());

  axios.get(`http://localhost:8000/product/mens`).then((res) => {
    // console.log(res.data)
    // setTempData(res.data)
    dispatch(getProductSuccess(res.data));
  });
};
const getProductWomensData = (params) => (dispatch) => {
  dispatch(getProductReq());

  axios.get(`http://localhost:8000/product/womens`).then((res) => {
    console.log(res.data)
    // setTempData(res.data)
    dispatch(getProductSuccess(res.data));
  });
};

const addToCart = (id) => (dispatch) =>{
  let token = JSON.parse(localStorage.getItem('token'))
axios.get(`http://localhost:8000/cart/add/${id}`,{
  headers:{
    auth: token
  }
}).then((res)=>{
  dispatch({type:isAddedToCart,payload:true})
}).catch((err)=>{
  console.log(err)
})
}

let isadded = (id) =>(dispatch) =>{
  let token = JSON.parse(localStorage.getItem('token'))
  axios.get(`http://localhost:8000/cart/isadded/${id}`,{
    headers:{
      auth:token
    }
  }).then((res)=>{
    if(res.data==true){
      dispatch({type:isAddedToCart,payload:true})
    }else{
      dispatch({type:isAddedToCart,payload:false})
    }
  })
}


export { getProductData, getProductSuccess,addToCart,getProductWomensData, isadded };

// getCartData=()=>(dispatch)=>{

// }
