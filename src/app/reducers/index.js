import { combineReducers } from "redux";
import home from '~/modules/home/reducer';

/**
 * all available reducers are wrapped by the combine reducers function
 */

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
