import { createSlice } from "@reduxjs/toolkit";
import {
  createWord,
  getAllCategories,
  getAllWord,
  ownWord,
} from "./data-operation";

const initialState = {
  categories: [],
  words: [],
  allWords: [],
};

const handleGetAllCategoriesulfilled = (state, { payload }) => {
  state.categories = payload;
};

const handleGetOwnWordFulfilled = (state, { payload }) => {
  state.words = payload;
};

const handleCreateWordFulfilled = (state, { payload }) => {
  state.words = {
    ...state.words,
    payload,
  };
};

const handlegetAllWords = (state, { payload }) => {
  state.allWords = payload;
};

const dataSlise = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, handleGetAllCategoriesulfilled)
      .addCase(ownWord.fulfilled, handleGetOwnWordFulfilled)
      .addCase(createWord.fulfilled, handleCreateWordFulfilled)
      .addCase(getAllWord.fulfilled, handlegetAllWords);
  },
});

export default dataSlise.reducer;
