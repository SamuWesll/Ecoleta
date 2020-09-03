import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Login from '../pages/Login';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator
                headerMode="none"
            >
                <Screen name="Home" component={Home} />
                <Screen name="Login" component={Login} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;