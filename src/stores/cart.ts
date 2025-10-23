import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

// Define the shape of a single cart item
interface CartItem {
  productId: string;
  quantity: number;
}

// Define the overall cart state
interface CartState {
  items: CartItem[];
  statusTab: boolean
}

// Safely parse items from localStorage
const savedItems = localStorage.getItem("carts");
const parsedItems: CartItem[] = savedItems ? JSON.parse(savedItems) : [];

// Initialize the state
const initialState: CartState = {
  items: parsedItems,
  statusTab: false,
};

// Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: string ; quantity: number }>) => {
      const { productId, quantity } = action.payload;

      const indexProductId = state.items.findIndex(item => item.productId === productId)

      if(indexProductId >= 0){
        state.items[indexProductId].quantity += quantity
      }else{
        state.items.push({ productId, quantity })
      }

                  localStorage.setItem("carts", JSON.stringify(state.items));

    },


    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId) //check position of item in shopping cart

      if(quantity > 0){
        state.items[indexProductId].quantity = quantity
      }else{

        state.items = (state.items).filter(item => item.productId !== productId)
      }

                  localStorage.setItem("carts", JSON.stringify(state.items));


    },

    toggleStatusTab(state){
      if(state.statusTab === false){
        state.statusTab = true
      }else {
                state.statusTab = false
      }
    }
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
