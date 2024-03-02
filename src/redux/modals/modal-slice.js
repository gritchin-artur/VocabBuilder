import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenMobile: false,
    isModalOpenAddWord: false,
    isModalOpenTrainOneseif: false,
    // isBookTrialLesson: [],
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
    openModalTrainOneseif: (state) => {
      state.isModalOpenTrialLesson = true;
    },
    closeModalTrainOneseif: (state) => {
      state.isModalOpenTrialLesson = false;
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
  openModalTrainOneseif,
  closeModalTrainOneseif,
  // addBookTrialLesson,
} = modalSlice.actions;
