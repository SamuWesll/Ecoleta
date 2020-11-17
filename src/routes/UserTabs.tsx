import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import PontosColetas from '../pages/UserTabs/PontosColetas';
import Perfil from '../pages/UserTabs/Perfil';
import { Usuario } from '../model/UsuarioModel';
import { AsyncStorage } from 'react-native';
import Carregando from '../components/Carregando';

const { Navigator, Screen } = createBottomTabNavigator();

const UserTabs = () => {

    const [usuario, setUsuario] = useState<Usuario>({});

    useEffect(() => {
        AsyncStorage.getItem('usuario').then(response => {
            setUsuario(JSON.parse(response as any))
        })
    }, [])

    if (!usuario) {
        return (
            <Carregando />
        )
    }

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