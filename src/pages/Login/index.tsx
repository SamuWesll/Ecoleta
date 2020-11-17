import React, { useState } from 'react';
import { ImageBackground, View, KeyboardAvoidingView, Platform, TouchableOpacity, Image, Text, TextInput, ScrollView, Alert, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firebase from '../../services/firebase';

import homeBackGround from '../../assets/images/home-background.png'
import logoImg from '../../assets/images/logo.png'

import style from './style';
import Carregando from '../../components/Carregando';
import UsuarioFirebase from '../../services/UsuarioFirebase';
import { Usuario } from '../../model/UsuarioModel';

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation();

    function navigatedBack() {
        navigation.goBack();
    }

    async function login() {
        var uid: string = "";
        var usuario: Usuario = {};
        const usuarioService: UsuarioFirebase = new UsuarioFirebase;
        await firebase.auth().signInWithEmailAndPassword(email, senha).then(response => {
            AsyncStorage.setItem('login', JSON.stringify(response.user))
            uid = response.user?.uid as string;
            setLoading(true);
        }).catch(error => {
            Alert.alert('Erro ao realizar login', `${error}`)
        })
        await usuarioService.consultar(uid).onSnapshot(resp => {
            usuario = resp.data() as Usuario;
            AsyncStorage.setItem('usuario', JSON.stringify(usuario));
        });
        setLoading(false);
        navigation.navigate('UserTabs');
    }

    if (loading) {
        return (
            <Carregando />
        )
    }

    return (
        <ImageBackground source={homeBackGround} style={style.container} imageStyle={{ width: 274, height: 368 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <TouchableOpacity onPress={navigatedBack}>
                        <Icon name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={style.main}>
                    <Image source={logoImg} />
                    <Text style={style.mainText}>Encontrando pontos de coletas</Text>

                    <View style={style.containerInputs}>
                        <View style={style.viewInput}>
                            <Feather style={style.iconInput} name="mail" size={20} color="gray" />
                            <TextInput
                                style={style.input}
                                placeholder='Digite um email valido'
                                value={email}
                                onChangeText={setEmail}
                                maxLength={30}
                                keyboardType={"email-address"}
                            />
                        </View>
                        <View style={style.viewInput}>
                            <Feather style={style.iconInput} name="lock" size={20} color="gray" />
                            <TextInput
                                style={style.input}
                                placeholder='Digite uma senha'
                                secureTextEntry
                                value={senha}
                                onChangeText={setSenha}
                                maxLength={30}
                            />
                        </View>
                    </View>
                </View>
                <View style={style.footer}>
                    <TouchableOpacity style={style.buttoFooterLogin} onPress={login}>
                        <Feather name="log-in" size={24} color="#ffff" />
                        <Text style={style.footerLoginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Login;