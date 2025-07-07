import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "view",
  initialState: {
    currentView: "Home", // default Home rakho
  },
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

export const { setView } = homeSlice.actions;
export default homeSlice.reducer;
