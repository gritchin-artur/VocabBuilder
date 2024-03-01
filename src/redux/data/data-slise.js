import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getAllWord } from "./data-operation";

const initialState = {
  categories: [],
  words: [],
};

const handleGetAllCategoriesulfilled = (state, { payload }) => {
  state.categories = payload;
};

const handleGetAllWordFulfilled = (state, { payload }) => {
  state.words = payload;
};

const dataSlise = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, handleGetAllCategoriesulfilled)
      .addCase(getAllWord.fulfilled, handleGetAllWordFulfilled);
  },
});

export default dataSlise.reducer;
