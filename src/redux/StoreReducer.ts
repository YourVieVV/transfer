import { ADD_IN_STORE, OUT_FROM_STORE, EDIT_IN_STORE } from './Types';

const defaultState: any = [];

export const storeReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_IN_STORE:
      return [...state, action.payload];
    case OUT_FROM_STORE:
      if (state.find((el) => el.id === action.payload.id)) {
        return state.filter((el) => el.id !== action.payload.id);
      } else {
        return state;
      }
    case EDIT_IN_STORE:
      if (state.find((el) => el.id === action.payload.id)) {
        return state.map((el) =>
          el.id === action.payload.id ? action.payload : el
        );
      } else {
        return state;
      }
    default:
      return state;
  }
};
