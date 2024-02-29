import { createSlice } from "@reduxjs/toolkit";
import { getAllWord } from "./data-operation";

const initialState = {
  words: [],
};

const handleGetAllWordFulfilled = (state, { payload }) => {
  state.words = payload.results;
};

const dataSlise = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getAllWord.fulfilled, handleGetAllWordFulfilled);
  },
});

export default dataSlise.reducer;
