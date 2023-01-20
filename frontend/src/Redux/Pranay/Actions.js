import { CartType } from "./Action.types";
import axios from 'axios'

let getData = () =>(dispatch)=>{
    axios.get('http://localhost:8000/cart',{
        headers:{
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2NhZDUzNDYzZjNkN2JkY2MzOGNlMTEiLCJpYXQiOjE2NzQyNDE5MDR9.RvKWe9sU0rrumOdnpHzm9CjqrBmw_1Dt9JLNhNVnWXc'
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
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2NhZDUzNDYzZjNkN2JkY2MzOGNlMTEiLCJpYXQiOjE2NzQyNDE5MDR9.RvKWe9sU0rrumOdnpHzm9CjqrBmw_1Dt9JLNhNVnWXc'
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:CartType,payload:res.data})
    }).catch((err)=>{
        console.log(err)
    })
}

export {getData,increaseCartData} 