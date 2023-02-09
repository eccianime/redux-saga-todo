import { put, call, SagaReturnType, takeLatest } from "redux-saga/effects";
import { loadFailure, loadStart, loadSuccess } from "./actions";
import {} from "./reducer";
import * as FirebaseTodos from "../../services/todo";
import {
  TodoTypes,
  AddTodoAction,
  UpdateTodoAction,
  DeleteTodoAction,
} from "./types";

function* getTodos() {
  yield put(loadStart());
  const todos: SagaReturnType<typeof FirebaseTodos.getTodos> = yield call(
    FirebaseTodos.getTodos
  );
  if (todos) {
    yield put(loadSuccess(todos));
  } else {
    yield put(loadFailure());
  }
}

function* addTodo(action: AddTodoAction) {
  const { text } = action.payload;
  yield put(loadStart());
  yield call(FirebaseTodos.addTodo, text);
  yield call(getTodos);
}

function* updateTodo(action: UpdateTodoAction) {
  const { text, id } = action.payload;
  yield put(loadStart());
  yield call(FirebaseTodos.updateTodo, id, text);
  yield call(getTodos);
}

function* deleteTodo(action: DeleteTodoAction) {
  const { id } = action.payload;
  yield put(loadStart());
  yield call(FirebaseTodos.deleteTodo, id);
  yield call(getTodos);
}

export const todoSagas = [
  takeLatest(TodoTypes.GET_TODO, getTodos),
  takeLatest(TodoTypes.ADD_TODO, addTodo),
  takeLatest(TodoTypes.UPDATE_TODO, updateTodo),
  takeLatest(TodoTypes.DELETE_TODO, deleteTodo),
];
