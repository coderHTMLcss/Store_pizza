import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const finditem = state.items.find(
        (item) => item.id === action.payload.id
      );

      finditem
        ? finditem.count++
        : state.items.push({ ...action.payload, count: 1 });

      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0
      );
    },
    minusItem(state, action) {
      const finditem = state.items.find((item) => item.id === action.payload);
      if (finditem) {
        if (finditem.count <= 0) return;
        finditem.count--;
      }

      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0
      );
    },
    removeItems(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, minusItem, removeItems, clearItems } =
  cartSlice.actions;
export default cartSlice.reducer;
