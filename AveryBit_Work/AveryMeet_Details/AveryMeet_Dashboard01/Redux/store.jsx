import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../Redux/slice/ToogleSideBar";
import popupReducer from "../Redux/slice/popupSlice";
import viewReducer from "../Redux/slice/viewSlice";
import homeReducer from "../Redux/slice/homeSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    popup: popupReducer,
    view: viewReducer,
    home: homeReducer,
  },
});
