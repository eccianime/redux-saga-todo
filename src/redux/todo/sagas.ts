import { call, put, takeLatest } from 'redux-saga/effects';
import { appSelect } from '../../hooks';
import * as FirebaseTodos from '../../services/todo';
import { loadFailure, loadStart, loadSuccess } from './actions';
import {
  AddTodoAction,
  DeleteTodoAction,
  GetTodosAction,
  Todo,
  TodoTypes,
  UpdateTodoAction,
} from './types';

function* getTodos(action: GetTodosAction): Generator<any, void, unknown> {
  try {
    yield put(loadStart());
    const { currentDate } = yield appSelect((state: any) => state.todos);
    const date = action.payload?.date || currentDate;
    const todos: Todo[] = yield call(FirebaseTodos.getTodos, date);
    yield put(loadSuccess(todos));
  } catch (error) {
    yield put(loadFailure());
  }
}

function* updateTodoApi(
  action: UpdateTodoAction | DeleteTodoAction,
  apiFunc: any
): Generator<any, void, unknown> {
  try {
    yield put(loadStart());
    yield call(apiFunc, ...Object.values(action.payload));
    yield call(getTodos, { type: TodoTypes.GET_TODOS });
  } catch (error) {
    console.error(error);
  }
}

function* addTodo({
  payload: { title, description, category },
}: AddTodoAction): Generator<any, void, unknown> {
  yield* updateTodoApi({ payload: { title, description, category } }, FirebaseTodos.addTodo);
}

function* updateTodo({
  payload: { id, title, description, category },
}: UpdateTodoAction): Generator<any, void, unknown> {
  yield* updateTodoApi(
    { payload: { id, title, description, category } },
    FirebaseTodos.updateTodo
  );
}

function* toggleTodoComplete({
  payload: { id, isCompleted },
}: UpdateTodoAction): Generator<any, void, unknown> {
  yield* updateTodoApi({ payload: { id, isCompleted } }, FirebaseTodos.updateTodoComplete);
}

function* deleteTodo({ payload: { id } }: DeleteTodoAction): Generator<any, void, unknown> {
  yield* updateTodoApi({ payload: { id } }, FirebaseTodos.deleteTodo);
}

export default [
  takeLatest(TodoTypes.GET_TODOS, getTodos),
  takeLatest(TodoTypes.ADD_TODO, addTodo),
  takeLatest(TodoTypes.UPDATE_TODO, updateTodo),
  takeLatest(TodoTypes.TOGGLE_TODO_COMPLETE, toggleTodoComplete),
  takeLatest(TodoTypes.DELETE_TODO, deleteTodo),
];
