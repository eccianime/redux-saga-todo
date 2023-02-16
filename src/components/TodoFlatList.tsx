import {
  FlatList,
  HStack,
  Modal,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { deleteTodo } from '../redux/todo/actions';
import { Todo } from '../redux/todo/types';
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
      <Modal
        isOpen={modalData.visible}
        onClose={() => setModalData({ visible: false })}
      >
        <Modal.Content bg={'violet.600'} w='lg' p={5} pt={5}>
          <Text
            fontWeight={'bold'}
            color={'white'}
            fontSize={'2xl'}
            mb={5}
            textAlign='center'
          >
            ¿Seguro que quieres eliminar este elemento?
          </Text>
          <View
            borderBottomWidth={1}
            w={'full'}
            borderBottomColor={'white'}
            mb={5}
          />
          <Text color={'white'} fontSize='lg' mb={10}>
            {data.find((task) => task.id === modalData.id)?.text}
          </Text>
          <HStack w={'full'}>
            <Pressable
              borderRadius={'md'}
              h={10}
              flex={1}
              mr={2}
              alignItems='center'
              justifyContent={'center'}
              bg={'#66BB6A'}
              onPress={handleDelete}
            >
              <Text fontWeight={'bold'} color={'white'} fontSize={'xl'}>
                Si
              </Text>
            </Pressable>
            <Pressable
              borderRadius={'md'}
              h={10}
              flex={1}
              ml={2}
              alignItems='center'
              justifyContent={'center'}
              bg={'#EF5350'}
              onPress={() => setModalData({ visible: false })}
            >
              <Text fontWeight={'bold'} color={'white'} fontSize={'xl'}>
                No
              </Text>
            </Pressable>
          </HStack>
        </Modal.Content>
      </Modal>
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
