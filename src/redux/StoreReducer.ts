import { ADD_IN_STORE, initialValueFormik, OUT_FROM_STORE } from './Types';

const defaultState = [initialValueFormik];

export const storeReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_IN_STORE:
      console.log('==========>action.payload = ', action.payload);
      console.log('==========>state = ', state);

      return [...state, action.payload];
    case OUT_FROM_STORE:
      return action.payload;
    default:
      return state;
  }
};
