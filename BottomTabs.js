import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';
import Welcome from './Welcome';
import FavoriteScreen from './FavoriteScreen';
import { FavoriteContext } from '../FavoriteContext';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          } else if (route.name === 'Cart') {
            iconName = 'cart';
          } else if (route.name === 'Logout') {
            iconName = 'log-out';
          }

          return (
            <>
              <Ionicons name={iconName} size={size} color={color} />
              {route.name === 'Cart' && favorites.length > 0 && (
                <Badge
                  value={favorites.length}
                  status="error"
                  containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
              )}
            </>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
      />
      <Tab.Screen
        name="Cart"
        component={FavoriteScreen} // You might have a separate Cart component
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('GettingStarted');
          },
        })}
      />
    </Tab.Navigator>
  );
};

const Logout = () => null;

export default BottomTabs;