import { combineReducers } from "redux";
import sample from '../components/floorSwitcher/reducer';

/**
 * all available reducers are wrapped by the combine reducers function
 */

const rootReducer = combineReducers({
  sample,
});

export default rootReducer;
