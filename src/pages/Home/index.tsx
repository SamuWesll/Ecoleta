import React from 'react';
import { Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import homeBackGround from '../../assets/images/home-background.png'
import logoImg from '../../assets/images/logo.png'
import styles from './style'

function Home() {

    const { navigate } = useNavigation();
    
    function handleNavigateToLogin() {
        navigate('Login')
    }

    function handleNavigateToCadastrar() {
        navigate('Cadastro')
    }

    return (
        <ImageBackground
            source={homeBackGround}
            style={styles.container}
            imageStyle={{ width: 274, height: 368 }}
        >
            <View style={styles.main}>
                <Image source={logoImg} />
                <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente.</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={handleNavigateToLogin}>
                    <View style={styles.buttonIcon}>
                        <Icon name="user" color="#fff" size={24} />
                    </View>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCadastro} onPress={handleNavigateToCadastrar}>
                    <View style={styles.buttonIcon}>
                        <Icon name="user-plus" color="#fff" size={24} />
                    </View>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <View style={styles.viewPontos}>
                    <Text style={styles.viewText}>Desejar cadastrar um ponto de coleta?</Text>
                    <Text >Entre em contato com o numero: 0800 000 000 100</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Home;