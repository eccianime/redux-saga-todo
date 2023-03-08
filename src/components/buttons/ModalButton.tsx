import { IButtonProps, Text, View, Pressable } from 'native-base';

type ButtonProps = IButtonProps & {
  text: string;
  mr?: number;
  ml?: number;
};

export default function ModalButton({ text, mr, ml, ...props }: ButtonProps) {
  return (
    <View overflow={'hidden'} mr={mr} ml={ml} borderRadius={'md'} flex={1}>
      <Pressable
        android_ripple={{
          foreground: true,
          color: 'white',
        }}
        borderRadius={'md'}
        h={8}
        alignItems='center'
        justifyContent={'center'}
        {...props}
      >
        <Text fontFamily={'bold'} color={'white'} fontSize={'md'}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}
