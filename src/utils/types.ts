import {
  ADD_FAVOURITE,
  CLEAR_TRANSLATION,
  DELETE_FAVOURITE,
  EDIT_FAVOURITE,
  FETCH_TRANSLATION,
  FETCH_TRANSLATION_SUCCESS,
  LOGIN,
  LOGOUT,
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

export interface ClearTranslation {
  type: typeof CLEAR_TRANSLATION;
  payload: undefined;
}

export interface LoginAction {
  type: typeof LOGIN;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type TranslationActionTypes =
  | FetchTranslationAction
  | FetchTranslationSuccess
  | AddFavouriteAction
  | DeleteFavouriteAction
  | EditFavouriteAction
  | ClearTranslation
  | LoginAction
  | LogoutAction;
