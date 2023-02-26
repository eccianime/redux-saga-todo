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

function* getTodos(action: GetTodosAction) {
  try {
    yield put(loadStart());
    const { currentDate } = yield appSelect((state) => state.todos);
    const date = action.payload?.date || currentDate;
    const todos: Todo[] = yield call(FirebaseTodos.getTodos, date);
    yield put(loadSuccess(todos));
  } catch (error) {
    yield put(loadFailure());
  }
}

function* addTodo({
  payload: { title, description, category },
}: AddTodoAction): Generator<any, any, any> {
  try {
    yield put(loadStart());
    const date = yield appSelect((state) => state.todos.currentDate);
    yield call(FirebaseTodos.addTodo, title, description, category, date);
    yield call(getTodos, { type: TodoTypes.GET_TODOS });
  } catch (error) {
    console.error(error);
  }
}

function* updateTodo({
  payload: { id, title, description, category },
}: UpdateTodoAction) {
  try {
    yield put(loadStart());
    yield call(FirebaseTodos.updateTodo, id, title, description, category);
    yield call(getTodos, { type: TodoTypes.GET_TODOS });
  } catch (error) {
    console.error(error);
  }
}

function* toggleTodoComplete({
  payload: { id, isCompleted },
}: UpdateTodoAction) {
  try {
    yield put(loadStart());
    yield call(FirebaseTodos.updateTodoComplete, id, isCompleted);
    yield call(getTodos, { type: TodoTypes.GET_TODOS });
  } catch (error) {
    console.error(error);
  }
}

function* deleteTodo({ payload: { id } }: DeleteTodoAction) {
  try {
    yield put(loadStart());
    yield call(FirebaseTodos.deleteTodo, id);
    yield call(getTodos, { type: TodoTypes.GET_TODOS });
  } catch (error) {
    console.error(error);
  }
}

const todoSaga = [
  takeLatest(TodoTypes.GET_TODOS, getTodos),
  takeLatest(TodoTypes.ADD_TODO, addTodo),
  takeLatest(TodoTypes.UPDATE_TODO, updateTodo),
  takeLatest(TodoTypes.TOGGLE_TODO_COMPLETE, toggleTodoComplete),
  takeLatest(TodoTypes.DELETE_TODO, deleteTodo),
];

export default todoSaga;
