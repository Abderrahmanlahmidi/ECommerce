import {createSlice} from "@reduxjs/toolkit";

const initialeState =  {
 isCartOpen: false,
 cart: [],
 items: [],
}


export const cartSlice = createSlice({
   name:"cart",
   initialeState,
   reducers:{
     setItems:(state, action) => {
        state.items = action.payload
     },
     addTocart: (state, action) => {
        state.cart = [...state.cart, action.payload.item];
     },
     removeCart:(state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
     },
     increaseCount:(state, action) => {
        state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id){
                item.count++;
            }
            return item
        })
     },
     decreaseCount:(state, action) => {
        state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id){
                item.count++;
            }
            return item
        })
     },
     setCartOpen:(state) => {
        state.isCartOpen = !state.isCartOpen;
     },
   },
});

export const {
setItems,
addTocart,
removeCart,
increaseCount,
decreaseCount,
setCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer; 