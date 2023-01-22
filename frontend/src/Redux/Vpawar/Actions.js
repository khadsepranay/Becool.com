import axios from "axios";

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

const addToCart = (id) => (dispatch) =>{
axios.get(`http://localhost:8000/cart/add/${id}`,{
  headers:{
    auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2NiZDM5ZDAwZjM1NzgxMzgyZGRjYzgiLCJpYXQiOjE2NzQzMDIzODZ9.SlTi38I3dUYLukabgbEFpinKFQ34OMcO1mPpcGndv_c"
  }
}).then((res)=>{
  console.log(res.data)
}).catch((err)=>{
  console.log(err)
})
}


export { getProductData, getProductSuccess,addToCart };

// getCartData=()=>(dispatch)=>{

// }
