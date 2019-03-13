import { combineReducers } from 'redux';

import news from './news';
import users from './users';

const appReducer = combineReducers({
  news,
  users
});

export default appReducer;