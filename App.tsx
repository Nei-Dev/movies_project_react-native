import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from "./src/navigation/Navigation";
import { FadeScreen } from "./src/screens/FadeScreen";
import store from './src/store/stores';
import { Provider } from "react-redux";

export const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation />
                {/* <FadeScreen  /> */}
            </NavigationContainer>
        </Provider>
    );
};
