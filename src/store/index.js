// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "INCREASEBY5":
//       return {
//         ...state,
//         counter: state.counter + action.value,
//       };
//     case "SHOWCOUNTER":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };
// const store = createStore(counterReducer);
const store = configureStore({
  //combination of reducers
  reducer: { counter: counterReducer, auth: authReducer },
  //   reducer: counterSlice.reducer,
});
export default store;
