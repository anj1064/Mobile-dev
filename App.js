import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import BottomTabs from './components/BottomTabs';
import GettingStarted from './components/GettingStarted';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import FavoriteScreen from './components/FavoriteScreen';
import { FavoriteProvider } from './FavoriteContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="GettingStarted">
    <Drawer.Screen
      name="GettingStarted"
      component={GettingStarted}
      options={{
        title: 'Getting Started',
        drawerIcon: ({ focused, size }) => (
          <Ionicons name="home-outline" size={size} color={focused ? 'blue' : 'gray'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Signup"
      component={Signup}
      options={{
        drawerIcon: ({ focused, size }) => (
          <Ionicons name="person-add-outline" size={size} color={focused ? 'blue' : 'gray'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Login"
      component={Login}
      options={{
        drawerIcon: ({ focused, size }) => (
          <Ionicons name="log-in-outline" size={size} color={focused ? 'blue' : 'gray'} />
        ),
      }}
    />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'pink' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Welcome" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ProductPage" component={ProductPage} />
          <Stack.Screen name="Favorites" component={FavoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default App;
                                                                                                     