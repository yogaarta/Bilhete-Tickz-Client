import { combineReducers } from 'redux';
import loginReducer from './login';
import userInfoReducer from './users';

const reducer = combineReducers({
   auth: loginReducer,
   userInfo: userInfoReducer,
});

export default reducer;
