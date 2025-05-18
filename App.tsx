import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#111',
          },
          headerTitleStyle: {
            color: '#0f0',
          },
          headerTintColor: '#0f0',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Sistema Solar' }}
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen} 
          options={{ title: 'Odômetro Digital' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}