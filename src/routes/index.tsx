import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoDetails from '../screens/TodoDetails';
import TodoList from '../screens/TodoList';
import { TodoParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<TodoParamList>();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFF',
          },
        }}
      >
        <Screen name='Todo' component={TodoList} />
        <Screen name='Todo Details' component={TodoDetails} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
