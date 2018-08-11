import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reduce all the reducers into one 

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;