import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total : 0
    },
    reducers: {
        
         setItems(state,action){
            state.items = action.payload;
         }
        ,
        removeAll(state,){
            state.items = [];
        }
        ,
        removeTotal(state,){
            state.total = 0;
        }
        ,
        addTotal(state,action){
            state.total += action.payload
        },
        subTotal(state,action){
            state.total -= action.payload
        }
    }
})
export const {addTotal,subTotal,setItems,removeAll,removeTotal} = cartSlice.actions
export default cartSlice.reducer;