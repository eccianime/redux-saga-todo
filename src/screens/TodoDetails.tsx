import { useRoute } from '@react-navigation/native';
import { VStack } from 'native-base';
import React, { useCallback, useState } from 'react';
import {
  BackgroundContainer,
  BasicButton,
  FormInput,
  FormLabel,
  Header,
} from '../components';
import IconList from '../components/lists/IconList';
import { useAppDispatch, useAppNavigation, useAppSelector } from '../hooks';
import { addTodo, updateTodo } from '../redux/todo/actions';
import { Todo } from '../redux/todo/types';

export default function TodoDetails() {
  const params = useRoute().params as Todo;
  const dispatch = useAppDispatch();
  const { goBack } = useAppNavigation();
  const { loading } = useAppSelector((state) => state.todos);

  const [formData, setFormData] = useState({
    title: params?.title || '',
    description: params?.description || '',
    category: params?.category || '',
  });

  const handleFormChange = useCallback((field: string, value?: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  }, []);

  const handleCreateOrEdit = useCallback(() => {
    const { title, description, category } = formData;
    if (title && description && category) {
      if (params?.id) {
        dispatch(updateTodo(params.id, title, description, category));
        goBack();
      } else {
        dispatch(addTodo(title, description, category));
        goBack();
      }
    }
  }, [formData, dispatch, goBack, params?.id]);

  const canEditOrCreate = Object.values(formData).every(Boolean);

  return (
    <BackgroundContainer>
      <VStack flex={1} px={5}>
        <Header
          hasBack
          title={`${params?.id ? 'Modificar' : 'Criar'} Tarefa`}
        />
        <FormLabel label='Titulo:' />
        <FormInput
          h={10}
          value={formData.title}
          onChangeText={(title: string) => handleFormChange('title', title)}
        />
        <FormLabel label='Descrição:' />
        <FormInput
          multiline
          numberOfLines={5}
          textAlignVertical='top'
          value={formData.description}
          onChangeText={(description: string) =>
            handleFormChange('description', description)
          }
        />
        <FormLabel label='Categoria:' />
        <IconList
          icon={formData.category}
          setIcon={(category?: string) =>
            handleFormChange('category', category)
          }
        />
        <BasicButton
          icon={params?.id ? 'edit' : 'plus'}
          disabled={!canEditOrCreate || loading}
          bg={canEditOrCreate ? 'violet.700' : 'violet.300'}
          text={`${
            loading ? 'Carregando...' : params?.id ? 'Modificar' : 'Criar'
          } Tarefa`}
          onPress={handleCreateOrEdit}
        />
      </VStack>
    </BackgroundContainer>
  );
}
