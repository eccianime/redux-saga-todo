import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Store } from "redux";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { TodoState } from "./todo/types";

export interface AppState {
  todos: TodoState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
