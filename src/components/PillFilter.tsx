import { FlatList, Pressable, Text, VStack } from 'native-base';
import { memo } from 'react';

type PillFilterProps = {
  title: string;
  selectedValue: string;
  setSelectedValue: (selectedValue: string) => void;
  data: string[];
};

function PillFilter({
  title,
  selectedValue,
  setSelectedValue,
  data,
}: PillFilterProps) {
  return (
    <VStack mb={3}>
      <Text px={5} fontSize={'md'} color='gray.700' fontFamily={'bold'} mb={2}>
        {title}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item}
        data={data}
        renderItem={({ item, index }) => (
          <Pressable
            rounded={'full'}
            mr={index === data.length - 1 ? 5 : 2}
            ml={index === 0 ? 5 : 0}
            key={Math.random()}
            px={4}
            py={1}
            bg={selectedValue === item ? 'violet.700' : 'violet.400'}
            onPress={() => setSelectedValue(item)}
          >
            <Text fontSize={'sm'} color='white' fontFamily={'bold'}>
              {item}
            </Text>
          </Pressable>
        )}
      />
    </VStack>
  );
}
export default memo(PillFilter);
