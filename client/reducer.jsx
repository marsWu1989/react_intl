import { combineReducers } from 'redux';

import forecast from './components/header/reducer';

const rootReducer = combineReducers({
    forecast,
});

export default rootReducer;

