import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Translation } from "../utils/types";
import {
  getLocalStorageItems,
  saveLocalStorageItems,
} from "../utils/localStorage";
import { FAVOURITE_TRANSLATIONS } from "../utils/consts";

interface TranslationState {
  favourites: Translation[];
}

const initialState: TranslationState = {
  favourites: getLocalStorageItems(FAVOURITE_TRANSLATIONS),
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Translation>) => {
      state.favourites.push(action.payload);
      saveLocalStorageItems(FAVOURITE_TRANSLATIONS, state.favourites);
    },
    deleteFavourite: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload
      );
      saveLocalStorageItems(FAVOURITE_TRANSLATIONS, state.favourites);
    },
    editFavourite: (state, action: PayloadAction<Translation>) => {
      const favouriteIndex = state.favourites.findIndex(
        (favourite) => favourite.id === action.payload.id
      );
      if (favouriteIndex !== -1) {
        state.favourites[favouriteIndex] = action.payload;
        saveLocalStorageItems(FAVOURITE_TRANSLATIONS, state.favourites);
      }
    },
  },
});

export const { addFavourite, deleteFavourite, editFavourite } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
