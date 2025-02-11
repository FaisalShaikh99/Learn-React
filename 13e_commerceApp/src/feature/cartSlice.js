import {createSlice} from '@reduxjs/toolkit'
import { getDataFromLocalstorage, saveDataInLocalStorage } from './utilis';

export const cartSlice = createSlice({
    name : "cart",
    initialState : {     
        cart : getDataFromLocalstorage() || [],
        totalAmount : 0,
     }, 

     reducers : {
        addToCart : (state, action) => {
            const {id, title, price, image, discription} = action.payload;
            const item = state.cart.find((product) => product.id === action.payload.id)
            if(item){
                item.qty += 1;
            }else{
                state.cart.push({id, image, title, discription, price, qty: 1, 
                    totalPrice: price})
            }
        
            // buy 2 get 1 logic
            state.cart.forEach((product) => {
                if(product.qty > 2) {
                  product.qty += 1; // ek item free
                }
                product.totalPrice = (product.qty * product.price) - product.price
            })
           saveDataInLocalStorage(state.cart)
        },

        removeCart : (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            saveDataInLocalStorage(state.cart)
        },

        increaseQty : (state, action) => {
            const item = state.cart.find((product) => product.id === action.payload.id)
            if (item) {
                item.qty += 1;

            // buy 2 get 1 logic
            if (item.qty % 2 === 0) {
                item.qty += 1;
              }
              item.totalPrice =(item.qty * item.price) - item.price
            }            
             saveDataInLocalStorage(state.cart) 
        },
        
        decreaseQty : (state, action)  => {
        const item = state.cart.find((product) => product.id === action.payload.id)
          if(item && item.qty > 1){
            item.qty -= 1;
            item.totalPrice = item.qty * item.price
          }
          saveDataInLocalStorage(state.cart);
        }
    }
})

export const {addToCart, removeCart, increaseQty, decreaseQty} = cartSlice.actions;

export default cartSlice.reducer