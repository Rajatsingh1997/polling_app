

// import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware} from "redux";
import rootReducer from "../Redux/reducers/rootreducer";
// import rootSaga from "../Saga/combinesaga";

// ​const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer)
// sagaMiddleware.run(rootSaga)
export default store;