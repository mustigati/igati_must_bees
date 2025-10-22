import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";


 const store = configureStore({
    reducer: {
        cart: cartReducer,
        //other reducers
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
