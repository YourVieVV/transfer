import { combineReducers } from 'redux';
import { storeReduser } from './StoreReducer';

export const RootReducer = combineReducers({
  reducer: storeReduser,
});
