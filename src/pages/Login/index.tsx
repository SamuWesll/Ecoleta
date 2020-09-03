import React from 'react';
import { ImageBackground, View, KeyboardAvoidingView, Platform, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons'; 

import homeBackGround from '../../assets/images/home-background.png'
import logoImg from '../../assets/images/logo.png'

import style from './style';

const Login = () => {

    const navigation = useNavigation();

    function navigatedBack() {
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS =='ios' ? "padding" : "height"}>
            <ImageBackground source={homeBackGround} style={style.container} imageStyle={{ width: 274, height: 368 }}>
                {/* <View style={style.header}>
                    <TouchableOpacity onPress={navigatedBack}>
                        <Icon name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                </View> */}
                <View style={style.main}>
                    <Image source={logoImg} />
                    <Text style={style.mainText}>Encontrando pontos de coletas</Text>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Login;