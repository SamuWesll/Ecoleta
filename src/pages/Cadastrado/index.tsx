import React from 'react';
import { View, KeyboardAvoidingView, Platform, ImageBackground, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import homeBackGround from '../../assets/images/home-background.png'
import style from './styles';

const Cadastro = () => {

    const navigation = useNavigation();

    function navigatedBack() {
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"}>
            <ImageBackground source={homeBackGround} style={style.container} imageStyle={{ width: 274, height: 368 }}>
                <View style={style.header}>
                    <TouchableOpacity onPress={navigatedBack}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={style.headerTitle}>Cadastro de usuario</Text>
                </View>
                <View style={style.main}>
                    <ScrollView>
                        <TextInput style={style.input} placeholder='Digite seu login' />
                    </ScrollView>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Cadastro;