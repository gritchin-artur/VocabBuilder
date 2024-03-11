import { createSlice } from "@reduxjs/toolkit";
import {
  answersWord,
  getAllCategories,
  getAllWord,
  ownWord,
  statisticsWords,
  tasksWords,
} from "./data-operation";

const initialState = {
  categories: [],
  isLoadingCategories: false,
  statistics: [],
  words: [],
  isLoadingWords: false,
  allWords: [],
  tasks: [],
  answers: [],
};

const handleGetAllCategoriesPending = (state, { payload }) => {
  state.isLoadingCategories = true;
};

const handleGetAllCategoriesulfilled = (state, { payload }) => {
  state.categories = payload;
  state.isLoadingCategories = false;
};

const handleGetStatisticsWordFulfilled = (state, { payload }) => {
  state.statistics = payload;
};

const handleGetOwnWordPending = (state, { payload }) => {
  state.isLoadingWords = true;
};
const handleGetOwnWordFulfilled = (state, { payload }) => {
  state.words = payload;
  state.isLoadingWords = false;
};
const handleGetOwnWordRejected = (state, { payload }) => {
  state.isLoadingWords = true;
};

const handlegetAllWords = (state, { payload }) => {
  state.allWords = payload;
};

const handTasksWords = (state, { payload }) => {
  state.tasks = payload;
};

const handleAnswers = (state, { payload }) => {
  state.answers = payload;
};
const dataSlise = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, handleGetAllCategoriesPending)
      .addCase(getAllCategories.fulfilled, handleGetAllCategoriesulfilled)
      .addCase(statisticsWords.fulfilled, handleGetStatisticsWordFulfilled)
      .addCase(ownWord.pending, handleGetOwnWordPending)
      .addCase(ownWord.fulfilled, handleGetOwnWordFulfilled)
      .addCase(ownWord.rejected, handleGetOwnWordRejected)

      .addCase(getAllWord.fulfilled, handlegetAllWords)
      .addCase(tasksWords.fulfilled, handTasksWords)
      .addCase(answersWord.fulfilled, handleAnswers);
  },
});

export default dataSlise.reducer;
