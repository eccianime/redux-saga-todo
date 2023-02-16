import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Center, HStack, Icon, IconButton, Text } from 'native-base';
import { useAppNavigation } from '../hooks';
import { Todo } from '../redux/todo/types';

type TodoItemProps = {
  todo: Todo;
  showDeleteModal: (id: string) => void;
};

export default function TodoItem({ todo, showDeleteModal }: TodoItemProps) {
  const { color, icon, text, id } = todo;
  const { navigate } = useAppNavigation();

  return (
    <HStack
      alignItems={'center'}
      p={2}
      mb={5}
      rounded='xl'
      bg={'violet.700'}
      borderColor={'violet.900'}
      borderWidth={2}
    >
      <Center bg={color} h={'10'} w={'10'} rounded='xl' mr={2}>
        <Icon
          ml={1}
          as={<Ionicons name={icon as any} />}
          color={'white'}
          size={'lg'}
        />
      </Center>
      <Text color='white' fontSize={'lg'} fontWeight='bold' flex={1}>
        {text}
      </Text>
      <IconButton
        mr={2}
        size={'md'}
        rounded={'full'}
        icon={
          <Icon
            ml={1}
            as={<FontAwesome name='pencil' />}
            color={'white'}
            size={'md'}
          />
        }
        bg={'blue.500'}
        onPress={() => {
          navigate('Todo Details', {
            id: todo.id,
            color: todo.color,
            icon: todo.icon,
            text: todo.text,
          });
        }}
      />
      <IconButton
        rounded={'full'}
        icon={
          <Icon
            ml={1}
            as={<FontAwesome name='remove' />}
            color={'white'}
            size={'md'}
          />
        }
        bg={'red.500'}
        onPress={() => showDeleteModal(id)}
      />
    </HStack>
  );
}
