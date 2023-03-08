import { FontAwesome } from '@expo/vector-icons';
import { Icon, IPressableProps, Pressable, Text, View } from 'native-base';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';
import { memo } from 'react';

type BasicButtonProps = IPressableProps & {
  text: string;
  icon: keyof typeof FontAwesome.glyphMap;
  containerProps?: IViewProps;
};

function BasicButton({
  text,
  containerProps,
  icon,
  ...props
}: BasicButtonProps) {
  return (
    <View borderRadius={'lg'} overflow={'hidden'} my={5} {...containerProps}>
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
        flexDir='row'
        justifyContent={'center'}
        {...props}
      >
        <Icon
          mr={1}
          as={<FontAwesome name={icon} />}
          color={'white'}
          size={'md'}
        />
        <Text color='white' fontSize={'lg'} fontFamily={'bold'}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

export default memo(BasicButton);
