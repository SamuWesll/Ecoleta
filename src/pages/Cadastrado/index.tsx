import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, TextInput, ScrollView, Alert, Modal, AsyncStorage, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Usuario } from '../../model/UsuarioModel';
import firebase from '../../services/firebase';
import UsuarioFirebase from '../../services/UsuarioFirebase';

import homeBackGround from '../../assets/images/home-background.png';
import style from './styles';


const Cadastro = () => {

    const navigation = useNavigation();

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [dataNacimento, setDataNascimento] = useState<string>('');
    const [usuarioCadastro, setUsuarioCadastro] = useState<Usuario>();

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const [localizacao, setLocalizacao] = useState<[number, number]>([0, 0]);

    const [modalVisible, setModalVisible] = useState(false);

    function navigatedBack() {
        navigation.goBack();
    }

    function buscandoPonto(localizacao: any) {
        setLocalizacao([localizacao.latitude, localizacao.longitude])
    }

    function criarUsuario(usuario: Usuario) {
        const service = new UsuarioFirebase();
        service.insert(usuario).then(response => {
            setUsuarioCadastro(usuario)
            setModalVisible(true)
            setNome('')
            setEmail('')
            setSenha('')
            setDataNascimento('')
            setLocalizacao([0,0]);
        })
    }

    function handleCadastrar() {

        if (nome == '' || email == '' || senha == '' || dataNacimento == '' || localizacao[0] == 0 && localizacao[1] == 0) {
            return Alert.alert('Campo invalido', 'Prencha os campos em brancos')
        }

        const data: any = new Date(dataNacimento)

        if (data == 'Invalid Date') {
            return Alert.alert('Data de nascimento invalida', 'Data preenchida invalida')
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(async response => {
            const user: Usuario = {
                nomeCompleto: nome,
                email,
                dataNascimento: new Date(dataNacimento).toISOString().split('T')[0],
                localidade: {
                    latitude: localizacao[0],
                    longitude: localizacao[1],
                },
                uid: response.user?.uid
            };
            AsyncStorage.setItem('login', JSON.stringify(response.user));
            criarUsuario(user)
        }).catch(error => {
            console.log(error)
            return Alert.alert('Erro ao criar cadastrado', `${error}`)
        })
    }

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert('Ooooops, precisamos da sua permissão para obter a localização.');
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;
            setInitialPosition([
                latitude,
                longitude
            ])
        }
        loadPosition();
    })

    function recLogin() {
        navigation.navigate('UserTabs');
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
                <ScrollView style={{ width: '100%', marginBottom: 20, }}>
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

                    <Text style={[style.inputTitle, { marginTop: 20 }]}>Minha localização:</Text>
                    <View style={style.viewMap}>
                        {initialPosition[0] !== 0 && (
                            <MapView
                                loadingEnabled={initialPosition[0] === 0}
                                style={style.mapMarker}
                                initialRegion={{
                                    latitude: initialPosition[0],
                                    longitude: initialPosition[1],
                                    latitudeDelta: 0.014,
                                    longitudeDelta: 0.014
                                }}
                                onPress={map => buscandoPonto(map.nativeEvent.coordinate)}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: localizacao[0],
                                        longitude: localizacao[1],
                                    }}
                                >
                                    <MaterialCommunityIcons name="map-marker-radius" size={40} color="green" />
                                </Marker>
                            </MapView>
                        )}
                    </View>

                    <View style={style.footer}>
                        <TouchableOpacity style={style.buttonCadastrar} onPress={handleCadastrar}>
                            <Feather name="user-plus" size={24} color="white" />
                            <Text style={style.buttonCadastrarText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={style.modalContainer}>
                    <View style={style.modalHeader}>
                        <Text style={style.modalTitle}>Cadastro realizado</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Feather name="x" size={18} color="red" />
                        </TouchableOpacity>
                    </View>

                    <View style={style.modalBody}>
                        <Text style={style.modalText}>O usuario do email <Text style={{ fontWeight: 'bold' }}>{usuarioCadastro?.email}</Text> realizado com sucesso</Text>
                        <Text style={style.modalText}>Deseja relizar login direto?</Text>
                    </View>

                    <View style={style.modalFooter}>
                        <TouchableOpacity style={style.buttoModalFooterButtonSim} onPress={recLogin}>
                            <Feather name="thumbs-up" size={18} color="#ffff" />
                            <Text style={style.textModalText}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.buttoModalFooterButtonNao} onPress={() => setModalVisible(false)}>
                            <Feather name="thumbs-down" size={18} color="#ffff" />
                            <Text style={style.textModalText}>Não</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    )
}

export default Cadastro;