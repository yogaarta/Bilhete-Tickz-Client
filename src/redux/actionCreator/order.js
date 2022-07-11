import { ADD_ORDER, CLEAR_ORDER } from "./actionString"

export const addOrder = (order, seat, total) => {
  return {
    type: ADD_ORDER,
    payload: order,
    seat, total
  }
} 

export const clearOrder = () => {
  return {
    type: CLEAR_ORDER,
  }
}