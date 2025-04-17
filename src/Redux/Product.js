import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        selectProduct : null
    },
    reducers: {
        selectProduct(state, action) {
            state.selectProduct = action.payload;
        }
    }
})

export const {selectProduct} = productSlice.actions
export default productSlice.reducer