import {
  HStack,
  IButtonProps,
  Modal,
  Pressable,
  Text,
  View,
} from 'native-base';
import { memo } from 'react';

type ModalDeleteProps = {
  isOpen: boolean;
  hideModal: () => void;
  handleDelete: () => void;
  title?: string;
};

type ButtonProps = IButtonProps & {
  text: string;
  mr?: number;
  ml?: number;
};

const Button = ({ text, mr, ml, ...props }: ButtonProps) => (
  <View overflow={'hidden'} mr={mr} ml={ml} borderRadius={'md'} flex={1}>
    <Pressable
      android_ripple={{
        foreground: true,
        color: 'white',
      }}
      borderRadius={'md'}
      h={10}
      alignItems='center'
      justifyContent={'center'}
      {...props}
    >
      <Text fontFamily={'bold'} color={'white'} fontSize={'xl'}>
        {text}
      </Text>
    </Pressable>
  </View>
);

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
          ¿Seguro que quieres eliminar este elemento?
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
          <Button text='Si' onPress={handleDelete} mr={2} bg={'#66BB6A'} />
          <Button text='No' onPress={hideModal} ml={2} bg={'#EF5350'} />
        </HStack>
      </Modal.Content>
    </Modal>
  );
}

export default memo(ModalDelete);
