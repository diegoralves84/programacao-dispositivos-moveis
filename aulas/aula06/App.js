import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from './screens/Perfil';
import Home from './screens/Home';

const Stack = createNativeStackNavigator ();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
 