import dayjs from 'dayjs';
import { HStack, Pressable, Text, View } from 'native-base';
import { memo } from 'react';
import { useAppDispatch } from '../../hooks';
import { setCurrentDate } from '../../redux/todo/actions';

type DayListProps = {
  currentDate: string;
};

function DayList({ currentDate }: DayListProps) {
  const dispatch = useAppDispatch();
  return (
    <HStack w={'full'} justifyContent='space-between' mb={5} px={5}>
      {new Array(5).fill(0).map((_, i, a) => {
        const day = dayjs(currentDate, 'DD/MM/YY').add(i - 2, 'day');
        return (
          <View
            key={i}
            overflow='hidden'
            borderRadius={'lg'}
            flex={1}
            mr={i < a.length - 1 ? 2 : 0}
          >
            <Pressable
              android_ripple={{
                foreground: true,
                color: 'white',
              }}
              alignItems='center'
              py={2}
              bg={
                day.format('DD/MM/YY') === currentDate
                  ? 'violet.700'
                  : 'violet.400'
              }
              onPress={() => dispatch(setCurrentDate(day.format('DD/MM/YY')))}
            >
              <Text color='white' fontFamily={'medium'}>
                {day.format('ddd').toUpperCase()}
              </Text>
              <Text
                lineHeight={'xs'}
                color='white'
                fontFamily={'bold'}
                fontSize='2xl'
              >
                {day.format('DD')}
              </Text>
              <Text color='white' fontFamily={'medium'}>
                {day.format('MMM').toUpperCase()}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </HStack>
  );
}

export default memo(DayList);
