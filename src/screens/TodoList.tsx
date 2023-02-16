import { Text } from 'native-base';
import React, { useEffect } from 'react';
import {
  BackgroundContainer,
  CreateTaskButton,
  DayList,
  Loader,
} from '../components';
import TodoFlatList from '../components/TodoFlatList';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getTodos } from '../redux/todo/actions';

const TodoList = () => {
  const { data, loading, currentDate } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos(currentDate));
  }, [currentDate]);

  return (
    <BackgroundContainer>
      <Text fontSize={'2xl'} color='gray.700' fontWeight={'bold'} mb={5}>
        Lista de Tareas
      </Text>
      <DayList currentDate={currentDate} />
      {loading ? <Loader /> : <TodoFlatList data={data} />}
      <CreateTaskButton />
    </BackgroundContainer>
  );
};

export default TodoList;
