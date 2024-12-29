import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/home';
import FavoriteScreen from 'screens/favorite';
import DetailsScreen from 'screens/details';
import SearchScreen from 'screens/search';
import TabBar from 'components/tab-bar';
import ListHeader from 'components/list-header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        header: ListHeader,
      }}/>
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        header: ListHeader,
      }}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={TabNavigation} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Search" component={SearchScreen} options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  );
}