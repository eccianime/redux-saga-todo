import { Center, Text } from 'native-base';

export default function NoTasks() {
  return (
    <Center flex={1}>
      <Text
        color='gray.700'
        fontSize={'2xl'}
        fontFamily={'bold'}
        textAlign='center'
      >
        Não tem tarefas com os parâmetros fornecidos
      </Text>
    </Center>
  );
}
