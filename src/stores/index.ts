import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import authReducer from "./useAuth";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		auth: authReducer,
		// other reducers
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
