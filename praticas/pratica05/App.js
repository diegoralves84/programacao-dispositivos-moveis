import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";

function App() {
  return <SafeAreaProvider>
    <ChatScreen />;
  </SafeAreaProvider>;
}

export default App;
