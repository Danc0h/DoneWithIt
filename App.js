import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/screens/Welcome";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Homepage from "./src/screens/Homepage";
import Apply from "./src/screens/Apply";
import Balance from "./src/screens/Balance";
import Deposit from "./src/screens/Deposit";
import Send from "./src/screens/Send";
import Withdraw from "./src/screens/Withdraw";
import Pay from "./src/screens/Pay";
import Payment from "./src/screens/Payment";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='welcome'
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='login'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='signup'
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='homepage'
          component={Homepage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='apply'
          component={Apply}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='balance'
          component={Balance}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='deposit'
          component={Deposit}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='send'
          component={Send}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='withdraw'
          component={Withdraw}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='pay'
          component={Pay}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='payment'
          component={Payment}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 0.5,
  },
});
