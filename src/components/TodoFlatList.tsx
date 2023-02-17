import { FlatList, VStack } from 'native-base';
import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { deleteTodo } from '../redux/todo/actions';
import { Todo } from '../redux/todo/types';
import ModalDelete from './ModalDelete';
import NoTasks from './NoTasks';
import TodoItem from './TodoItem';

type TodoFlatListProps = { data: Todo[] };

type ModalProps = {
  visible: boolean;
  id?: string;
};

export default function TodoFlatList({ data }: TodoFlatListProps) {
  const [modalData, setModalData] = useState<ModalProps>({
    visible: false,
    id: undefined,
  });

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (modalData?.id) {
      dispatch(deleteTodo(modalData.id));
      setModalData({ visible: false });
    }
  };

  return (
    <VStack flex={1}>
      <ModalDelete
        isOpen={modalData.visible}
        hideModal={() => setModalData({ visible: false })}
        handleDelete={handleDelete}
        taskText={data.find((task) => task.id === modalData.id)?.text || ''}
      />
      {data.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              showDeleteModal={(id: string) =>
                setModalData({ visible: true, id })
              }
            />
          )}
        />
      ) : (
        <NoTasks />
      )}
    </VStack>
  );
}
