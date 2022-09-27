import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "./reducers";

function configureStoreProd(initialState) {
  const middlewares = [thunk];

  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

function configureStoreDev(initialState) {
  const middlewares = [thunk];

  const composeEnhancers =
    (typeof window != "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
