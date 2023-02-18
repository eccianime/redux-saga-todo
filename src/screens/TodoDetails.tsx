import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import {
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import IconList from '../components/IconList';
import { useAppDispatch, useAppNavigation, useAppSelector } from '../hooks';
import { addTodo, updateTodo } from '../redux/todo/actions';
import { Todo } from '../redux/todo/types';

export default function TodoDetails() {
  const params = useRoute().params as Todo;
  const dispatch = useAppDispatch();
  const { goBack } = useAppNavigation();
  const { loading } = useAppSelector((state) => state.todos);

  const [title, setTaskTitle] = useState<string>(params?.title || '');
  const [description, setTaskDescription] = useState<string>(
    params?.description || ''
  );
  const [category, setCategory] = useState<string | undefined>(
    params?.category
  );

  const handleCreateOrEdit = () => {
    if (title && description && category) {
      if (params?.id) {
        dispatch(updateTodo(params.id, title, description, category));
        goBack();
      } else {
        dispatch(addTodo(title, description, category));
        goBack();
      }
    }
  };

  const canEditOrCreate = description && category && title;

  return (
    <BackgroundContainer>
      <VStack flex={1} px={5}>
        <HStack alignItems={'center'} mb={5}>
          <Pressable flexDir={'row'} alignItems='center' onPress={goBack}>
            <Icon
              as={<Ionicons name='arrow-back' />}
              color={'gray.700'}
              size={7}
            />
          </Pressable>
          <Text ml={1} fontSize={'2xl'} color='gray.700' fontFamily={'bold'}>
            {`${params?.id ? 'Editar' : 'Crear'} Tarea`}
          </Text>
        </HStack>
        <Text fontFamily={'bold'} fontSize={'md'} color='gray.700' mb={2}>
          Titulo:
        </Text>
        <Input
          h={10}
          bg='violet.100'
          borderColor={'violet.600'}
          fontSize={18}
          fontFamily='medium'
          value={title}
          onChangeText={setTaskTitle}
          mb={5}
          _focus={{
            bg: 'violet.200',
            borderColor: 'violet.500',
          }}
        />
        <Text fontFamily={'bold'} fontSize={'md'} color='gray.700' mb={2}>
          Descripción:
        </Text>
        <Input
          multiline
          numberOfLines={5}
          textAlignVertical='top'
          bg='violet.100'
          fontFamily='medium'
          borderColor={'violet.600'}
          fontSize={18}
          value={description}
          onChangeText={setTaskDescription}
          mb={5}
          _focus={{
            bg: 'violet.200',
            borderColor: 'violet.500',
          }}
        />
        <Text fontFamily={'bold'} fontSize={'md'} color='gray.700' mb={2}>
          Categoria:
        </Text>
        <IconList icon={category} setIcon={setCategory} />
        <View borderRadius={'lg'} overflow={'hidden'} mb={5}>
          <Pressable
            disabled={!canEditOrCreate || loading}
            w={'full'}
            android_ripple={{
              foreground: true,
              color: 'white',
            }}
            alignItems='center'
            py={2}
            bg={canEditOrCreate ? 'violet.700' : 'violet.300'}
            borderRadius={'lg'}
            onPress={handleCreateOrEdit}
            flexDir='row'
            justifyContent={'center'}
          >
            <Text color='white' fontSize={'lg'} fontFamily={'bold'}>
              {`${
                loading ? 'Cargando...' : params?.id ? 'Editar' : 'Crear'
              } Tarea`}
            </Text>
          </Pressable>
        </View>
      </VStack>
    </BackgroundContainer>
  );
}
