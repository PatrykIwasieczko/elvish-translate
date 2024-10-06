import { Dispatch } from "@reduxjs/toolkit";
import {
  getLocalStorageItems,
  saveLocalStorageItems,
} from "../utils/localStorage";

import {
  FETCH_TRANSLATION_SUCCESS,
  ADD_FAVOURITE,
  LOAD_FAVOURITES,
  DELETE_FAVOURITE,
  FAVOURITE_TRANSLATIONS,
  EDIT_FAVOURITE,
  API_URL,
  TRANSLATION,
  CLEAR_TRANSLATION,
} from "../utils/consts";
import { Translation } from "../utils/types";

export const fetchTranslation =
  (text: string) => async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`${API_URL}?text=${text}`);
      const data = await response.json();

      const translation: Translation = {
        english: text,
        elvish: data.contents.translated,
        id: crypto.randomUUID(),
      };

      dispatch({
        type: FETCH_TRANSLATION_SUCCESS,
        payload: translation,
      });
      saveLocalStorageItems(TRANSLATION, translation);
    } catch (error) {
      console.error("Error fetching translation:", error);
    }
  };

export const addFavourite = (translation: Translation) => {
  return (dispatch: Dispatch) => {
    const favourites = getLocalStorageItems(FAVOURITE_TRANSLATIONS) || [];
    favourites.push(translation);
    saveLocalStorageItems(FAVOURITE_TRANSLATIONS, favourites);

    dispatch({
      type: ADD_FAVOURITE,
      payload: translation,
    });
  };
};

export const clearTranslation = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem(TRANSLATION);

    dispatch({
      type: CLEAR_TRANSLATION,
    });
  };
};

export const loadFavourites = () => {
  return (dispatch: Dispatch) => {
    const favourites = getLocalStorageItems(FAVOURITE_TRANSLATIONS);

    dispatch({
      type: LOAD_FAVOURITES,
      payload: favourites,
    });
  };
};

export const editFavourite = (translation: Translation) => {
  return (dispatch: Dispatch) => {
    const favourites = getLocalStorageItems(FAVOURITE_TRANSLATIONS);

    const favouriteIndex = favourites.findIndex(
      (favourite: Translation) => favourite.id === translation.id
    );
    if (favouriteIndex !== -1) {
      favourites[favouriteIndex] = translation;
      saveLocalStorageItems(FAVOURITE_TRANSLATIONS, favourites);
    }

    dispatch({
      type: EDIT_FAVOURITE,
      payload: favourites,
    });
  };
};

export const deleteFavourite = (translationId: string) => {
  return (dispatch: Dispatch) => {
    const favourites = getLocalStorageItems(FAVOURITE_TRANSLATIONS);
    const updatedfavourites = favourites.filter(
      (favourite: Translation) => favourite.id !== translationId
    );
    saveLocalStorageItems(FAVOURITE_TRANSLATIONS, updatedfavourites);

    dispatch({
      type: DELETE_FAVOURITE,
      payload: updatedfavourites,
    });
  };
};
