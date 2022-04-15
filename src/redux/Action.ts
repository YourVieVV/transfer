import {
  ADD_IN_STORE,
  OUT_FROM_STORE,
  EDIT_IN_STORE,
  ON_MY_WAY,
} from './Types';

export const addInStore = (payload) => ({ type: ADD_IN_STORE, payload });
export const outFromStore = (payload) => ({ type: OUT_FROM_STORE, payload });
export const editInStore = (payload) => ({ type: EDIT_IN_STORE, payload });
export const onMyWay = (payload) => ({ type: ON_MY_WAY, payload });
