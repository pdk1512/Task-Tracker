import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSagas from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;
