import {
  ADD_IN_STORE,
  OUT_FROM_STORE,
  EDIT_IN_STORE,
  ON_MY_WAY,
  IN_ARCHIVE,
  formikTypes,
  data,
} from './Types';
import { PayloadAction } from '@reduxjs/toolkit';

const defaultState: data = [];

export const storeReduser = (
  state = defaultState,
  action: PayloadAction<formikTypes>
) => {
  switch (action.type) {
    case ADD_IN_STORE:
      return [...state, action.payload];
    case OUT_FROM_STORE:
      return action.payload;
    case EDIT_IN_STORE:
      return action.payload;
    case ON_MY_WAY:
      return action.payload;
    case IN_ARCHIVE:
      return action.payload;
    default:
      return state;
  }
};
