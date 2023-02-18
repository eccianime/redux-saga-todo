import { FontAwesome } from '@expo/vector-icons';
import { Icon, Pressable, Text, View } from 'native-base';
import { memo } from 'react';
import { useAppNavigation } from '../hooks';

function CreateTaskButton() {
  const { navigate } = useAppNavigation();

  const handleGoToCreate = () => {
    navigate('Todo Details');
  };
  return (
    <View borderRadius={'lg'} overflow={'hidden'} my={5} px={5}>
      <Pressable
        w={'full'}
        android_ripple={{
          foreground: true,
          color: 'white',
        }}
        alignItems='center'
        py={2}
        bg={'violet.700'}
        borderRadius={'lg'}
        onPress={handleGoToCreate}
        flexDir='row'
        justifyContent={'center'}
      >
        <Icon
          mr={1}
          as={<FontAwesome name='plus' />}
          color={'white'}
          size={'md'}
        />
        <Text color='white' fontSize={'lg'} fontFamily={'bold'}>
          Crear Tarea
        </Text>
      </Pressable>
    </View>
  );
}

export default memo(CreateTaskButton);
