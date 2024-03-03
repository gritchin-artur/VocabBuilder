import { createSlice } from "@reduxjs/toolkit";
import { createWord, getAllCategories, getAllWord } from "./data-operation";

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

const handleCreateWordFulfilled = (state, { payload }) => {
  state.words = {
    ...state.words,
    payload,
  };
};

const dataSlise = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, handleGetAllCategoriesulfilled)
      .addCase(getAllWord.fulfilled, handleGetAllWordFulfilled)
      .addCase(createWord.fulfilled, handleCreateWordFulfilled);
  },
});

export default dataSlise.reducer;
