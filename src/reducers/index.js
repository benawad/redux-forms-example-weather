import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import weather from './weather';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  weather
});

export default rootReducer;
