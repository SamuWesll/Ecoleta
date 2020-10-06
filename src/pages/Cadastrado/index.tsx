import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ImageBackground, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import homeBackGround from '../../assets/images/home-background.png'
import style from './styles';

const Cadastro = () => {

    const navigation = useNavigation();

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [dataNacimento, setDataNascimento] = useState<string>('');

    function navigatedBack() {
        navigation.goBack();
    }

    return (
        <ImageBackground source={homeBackGround} style={style.container} imageStyle={{ width: 274, height: 368 }}>
            <View style={style.header}>
                <TouchableOpacity onPress={navigatedBack}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={style.headerTitle}>Cadastro de usuario</Text>
            </View>
            <View style={style.main}>
                <ScrollView style={{ width: '100%' }}>
                    <Text style={style.inputTitle}>Email:</Text>
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

                    <Text style={style.inputTitle}>Senha:</Text>
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

                    <Text style={style.inputTitle}>Nome completo:</Text>
                    <View style={style.viewInput}>
                        <Feather style={style.iconInput} name="smile" size={20} color="gray" />
                        <TextInput
                            style={style.input}
                            placeholder='Digite uma nome completo'
                            value={nome}
                            onChangeText={setNome}
                            maxLength={30}
                        />
                    </View>

                    <Text style={style.inputTitle}>Data nascimento:</Text>
                    <View style={style.viewInput}>
                        <Feather style={style.iconInput} name="calendar" size={20} color="gray" />
                        <TextInput
                            style={style.input}
                            placeholder='dd/MM/aaaa'
                            value={dataNacimento}
                            onChangeText={setDataNascimento}
                        />
                    </View>

                    <Text style={style.inputTitle}>Minha localização:</Text>


                </ScrollView>
                <View style={style.footer}>
                    <TouchableOpacity style={style.buttonCadastrar}>
                        <Feather name="user-plus" size={24} color="white" />
                        <Text style={style.buttonCadastrarText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Cadastro;