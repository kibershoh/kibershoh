import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "../features/darkModeSlice";
export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
  
});