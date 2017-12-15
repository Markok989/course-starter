import { responsiveStateReducer } from 'redux-responsive';
import { combineReducers } from 'redux';
import reducer from './drawerReducer';

const rootReducer = combineReducers({
    browser: responsiveStateReducer,
    responsiveDrawer: reducer
});

export default rootReducer;
