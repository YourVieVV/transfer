import {
  ADD_IN_STORE,
  OUT_FROM_STORE,
  EDIT_IN_STORE,
  ON_MY_WAY,
  IN_ARCHIVE,
  formikTypes,
} from './Types';

export const addInStore = (payload: formikTypes) => ({
  type: ADD_IN_STORE,
  payload,
});
export const outFromStore = (payload: formikTypes) => ({
  type: OUT_FROM_STORE,
  payload,
});
export const editInStore = (payload: formikTypes) => ({
  type: EDIT_IN_STORE,
  payload,
});
export const onMyWay = (payload: formikTypes) => ({ type: ON_MY_WAY, payload });
export const inArchive = (payload: formikTypes) => ({
  type: IN_ARCHIVE,
  payload,
});
