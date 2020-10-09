import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import logoImg from '../../../assets/images/logo.png';
import { ItemModel } from '../../../model/ItemModel';
import ItemService from '../../../services/ItemService';
import { PontoColeta, tipoEstabelecimentoEnum } from '../../../model/PontoColetaModel';

import style from './style';
import PontoColetaService from '../../../services/PontoColetaService';

const PontosColetas: React.FC = ({ }) => {

    const [listaItems, setListaItem] = useState<Array<ItemModel>>([]);
    const [listaPonto, setListaPontos] = useState<Array<PontoColeta>>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    function handleSelectItem(id: string) {
        const alreadySelected = selectedItems.findIndex(item => item == id);

        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);
            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    function consultarListaItems() {
        const service: ItemService = new ItemService();
        let listaItemsResp: Array<ItemModel> = []
        service.findByAll().then(response => {
            response.forEach(resp => {
                listaItemsResp.push({ id: resp.id, ...resp.data() as ItemModel })
            })
            setListaItem(listaItemsResp);
        })
    }

    async function consultarPontos() {
        const service: PontoColetaService = new PontoColetaService();
        let lista: Array<PontoColeta> = []
        service.findByAll().then(response => {
            response.forEach(resp => {
                lista.push({id: resp.id, ...resp.data() as PontoColeta});
            })
            setListaPontos(lista)
        })
    }

    useEffect(() => {
        
        consultarListaItems();
        consultarPontos();

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
    }, [])

    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.header}>
                    <View style={style.headerImg}>
                        <Image source={logoImg} />
                    </View>
                    <View style={style.listaItem}>
                        <Text style={{ fontFamily: 'Aleo_700Bold', fontSize: 18, }}>Filtro por item: </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={style.listaItemScroll}
                        >
                            {listaItems?.map(item => (
                                <TouchableOpacity
                                    style={[
                                        style.buttoItem,
                                        selectedItems.includes(item.id as string) ? style.selectedButtoItem : {}
                                    ]}
                                    key={item.id}
                                    activeOpacity={0.6}
                                    onPress={() => handleSelectItem(item.id as string)}
                                >
                                    <Image source={{ uri: item.urlIcone }} style={{ width: 40, height: 40 }} />
                                    <Text style={style.buttoItemText}>{item.nome}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <View style={style.divider} />
                    </View>
                </View>

                <View style={style.viewMap}>
                    {initialPosition[0] !== 0 && (
                        <MapView
                            loadingEnabled={initialPosition[0] === 0}
                            style={style.mapMarker}
                            initialRegion={{
                                latitude: initialPosition[0],
                                longitude: initialPosition[1],
                                latitudeDelta: 0.024,
                                longitudeDelta: 0.024
                            }}
                        >
                            {listaPonto?.map(ponto => {
                                <Marker
                                    key={ponto.id}
                                    coordinate={{
                                        latitude: ponto.localidade.latitude,
                                        longitude: ponto.localidade.longitude,
                                    }}
                                >
                                    
                                </Marker>
                            })}
                        </MapView>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default PontosColetas;