import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import gruopsReducer from './gruopsReducer';

export default combineReducers({
  gruops: gruopsReducer,
  logger: (state = {}, { type }) => {
    if (window.logger) {
      window.logger.info(
        type,
      );
    }
    return state;
  },
  toastr: toastrReducer,
});
