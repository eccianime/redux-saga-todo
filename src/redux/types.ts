import store from './store';
import { TodoState } from './todo/types';

export type AppState = {
  todos: TodoState;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
