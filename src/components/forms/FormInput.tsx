import { IInputProps, Input } from 'native-base';

export default function FormInput(props: IInputProps) {
  return (
    <Input
      bg='violet.100'
      borderColor={'violet.600'}
      fontSize={'md'}
      fontFamily='medium'
      mb={5}
      _focus={{
        bg: 'violet.200',
        borderColor: 'violet.500',
      }}
      {...props}
    />
  );
}
