import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from './login';
import SignUp from './signup';
import Map from './map';
import Profile from './profile';
import Trip from './trip'
import  { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator initialRouteName='Map'
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
        name='Trip' 
        component={Trip}
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
  );
}

export default Index;