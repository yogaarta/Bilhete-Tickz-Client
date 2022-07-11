import { ADD_ORDER } from "../actionCreator/actionString";

const initialState = {
  orderInfo: {},
  seat: [],
  total: 0
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state, 
        orderInfo: action.payload,
        seat: action.seat,
        total: action.total
      };

    default:
      return state
  }
}

export default orderReducer