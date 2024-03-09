import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getAllWord,
  ownWord,
  statisticsWords,
} from "./data-operation";

const initialState = {
  categories: [],
  statistics: [],
  words: [],
  allWords: [],
};

const handleGetAllCategoriesulfilled = (state, { payload }) => {
  state.categories = payload;
};

const handleGetStatisticsWordFulfilled = (state, { payload }) => {
  state.statistics = payload;
};

const handleGetOwnWordFulfilled = (state, { payload }) => {
  state.words = payload;
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
      .addCase(statisticsWords.fulfilled, handleGetStatisticsWordFulfilled)
      .addCase(ownWord.fulfilled, handleGetOwnWordFulfilled)
      .addCase(getAllWord.fulfilled, handlegetAllWords);
  },
});

export default dataSlise.reducer;
