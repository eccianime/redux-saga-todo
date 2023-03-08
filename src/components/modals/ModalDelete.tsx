import { HStack, Modal, Text, View } from 'native-base';
import { memo } from 'react';
import ModalButton from '../buttons/ModalButton';

type ModalDeleteProps = {
  isOpen: boolean;
  hideModal: () => void;
  handleDelete: () => void;
  title?: string;
};

function ModalDelete({
  isOpen,
  hideModal,
  handleDelete,
  title,
}: ModalDeleteProps) {
  return (
    <Modal isOpen={isOpen} onClose={hideModal}>
      <Modal.Content bg={'violet.600'} w='lg' p={5} pt={5}>
        <Text
          fontFamily={'bold'}
          color={'white'}
          fontSize={'lg'}
          mb={1}
          textAlign='center'
        >
          Tem certeza que deseja eliminar esta tarefa?
        </Text>
        <View
          borderBottomWidth={1}
          w={'full'}
          borderBottomColor={'white'}
          mb={3}
        />
        <Text color={'white'} fontFamily={'medium'} fontSize='md' mb={10}>
          {title}
        </Text>
        <HStack w={'full'}>
          <ModalButton
            text='Sim'
            onPress={handleDelete}
            mr={2}
            bg={'#66BB6A'}
          />
          <ModalButton text='Não' onPress={hideModal} ml={2} bg={'#EF5350'} />
        </HStack>
      </Modal.Content>
    </Modal>
  );
}

export default memo(ModalDelete);
