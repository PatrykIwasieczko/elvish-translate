import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  EDIT_FAVOURITE,
  FETCH_TRANSLATION,
  FETCH_TRANSLATION_SUCCESS,
  LOAD_FAVOURITES,
} from "./consts";

export type Translation = {
  id: string;
  english: string;
  elvish: string;
};

export interface FetchTranslationSuccess {
  type: typeof FETCH_TRANSLATION_SUCCESS;
  payload: Translation;
}

export interface FetchTranslationAction {
  type: typeof FETCH_TRANSLATION;
  payload: Translation;
}

export interface AddFavouriteAction {
  type: typeof ADD_FAVOURITE;
  payload: Translation;
}

export interface DeleteFavouriteAction {
  type: typeof DELETE_FAVOURITE;
  payload: Translation[];
}

export interface EditFavouriteAction {
  type: typeof EDIT_FAVOURITE;
  payload: Translation[];
}

export interface LoadFavouritesAction {
  type: typeof LOAD_FAVOURITES;
  payload: Translation[];
}

export type TranslationActionTypes =
  | FetchTranslationAction
  | FetchTranslationSuccess
  | AddFavouriteAction
  | DeleteFavouriteAction
  | EditFavouriteAction
  | LoadFavouritesAction;
