import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      if (itemFound) {
        itemFound.quantity += quantity;
        itemFound.subTotal = price * itemFound.quantity;
      } else {
        state.items.push({ ...action.payload, subTotal: price });
      }
      state.total += price * quantity;
    },
    reduceItemCart: (state, action) => {
      const { id, price } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      if (itemFound) {
        itemFound.quantity -= 1;
        itemFound.subTotal = price * itemFound.quantity;

        state.total -= price;
      }
    },
    removeItemCart: (state, action) => {
      const { id } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);

      if (itemFound) {
        state.items = state.items.filter((item) => item.id !== id);
        state.total -= itemFound.subTotal;
      }
    },
    clearCart: (state) => {
      (state.items = []), (state.total = 0);
    },
  },
});

export const { addItemCart, reduceItemCart, removeItemCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
