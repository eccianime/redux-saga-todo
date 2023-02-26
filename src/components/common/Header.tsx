import { HStack, Icon, Pressable, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useAppNavigation } from '../../hooks';

type HeaderProps = {
  title: string;
  hasBack?: boolean;
};

export default function Header({ title, hasBack }: HeaderProps) {
  const { goBack } = useAppNavigation();
  return (
    <HStack alignItems={'center'} mb={5}>
      {hasBack && (
        <Pressable flexDir={'row'} alignItems='center' onPress={goBack} mr={1}>
          <Icon
            as={<Ionicons name='arrow-back' />}
            color={'gray.700'}
            size={7}
          />
        </Pressable>
      )}
      <Text fontSize={'2xl'} color='gray.700' fontFamily={'bold'}>
        {title}
      </Text>
    </HStack>
  );
}
