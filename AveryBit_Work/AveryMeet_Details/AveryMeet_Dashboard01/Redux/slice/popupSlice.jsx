import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isVisible: false,
    profileVisible: false,
    navPopupVisible: false,
    selectedNavItem: "Home",
  },
  reducers: {
    showPopup: (state) => {
      state.isVisible = true;
    },
    hidePopup: (state) => {
      state.isVisible = false;
    },
    togglePopup: (state) => {
      state.isVisible = !state.isVisible;
    },

    showProfile: (state) => {
      state.profileVisible = true;
    },
    hideProfile: (state) => {
      state.profileVisible = false;
    },
    toggleProfile: (state) => {
      state.profileVisible = !state.profileVisible;
    },

    showNavPopups: (state) => {
      state.navPopupVisible = true;
    },
    hidNavPopups: (state) => {
      state.navPopupVisible = false;
    },
    toggleNavPopups: (state) => {
      state.navPopupVisible = !state.navPopupVisible;
    },
    setNavItem: (state, actions) => {
      state.selectedNavItem = actions.payload;
      state.navPopupVisible = false;
    },
  },
});

export const {
  showPopup,
  hidePopup,
  togglePopup,
  showProfile,
  hideProfile,
  toggleProfile,
  showNavPopups,
  hidNavPopups,
  toggleNavPopups,
  setNavItem,
} = popupSlice.actions;
export default popupSlice.reducer;
