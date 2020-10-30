
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware,combineReducers } from "redux";
import rootReducer from "../Redux/reducers/rootreducer";
import rootSaga from "../Saga/combinesaga";

const sagaMiddleware = createSagaMiddleware()
 const store = createStore(
rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;