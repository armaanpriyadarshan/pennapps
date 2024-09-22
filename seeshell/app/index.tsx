import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '@/contexts/AuthContext';
import AuthProvider from '@/contexts/AuthContext';
import LogIn from './login';
import SignUp from './signup';
import Map from './map';
import Profile from './profile';
import Trip from './trip'
import  { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  const { state } = useAuth();

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
        {state.isAuthenticated ?  
          <>
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
          </>
        : 
          <Tab.Screen
            name='Log In' 
            component={LogIn} 
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons name='login' color={focused ? '#ffffff' : '#071A2B'} size={32} />
              )
            }}
          />
        }
      </Tab.Navigator>
  );
}

const Root = () => {
  return (
    <Stack.Navigator initialRouteName='TabNavigator'>
      <Stack.Screen name='Tab Navigator' component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const Index = () => {
  return (
    <AuthProvider>
      <Root/>
    </AuthProvider>
  );
}

export default Index;