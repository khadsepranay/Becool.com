
 import { CartType } from './Action.types'

 let initialState = {
    CartData : []
 }

export let CartReducer = (state=initialState,action) =>{
    switch(action.type){
        case CartType : return {...state,CartData:action.payload}
        default : return {...state}
    }
}