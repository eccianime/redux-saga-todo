import { Ionicons } from '@expo/vector-icons';
import { FlatList, Icon, Pressable } from 'native-base';
import { memo } from 'react';
import { COLORS } from '../config/constants';

type ColorListProps = {
  currentColor?: string;
  setSelectedColor: (currentColor?: string) => void;
};

function ColorList({ currentColor, setSelectedColor }: ColorListProps) {
  return (
    <FlatList
      flex={1}
      bg='violet.100'
      borderRadius='md'
      p={1}
      mb={5}
      showsVerticalScrollIndicator={false}
      maxH={'1/3'}
      numColumns={4}
      keyExtractor={(item) => item}
      data={COLORS}
      renderItem={({ item: color }) => (
        <Pressable
          key={color}
          mx={'auto'}
          my={2}
          h={15}
          w={15}
          borderRadius='lg'
          alignItems='center'
          justifyContent={'center'}
          android_ripple={{
            foreground: true,
            color: 'white',
          }}
          onPress={() =>
            setSelectedColor(color === currentColor ? undefined : color)
          }
          bg={color}
        >
          {color === currentColor && (
            <Icon
              as={<Ionicons name={'checkmark-circle'} />}
              color={'white'}
              size={'3xl'}
            />
          )}
        </Pressable>
      )}
    />
  );
}

export default memo(ColorList);
