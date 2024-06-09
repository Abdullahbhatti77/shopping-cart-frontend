import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./productSlice/slice";

const store = configureStore({
    reducer: {
        price: priceReducer,
      },
});

export default store;