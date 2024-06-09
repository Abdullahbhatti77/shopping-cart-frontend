import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        totalPrice: 0,
        totalProducts: 0,
    },
    reducers: {
        calculateTotalPrice: (state, action) => {
            state.totalPrice = state.totalPrice + parseInt(action.payload);
        },
        calculateremovePrice: (state, action) => {
            state.totalPrice = state.totalPrice - parseInt(action.payload);
        },
        calculateTotalProducts: (state) => {
            state.totalProducts++
            console.log(state.totalProducts)
        },
        removeProduct: (state) => {
            state.totalProducts--
        },
    },
});

export const { reducer, actions } = productSlice;
export const { calculateTotalPrice, calculateTotalProducts,removeProduct,calculateremovePrice } = actions;
export default reducer;
