import { Text } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import {
  BackgroundContainer,
  CreateTaskButton,
  DayList,
  Loader,
} from '../components';
import PillFilter from '../components/PillFilter';
import TodoFlatList from '../components/TodoFlatList';
import {
  CATEGORIES,
  TASK_CATEGORY_ZERO,
  TASK_STATUSES,
} from '../config/constants';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getTodos } from '../redux/todo/actions';

const TodoList = () => {
  const { data, loading, currentDate } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const getCategories = useCallback(() => {
    const categoryNames = [TASK_CATEGORY_ZERO];
    if (data.length > 0) {
      data.forEach((cat) => {
        const target = CATEGORIES.find((c) => c.icon === cat.category);
        if (target && !categoryNames.some((c) => c.name === target.name)) {
          categoryNames.push({ icon: target.icon, name: target.name });
        }
      });
    }
    return categoryNames;
  }, [data]);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    getCategories()[0].name
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    TASK_STATUSES[0]
  );

  const filteredData = () => {
    return data.filter((item) => {
      const targetCategory = getCategories().find(
        (c) => c.name === selectedCategory
      )?.icon;
      const categoryMatch =
        selectedCategory === TASK_CATEGORY_ZERO.name ||
        item.category === targetCategory;
      const statusMatch =
        selectedStatus === TASK_STATUSES[0] ||
        (selectedStatus === TASK_STATUSES[1] && !item.isCompleted) ||
        (selectedStatus === TASK_STATUSES[2] && item.isCompleted);
      return categoryMatch && statusMatch;
    });
  };

  useEffect(() => {
    dispatch(getTodos(currentDate));
    setSelectedCategory(TASK_CATEGORY_ZERO.name);
    setSelectedStatus(TASK_STATUSES[0]);
  }, [currentDate]);

  return (
    <BackgroundContainer>
      <Text px={5} fontSize={'2xl'} color='gray.700' fontFamily={'bold'} mb={5}>
        Lista de Tareas
      </Text>
      <DayList currentDate={currentDate} />
      {!!data?.length && (
        <>
          <PillFilter
            title='Categoria:'
            data={getCategories().map((category) => category.name)}
            selectedValue={selectedCategory}
            setSelectedValue={setSelectedCategory}
          />
          <PillFilter
            title='Estado:'
            data={TASK_STATUSES}
            selectedValue={selectedStatus}
            setSelectedValue={setSelectedStatus}
          />
        </>
      )}
      {loading ? <Loader /> : <TodoFlatList data={filteredData()} />}
      <CreateTaskButton />
    </BackgroundContainer>
  );
};

export default TodoList;
