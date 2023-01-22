import { CartType } from "./Action.types";
import axios from 'axios'

let getData = () =>(dispatch)=>{
    axios.get('http://localhost:8000/cart',{
        headers:{
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2NiZDM5ZDAwZjM1NzgxMzgyZGRjYzgiLCJpYXQiOjE2NzQzMDIzODZ9.SlTi38I3dUYLukabgbEFpinKFQ34OMcO1mPpcGndv_c'
        }
    }).then((res)=>{
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

let increaseCartData = (id) =>(dispatch) =>{
    axios.get(`http://localhost:8000/cart/cartquantityadd/${id}`,{
        headers:{
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2NiZDM5ZDAwZjM1NzgxMzgyZGRjYzgiLCJpYXQiOjE2NzQzMDIzODZ9.SlTi38I3dUYLukabgbEFpinKFQ34OMcO1mPpcGndv_c'
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

let decreaseCartData = (id) =>(dispatch) =>{
    axios.get(`http://localhost:8000/cart/cartquantityreduce/${id}`,{
        headers:{
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2NiZDM5ZDAwZjM1NzgxMzgyZGRjYzgiLCJpYXQiOjE2NzQzMDIzODZ9.SlTi38I3dUYLukabgbEFpinKFQ34OMcO1mPpcGndv_c'
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

let deleteCartItem = (id) =>(dispatch)=>{
    axios.delete(`http://localhost:8000/cart/delete/${id}`,{
        headers:{
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2NiOWQxNzIxZTYyYmZhYTZiMGY5YmQiLCJpYXQiOjE2NzQyODg0MTZ9.EoMSInZunNB43tS0Zc9Hn-yXEoUyuZmtZEmHY0dSCJ4'
        }
    }).then((res)=>{
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

export {getData,increaseCartData,decreaseCartData,deleteCartItem} 