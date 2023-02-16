import { Center, Spinner } from 'native-base';

export default function Loader() {
  return (
    <Center flex={1}>
      <Spinner color='violet.500' size={50} />
    </Center>
  );
}
