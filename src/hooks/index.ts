import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { select } from 'redux-saga/effects';
import { AppDispatch, RootState } from '../redux/types';
import { TodoParamList } from '../routes/types';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export function* appSelect<TSelected>(
  selector: (state: RootState) => TSelected
): Generator<any, TSelected, TSelected> {
  return yield select(selector);
}

export type AppNavigation = NativeStackNavigationProp<TodoParamList>;

export const useAppNavigation = () => useNavigation<AppNavigation>();
