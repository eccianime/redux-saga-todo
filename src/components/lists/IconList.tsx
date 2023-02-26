import { Ionicons } from '@expo/vector-icons';
import { FlatList, Icon, Pressable, Text } from 'native-base';
import { memo } from 'react';
import { CATEGORIES } from '../../config/constants';

type IconListProps = {
  icon: string;
  setIcon: (icon?: string) => void;
};

function IconList({ icon, setIcon }: IconListProps) {
  return (
    <FlatList
      bg='violet.100'
      borderRadius='md'
      p={1}
      borderColor={'violet.600'}
      borderWidth={1}
      mb={5}
      showsVerticalScrollIndicator={false}
      minH={'1/3'}
      numColumns={4}
      keyExtractor={(item) => item.icon}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <Pressable
          key={item.icon}
          h={'20'}
          w={'1/4'}
          borderRadius='lg'
          alignItems='center'
          justifyContent={'center'}
          android_ripple={{
            foreground: true,
            color: 'white',
          }}
          onPress={() => {
            setIcon(item.icon === icon ? '' : item.icon);
          }}
          bg={item.icon === icon ? item.color : 'transparent'}
        >
          <Icon
            as={<Ionicons name={item.icon} />}
            color={item.icon === icon ? 'white' : item.color}
            size={'xl'}
          />
          <Text
            fontFamily={'medium'}
            color={item.icon === icon ? 'white' : item.color}
            fontSize={'sm'}
          >
            {item.name}
          </Text>
        </Pressable>
      )}
    />
  );
}

export default memo(IconList);
