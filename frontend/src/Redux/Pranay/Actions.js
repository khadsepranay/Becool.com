import { CartType } from "./Action.types";
import axios from 'axios'

let getData = () =>(dispatch)=>{
    let token = JSON.parse(localStorage.getItem('token'))
    axios.get('http://localhost:8000/cart',{
        headers:{
            auth:token
        }
    }).then((res)=>{
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

let increaseCartData = (id) =>(dispatch) =>{
    let token = JSON.parse(localStorage.getItem('token'))
    axios.get(`http://localhost:8000/cart/cartquantityadd/${id}`,{
        headers:{
            auth:token
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

let decreaseCartData = (id) =>(dispatch) =>{
    let token = JSON.parse(localStorage.getItem('token'))
    axios.get(`http://localhost:8000/cart/cartquantityreduce/${id}`,{
        headers:{
            auth:token
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

let deleteCartItem = (id) =>(dispatch)=>{
    let token = JSON.parse(localStorage.getItem('token'))
    axios.delete(`http://localhost:8000/cart/delete/${id}`,{
        headers:{
            auth:token
        }
    }).then((res)=>{
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

export {getData,increaseCartData,decreaseCartData,deleteCartItem} 