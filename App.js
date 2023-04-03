import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/LoginPage.js";
import LandingPage from "./components/LandingPage.js"

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Landing Page"
                    component={LandingPage}
                    options={{title: 'Login Successful'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};