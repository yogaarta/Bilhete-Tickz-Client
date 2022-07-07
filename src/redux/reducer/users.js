import { GET_USER_INFO, PENDING, FULFILLED, REJECTED } from '../actionCreator/actionString';

const initialState = {
   userInfo: [],
   isLoading: false,
   err: false,
};

const userInfoReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER_INFO + PENDING:
         return { ...initialState, isLoading: true };
      case GET_USER_INFO + FULFILLED:
         return { ...state, userInfo: action.payload.data.data[0], isLoading: false };
      case GET_USER_INFO + REJECTED:
         return { ...state, isLoading: false, err: action.payload };
      default:
         return state;
   }
};

export default userInfoReducer;
