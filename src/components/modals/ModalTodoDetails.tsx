import { HStack, Modal, Text, View } from 'native-base';
import { memo } from 'react';
import { Todo } from '../../redux/todo/types';
import ModalButton from '../buttons/ModalButton';

type ModalTodoDetailsProps = {
  isOpen: boolean;
  hideModal: () => void;
  handleDelete: () => void;
  handleEdit: () => void;
  data?: Todo;
};

function ModalTodoDetails({
  isOpen,
  hideModal,
  handleDelete,
  handleEdit,
  data,
}: ModalTodoDetailsProps) {
  return (
    <Modal isOpen={isOpen} onClose={hideModal}>
      <Modal.Content bg={'violet.600'} w='lg' p={5} pt={5}>
        <Modal.CloseButton
          _pressed={{
            bg: 'transparent',
          }}
          _icon={{ color: 'white' }}
        />
        <Text
          px={4}
          fontFamily={'bold'}
          color={'white'}
          fontSize={'lg'}
          mb={1}
          textAlign='center'
        >
          {data?.title}
        </Text>
        <View
          borderBottomWidth={1}
          w={'full'}
          borderBottomColor={'white'}
          mb={3}
        />
        <Text color={'white'} fontFamily={'medium'} fontSize='md' mb={5}>
          {data?.description}
        </Text>
        <HStack w={'full'} justifyContent='space-between'>
          <ModalButton
            mr={2}
            text='Editar'
            onPress={handleEdit}
            bg={'blue.600'}
          />
          <ModalButton
            ml={2}
            text='Eliminar'
            onPress={handleDelete}
            bg={'danger.600'}
          />
        </HStack>
      </Modal.Content>
    </Modal>
  );
}

export default memo(ModalTodoDetails);
