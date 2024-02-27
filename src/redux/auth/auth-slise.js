import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import authOperations from "./auth-operations";

const initialState = {
  // user: { name: null, email: null },
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const handleLogOutFulfilled = (state) => {
  // state.user = { name: null, email: null };
  state.name = null;
  state.email = null;
  state.token = null;
  state.isLoggedIn = false;
  state.isFetchingCurrentUser = false;
};

const handleFetchCurrentUserPending = (state) => {
  state.isRefreshing = true;
};

const handleFetchCurrentUserFulfilled = (state, { payload }) => {
  // state.user = payload;
  state.name = payload;
  state.email = payload;
  state.isLoggedIn = true;
  state.isFetchingCurrentUser = false;
};

const handleFetchCurrentUserReject = (state) => {
  state.isFetchingCurrentUser = false;
};

const handleRegisterLogInFulfilled = (state, { payload }) => {
  // state.user = payload.user;
  state.name = payload.name;
  state.email = payload.email;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(authOperations.logOut.fulfilled, handleLogOutFulfilled)
      .addCase(
        authOperations.fetchCurrentUser.pending,
        handleFetchCurrentUserPending
      )
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        handleFetchCurrentUserFulfilled
      )
      .addCase(
        authOperations.fetchCurrentUser.rejected,
        handleFetchCurrentUserReject
      )

      .addMatcher(
        isAnyOf(
          authOperations.register.fulfilled,
          authOperations.logIn.fulfilled
        ),
        handleRegisterLogInFulfilled
      );
  },
});

export default authSlice.reducer;

const confused = "no";
const myKey = confused;

const obj = {
  [myKey]: false,
};

console.log(obj);