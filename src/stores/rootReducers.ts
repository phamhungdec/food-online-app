import { combineReducers } from 'redux';

// reducers
import appReducer from 'reducers/app.reducer';

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;
