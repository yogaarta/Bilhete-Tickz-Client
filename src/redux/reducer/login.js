import { LOGIN_ACCOUNT, PENDING, FULFILLED, REJECTED } from '../actionCreator/actionString';

const initialState = {
   loginData: [],
   isLoading: false,
   err: false,
};

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_ACCOUNT + PENDING:
         return { ...initialState, isLoading: true };
      case LOGIN_ACCOUNT + FULFILLED:
         return { ...state, loginData: action.payload.data.data, isLoading: false };
      case LOGIN_ACCOUNT + REJECTED:
         return { ...state, isLoading: false, err: action.payload };
      default:
         return state;
   }
};

export default loginReducer;
