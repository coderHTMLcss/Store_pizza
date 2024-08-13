import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  categoryId: 0,
  currentPage: 1,
  value: "",
  sort: {
    name: "популярні",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
    setCurrentCount(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const {
  setCategoryId,
  setSortType,
  setValue,
  setCurrentCount,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
