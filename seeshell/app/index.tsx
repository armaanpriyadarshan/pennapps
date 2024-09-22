import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './map';
import Home from './home';
import Profile from './profile';
import  { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          tabBarStyle: {
            paddingBottom: 0,
            position: 'absolute',
            bottom: 30,
            left: '20%',
            right: '20%',
            borderRadius: 60,
          },
          tabBarItemStyle: {
            borderRadius: 60,
            margin: 5,
          },
          headerShown: false,
          tabBarActiveBackgroundColor: '#071A2B',
          tabBarShowLabel: false
        }}
      >
        <Tab.Screen 
          name='Map' 
          component={Map} 
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name='map' color={focused ? '#ffffff' : '#071A2B'} size={32} />
            )
          }}
        />
        <Tab.Screen 
          name='Home' 
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo name="plus" color={focused ? '#ffffff' : '#071A2B'} size={32} />
            )
          }}
        />
        <Tab.Screen
          name='Profile' 
          component={Profile} 
          options={{
            tabBarIcon: ({ focused }) => (
              focused ? <FontAwesome name="user-circle" size={32} color={focused ? '#ffffff' : '#071A2B'} /> : <FontAwesome name="user-circle-o" size={32} color={focused ? '#ffffff' : '071A2B'} />
            )
          }}
        />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
}

export default Index;

const styles = StyleSheet.create({});