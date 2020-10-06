import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastrado';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "#f0f0f5"
                    }
                }}
            >
                <Screen name="Home" component={Home} />
                <Screen name="Login" component={Login} />
                <Screen name="Cadastro" component={Cadastro} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;