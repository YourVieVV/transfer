import {
  ADD_IN_STORE,
  OUT_FROM_STORE,
  EDIT_IN_STORE,
  ON_MY_WAY,
} from './Types';

const defaultState: any = [];

export const storeReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_IN_STORE:
      return [...state, action.payload];
    case OUT_FROM_STORE:
      return action.payload;
    case EDIT_IN_STORE:
      return action.payload;
    case ON_MY_WAY:
      return action.payload;
    default:
      return state;
  }
};
