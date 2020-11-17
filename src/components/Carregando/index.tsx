import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

const Carregando = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View>
    )
}

export default Carregando;