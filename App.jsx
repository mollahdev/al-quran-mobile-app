import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home';
import FavoriteScreen from './screens/favorite';
import TabBar from './components/tab-bar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Tab.Navigator 
        tabBar={TabBar}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </>
  );
}