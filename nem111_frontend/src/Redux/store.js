import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as userReducer } from "./Users/reducer";
import { reducer as adminReducer } from "./Admin/reducer";
import { reducer as Property } from "./Property/reducer";
const rootReducer = combineReducers({
  authReducer,
  productReducer,
  userReducer,
  adminReducer,
  Property
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
