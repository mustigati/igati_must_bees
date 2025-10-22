import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

// Define the shape of a single cart item
interface CartItem {
  productId: string;
  quantity: number;
}

// Define the overall cart state
interface CartState {
  items: CartItem[];
}

// Initialize the state
const initialState: CartState = {
  items: [],
};

// Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;

      const indexProductId = state.items.findIndex(item => item.productId === productId)

      if(indexProductId >= 0){
        state.items[indexProductId].quantity += quantity
      }else{
        state.items.push({ productId, quantity })
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
