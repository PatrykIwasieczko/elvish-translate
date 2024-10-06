import {
  FETCH_TRANSLATION_SUCCESS,
  ADD_FAVOURITE,
  LOAD_FAVOURITES,
  DELETE_FAVOURITE,
  EDIT_FAVOURITE,
  FAVOURITE_TRANSLATIONS,
  TRANSLATION,
  CLEAR_TRANSLATION,
} from "../utils/consts";
import { getLocalStorageItems } from "../utils/localStorage";
import { Translation, TranslationActionTypes } from "../utils/types";

type State = {
  translation: Translation | null;
  favourites: Translation[];
};

const initialState: State = {
  translation: getLocalStorageItems(TRANSLATION),
  favourites: getLocalStorageItems(FAVOURITE_TRANSLATIONS),
};

export const rootReducer = (
  state = initialState,
  action: TranslationActionTypes
) => {
  switch (action.type) {
    case FETCH_TRANSLATION_SUCCESS:
      return {
        ...state,
        translation: action.payload,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case EDIT_FAVOURITE:
      return {
        ...state,
        favourites: action.payload,
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
        favourites: action.payload,
      };
    case CLEAR_TRANSLATION:
      return {
        ...state,
        translation: null,
      };
    case LOAD_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
};
