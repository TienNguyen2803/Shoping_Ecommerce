import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "../Reducer";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../Saga";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const configStore = () => {
  const middleWare = [sagaMiddleware];
  const enhancer = [applyMiddleware(...middleWare)];
  const store = createStore(RootReducer, composeEnhancers(...enhancer));
  sagaMiddleware.run(RootSaga);
  return store;
};

export default configStore;
