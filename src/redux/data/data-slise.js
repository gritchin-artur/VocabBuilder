const initialState = {
  words: [],
};

const handleGetAllWordFulfilled = (state, { payload }) => {
  state.words = [payload];
};
