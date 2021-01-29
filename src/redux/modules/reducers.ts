import { combineReducers } from 'redux';
import calculator from './calculator';

const rootReducer = combineReducers({
  // resources: combineReducers({  }),
  ui: combineReducers({ calculator }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
