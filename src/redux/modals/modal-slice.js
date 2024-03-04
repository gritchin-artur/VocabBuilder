import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenMobile: false,
    isModalOpenAddWord: false,
    isModalOpenClickWord: false,
    clickWordCoordinates: { x: 0, y: 0 },
    clickWordId: [],
  },
  reducers: {
    openModalMobile: (state) => {
      state.isModalOpenMobile = true;
    },
    closeModalMobile: (state) => {
      state.isModalOpenMobile = false;
    },
    openModalAddWord: (state) => {
      state.isModalOpenAddWord = true;
    },
    closeModalAddWord: (state) => {
      state.isModalOpenAddWord = false;
    },
    // openModalClickWord: (state) => {
    //   state.isModalOpenClickWord = true;
    // },
    openModalClickWord: (state, action) => {
      state.isModalOpenClickWord = true;
      state.clickWordCoordinates = action.payload;
      state.clickWordId = action.payload.wordId;
    },
    closeModalClickWord: (state) => {
      state.isModalOpenClickWord = false;
    },
    // addBookTrialLesson(state, { payload }) {
    //   state.isBookTrialLesson.splice(0, 1, payload);
    // },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalMobile,
  closeModalMobile,
  openModalAddWord,
  closeModalAddWord,
  openModalClickWord,
  closeModalClickWord,
  // addBookTrialLesson,
} = modalSlice.actions;
