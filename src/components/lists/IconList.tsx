import { FlatList } from 'native-base';
import { memo } from 'react';
import { CATEGORIES } from '../../config/constants';
import IconButton from '../buttons/IconButton';

type IconListProps = {
  icon: string;
  setIcon: (icon?: string) => void;
};

function IconList({ icon, setIcon }: IconListProps) {
  return (
    <FlatList
      bg='violet.100'
      borderRadius='md'
      p={1}
      borderColor={'violet.600'}
      borderWidth={1}
      mb={5}
      showsVerticalScrollIndicator={false}
      minH={'1/3'}
      numColumns={4}
      keyExtractor={(item) => item.icon}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <IconButton item={item} icon={icon} setIcon={setIcon} />
      )}
    />
  );
}

export default memo(IconList);
