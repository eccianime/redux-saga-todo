import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import {
  Center,
  Icon,
  IconButton,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import { CATEGORIES } from '../../config/constants';
import { Todo } from '../../redux/todo/types';

type TodoItemButtonProps = {
  todo: Todo;
  toggleComplete: () => void;
  showTodoModal: () => void;
};

export default function TodoItemButton({
  todo,
  toggleComplete,
  showTodoModal,
}: TodoItemButtonProps) {
  const { title, category, isCompleted, created_at } = todo;
  return (
    <View mb={5} overflow='hidden' rounded={'xl'}>
      <Pressable
        flexDirection={'row'}
        alignItems={'center'}
        p={2}
        rounded='xl'
        bg={'violet.700'}
        borderColor={'violet.900'}
        borderWidth={2}
        android_ripple={{
          foreground: true,
          color: 'white',
        }}
        onPress={showTodoModal}
      >
        <Center
          bg={CATEGORIES.find((item) => item.icon === category)?.color}
          h={'10'}
          w={'10'}
          rounded='xl'
          mr={2}
        >
          <Icon as={<Ionicons name={category} />} color={'white'} size={'lg'} />
        </Center>
        <VStack flex={1} mr={2}>
          <Text
            color='white'
            fontSize={'lg'}
            fontFamily={'bold'}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text color='white' fontSize={'sm'} fontFamily={'medium'}>
            {`Creada el: ${dayjs
              .unix(created_at / 1000)
              .format('DD[ de ]MMMM[ a las ]hh:mm A')}`}
          </Text>
        </VStack>
        <IconButton
          mr={2}
          rounded={'full'}
          _pressed={{
            opacity: 0.5,
            bgColor: 'white',
          }}
          h={'8'}
          w={'8'}
          onPress={toggleComplete}
          icon={
            <Icon
              alignSelf={'center'}
              as={
                <Ionicons
                  name={isCompleted ? 'checkmark-circle' : 'radio-button-off'}
                />
              }
              color={'white'}
              size={'3xl'}
            />
          }
        />
      </Pressable>
    </View>
  );
}
