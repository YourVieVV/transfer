import { ADD_IN_STORE, OUT_FROM_STORE, EDIT_IN_STORE } from './Types';

export const outFromStore = (payload) => ({ type: OUT_FROM_STORE, payload });
export const addInStore = (payload) => ({ type: ADD_IN_STORE, payload });
export const editInStore = (payload) => ({ type: EDIT_IN_STORE, payload });
