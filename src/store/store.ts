import { configureStore } from "@reduxjs/toolkit";
import translationReducer from "./favouritesSlice";

export const store = configureStore({
  reducer: {
    translations: translationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
