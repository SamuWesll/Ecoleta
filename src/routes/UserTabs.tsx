import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';
import PontosColetas from '../pages/UserTabs/PontosColetas';
import Perfil from '../pages/UserTabs/Perfil';

const { Navigator, Screen } = createBottomTabNavigator();

const UserTabs = () => {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 56,
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 30,
                },
                labelStyle: {
                    fontSize: 13,
                    fontWeight: 'bold',
                },
                // activeBackgroundColor: '#5a5a60',
                activeTintColor: '#339966',
            }}
        >
            <Screen
                name="Pontos Coletas"
                component={PontosColetas}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Feather name="map-pin" size={24} color={color} />
                    }
                }}
            />
            <Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Feather name="user" size={24} color={color} />
                    }
                }}
            />
        </Navigator>
    )
}

export default UserTabs;