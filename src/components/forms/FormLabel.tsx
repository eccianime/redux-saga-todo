import { Text } from 'native-base';

type FormLabelProps = { label: string };

export default function FormLabel({ label }: FormLabelProps) {
  return (
    <Text fontFamily='bold' fontSize='md' color='gray.700' mb={2}>
      {label}
    </Text>
  );
}
