import {
  call,
  put,
  SagaReturnType,
  select,
  takeEvery,
} from 'redux-saga/effects';
import { appSelect } from '../../hooks';
import * as FirebaseTodos from '../../services/todo';
import { loadFailure, loadStart, loadSuccess } from './actions';
import {
  AddTodoAction,
  DeleteTodoAction,
  GetTodosAction,
  TodoTypes,
  UpdateTodoAction,
} from './types';

function* getTodos(action: GetTodosAction) {
  yield put(loadStart());
  const { currentDate } = yield appSelect((state) => state.todos);
  const date = action.payload?.date;
  const todos: SagaReturnType<typeof FirebaseTodos.getTodos> = yield call(
    FirebaseTodos.getTodos,
    date || currentDate
  );
  if (todos) {
    yield put(loadSuccess(todos));
  } else {
    yield put(loadFailure());
  }
}

function* addTodo(action: AddTodoAction): Generator<any, any, any> {
  yield put(loadStart());
  const { title, description, category } = action.payload;
  const date = yield select((state) => state.todos.currentDate);
  yield call(FirebaseTodos.addTodo, title, description, category, date);
  yield call(getTodos, { type: TodoTypes.GET_TODOS });
}

function* updateTodo(action: UpdateTodoAction) {
  yield put(loadStart());
  const { title, id, category, description } = action.payload;
  yield call(FirebaseTodos.updateTodo, id, title, description, category);
  yield call(getTodos, { type: TodoTypes.GET_TODOS });
}

function* toggleTodoComplete(action: UpdateTodoAction) {
  yield put(loadStart());
  const { id, isCompleted } = action.payload;
  yield call(FirebaseTodos.updateTodoComplete, id, isCompleted);
  yield call(getTodos, { type: TodoTypes.GET_TODOS });
}

function* deleteTodo(action: DeleteTodoAction) {
  yield put(loadStart());
  const { id } = action.payload;
  yield call(FirebaseTodos.deleteTodo, id);
  yield call(getTodos, { type: TodoTypes.GET_TODOS });
}

export const todoSagas = [
  takeEvery(TodoTypes.GET_TODOS, getTodos),
  takeEvery(TodoTypes.ADD_TODO, addTodo),
  takeEvery(TodoTypes.UPDATE_TODO, updateTodo),
  takeEvery(TodoTypes.DELETE_TODO, deleteTodo),
  takeEvery(TodoTypes.TOGGLE_TODO_COMPLETE, toggleTodoComplete),
];
