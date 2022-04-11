import { ADD_IN_STORE, OUT_FROM_STORE } from './Types';

export const outFromStore = (payload) => ({ type: OUT_FROM_STORE, payload });
export const addInStore = (payload) => ({ type: ADD_IN_STORE, payload });
