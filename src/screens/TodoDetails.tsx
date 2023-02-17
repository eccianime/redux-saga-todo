import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { HStack, Icon, Input, Pressable, Text, View } from 'native-base';
import React, { useState } from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import ColorList from '../components/ColorList';
import IconList from '../components/IconList';
import { useAppDispatch, useAppNavigation, useAppSelector } from '../hooks';
import { addTodo, updateTodo } from '../redux/todo/actions';
import { TodoRouteParams } from '../routes/types';

export default function TodoDetails() {
  const params = useRoute().params as TodoRouteParams;
  const dispatch = useAppDispatch();
  const { goBack } = useAppNavigation();
  const { loading } = useAppSelector((state) => state.todos);

  const [taskText, setTaskText] = useState<string>(params?.text || '');
  const [icon, setIcon] = useState<string | undefined>(params?.icon);
  const [currentColor, setSelectedColor] = useState<string | undefined>(
    params?.color
  );

  const handleCreateOrEdit = () => {
    if (currentColor && taskText && icon) {
      if (params?.id) {
        dispatch(updateTodo(params.id, taskText, icon, currentColor));
        goBack();
      } else {
        dispatch(addTodo(taskText, icon, currentColor));
        goBack();
      }
    }
  };

  const canEditOrCreate = currentColor && icon && !!taskText.length;

  return (
    <BackgroundContainer>
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
        Tarea:
      </Text>
      <Input
        h={10}
        bg='violet.100'
        borderColor={'violet.600'}
        fontSize={18}
        value={taskText}
        onChangeText={setTaskText}
        mb={5}
        _focus={{
          bg: 'violet.200',
          borderColor: 'violet.500',
        }}
      />
      <Text fontFamily={'bold'} fontSize={'md'} color='gray.700' mb={2}>
        Categoria:
      </Text>
      <IconList icon={icon} setIcon={setIcon} />
      <Text fontFamily={'bold'} fontSize={'md'} color='gray.700' mb={2}>
        Color:
      </Text>
      <ColorList
        currentColor={currentColor}
        setSelectedColor={setSelectedColor}
      />
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
    </BackgroundContainer>
  );
}
