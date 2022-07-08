import { LOGIN_ACCOUNT, PENDING, FULFILLED, REJECTED, LOGOUT_ACCOUNT } from '../actionCreator/actionString';

const initialState = {
   loginData: [],
   isLoading: false,
   isError: null,
   msg: ''
};

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_ACCOUNT + PENDING:
         return { ...initialState, isLoading: true, isError: null };
      case LOGIN_ACCOUNT + FULFILLED:
         return { ...state, loginData: action.payload.data.data, isLoading: false, isError: false, msg: 'Login Success' };
      case LOGIN_ACCOUNT + REJECTED:
         return { ...state, isLoading: false, isError: true, msg: action.payload.response.data.message.msg };
      case LOGOUT_ACCOUNT:
         return initialState;
      default:
         return state;
   }
};

export default loginReducer;
