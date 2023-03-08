import { Ionicons } from '@expo/vector-icons';
import { Icon, Pressable, Text } from 'native-base';
import { memo } from 'react';
import { Category } from '../../redux/todo/types';

type IconButtonProps = {
  item: Category;
  icon: string;
  setIcon: (icon?: string) => void;
};

function IconButton({ item, icon, setIcon }: IconButtonProps) {
  return (
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
  );
}

export default memo(IconButton);
