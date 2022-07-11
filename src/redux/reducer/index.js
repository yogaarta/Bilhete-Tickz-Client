import { combineReducers } from 'redux';
import loginReducer from './login';
import orderReducer from './order';
import userInfoReducer from './users';

const reducer = combineReducers({
   auth: loginReducer,
   userInfo: userInfoReducer,
   order: orderReducer
});

export default reducer;
