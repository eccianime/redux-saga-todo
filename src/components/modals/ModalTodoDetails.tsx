import {
  HStack,
  IButtonProps,
  Modal,
  Pressable,
  Text,
  View,
} from 'native-base';
import { memo } from 'react';
import { Todo } from '../../redux/todo/types';

type ModalTodoDetailsProps = {
  isOpen: boolean;
  hideModal: () => void;
  handleDelete: () => void;
  handleEdit: () => void;
  handleComplete: () => void;
  data?: Todo;
};

type ButtonProps = IButtonProps & {
  text: string;
  mr?: number;
  ml?: number;
};

const Button = ({ text, mr, ml, ...props }: ButtonProps) => (
  <View overflow={'hidden'} mr={mr} ml={ml} borderRadius={'md'} w={'25'}>
    <Pressable
      android_ripple={{
        foreground: true,
        color: 'white',
      }}
      borderRadius={'md'}
      h={8}
      alignItems='center'
      justifyContent={'center'}
      {...props}
    >
      <Text fontFamily={'bold'} color={'white'} fontSize={'md'}>
        {text}
      </Text>
    </Pressable>
  </View>
);

function ModalTodoDetails({
  isOpen,
  hideModal,
  handleDelete,
  handleEdit,
  handleComplete,
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
          <Button text='Editar' onPress={handleEdit} bg={'blue.600'} />
          <Button text='Eliminar' onPress={handleDelete} bg={'danger.600'} />
          <Button text='Concluir' onPress={handleComplete} bg={'green.600'} />
        </HStack>
      </Modal.Content>
    </Modal>
  );
}

export default memo(ModalTodoDetails);
