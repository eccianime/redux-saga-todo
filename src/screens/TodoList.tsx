import { Text } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import {
  BackgroundContainer,
  BasicButton,
  DayList,
  Loader,
  PillFilterList,
  TodoFlatList,
} from '../components';
import {
  CATEGORIES,
  TASK_CATEGORY_ZERO,
  TASK_STATUSES,
} from '../config/constants';
import { useAppDispatch, useAppNavigation, useAppSelector } from '../hooks';
import { getTodos } from '../redux/todo/actions';

const TodoList = () => {
  const { data, loading, currentDate } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const { navigate } = useAppNavigation();

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

  const handleGoToCreate = () => {
    navigate('Todo Details');
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
          <PillFilterList
            title='Categoria:'
            data={getCategories().map((category) => category.name)}
            selectedValue={selectedCategory}
            setSelectedValue={setSelectedCategory}
          />
          <PillFilterList
            title='Estado:'
            data={TASK_STATUSES}
            selectedValue={selectedStatus}
            setSelectedValue={setSelectedStatus}
          />
        </>
      )}
      {loading ? <Loader /> : <TodoFlatList data={filteredData()} />}
      <BasicButton
        icon='plus'
        text={'Crear Tarea'}
        containerProps={{ mx: 5 }}
        onPress={handleGoToCreate}
      />
    </BackgroundContainer>
  );
};

export default TodoList;
