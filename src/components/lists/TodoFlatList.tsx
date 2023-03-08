import { FlatList, VStack } from 'native-base';
import { useState } from 'react';
import { useAppDispatch, useAppNavigation } from '../../hooks';
import { deleteTodo, toggleTodoComplete } from '../../redux/todo/actions';
import { Todo } from '../../redux/todo/types';
import ModalDelete from '../modals/ModalDelete';
import ModalTodoDetails from '../modals/ModalTodoDetails';
import NoTasks from '../NoTasks';
import TodoItem from '../buttons/TodoItemButton';

type TodoFlatListProps = { data: Todo[] };

type HiddenModalProps = {
  visible: false;
};

type ModalProps =
  | HiddenModalProps
  | {
      visible: true;
      id: string;
    };

type TodoModalProps =
  | HiddenModalProps
  | ({
      visible: true;
    } & Todo);

export default function TodoFlatList({ data }: TodoFlatListProps) {
  const [modalDeleteData, setModalDeleteData] = useState<ModalProps>({
    visible: false,
  });
  const [modalTodoData, setModalTodoData] = useState<TodoModalProps>({
    visible: false,
  });

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (modalDeleteData.visible) {
      dispatch(deleteTodo(modalDeleteData.id));
      setModalDeleteData({ visible: false });
    }
  };

  const handleMarkTodoComplete = (id: string, isCompleted: boolean) => {
    dispatch(toggleTodoComplete(id, isCompleted));
  };

  const { navigate } = useAppNavigation();

  return (
    <VStack flex={1} px={5}>
      <ModalDelete
        isOpen={modalDeleteData.visible}
        hideModal={() => setModalDeleteData({ visible: false })}
        handleDelete={handleDelete}
        title={
          modalDeleteData.visible
            ? data.find((task) => task.id === modalDeleteData.id)?.title
            : ''
        }
      />
      <ModalTodoDetails
        isOpen={modalTodoData.visible}
        hideModal={() => setModalTodoData({ visible: false })}
        handleDelete={() =>
          modalTodoData.visible &&
          setModalDeleteData({
            visible: true,
            id: modalTodoData.id,
          })
        }
        handleEdit={() => {
          if (modalTodoData.visible) {
            setModalTodoData({ visible: false });
            navigate('Todo Details', {
              ...modalTodoData,
            });
          }
        }}
        data={
          modalTodoData.visible
            ? data.find((task) => task.id === modalTodoData.id)
            : undefined
        }
      />
      {data.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              toggleComplete={() =>
                handleMarkTodoComplete(item.id, item.isCompleted)
              }
              showTodoModal={() => {
                const target = data.find((todo) => todo.id === item.id);
                if (target) {
                  setModalTodoData({
                    visible: true,
                    ...target,
                  });
                }
              }}
            />
          )}
        />
      ) : (
        <NoTasks />
      )}
    </VStack>
  );
}
