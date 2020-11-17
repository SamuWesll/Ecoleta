import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { LocalidadeModel } from '../../../model/LocalidadeModel';
import PontoColetaService from '../../../services/PontoColetaService';
import logoImg from '../../../assets/images/logo.png';
import { ItemModel } from '../../../model/ItemModel';
import ItemService from '../../../services/ItemService';
import { PontoColeta, tipoEstabelecimentoEnum } from '../../../model/PontoColetaModel';
import { useRoute } from '@react-navigation/native';
import { Usuario } from '../../../model/UsuarioModel';
import Carregando from '../../../components/Carregando';

import placeLocal from '../../../assets/icons/placeholder.png'
import pontoImg from '../../../assets/icons/recycle-bin.png'

import style from './style';

interface PontosColetasProps {
    // localidade: LocalidadeModel;
}

const PontosColetas: React.FC<PontosColetasProps> = ({ }) => {

    const [listaItems, setListaItem] = useState<Array<ItemModel>>([]);
    const [listaPonto, setListaPontos] = useState<Array<PontoColeta>>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    const [usuario, setUsuario] = useState<Usuario>();

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
        let lista: Array<PontoColeta> = [];
        await service.findByAll().then(response => {
            response.forEach(resp => {
                lista.push({ id: resp.id, ...resp.data() as PontoColeta });
            })
        })
        setListaPontos(lista)
    }

    useEffect(() => {

        consultarListaItems();
        consultarPontos();

        AsyncStorage.getItem('usuario').then(response => {
            setUsuario(JSON.parse(response as any))
        })
    }, []);

    useEffect(() => {
        consultarPontos()
    }, [selectedItems])

    if (!usuario) {
        return (
            <Carregando />
        )
    }

    return (
        <View style={style.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={style.map}
                initialRegion={{
                    latitude: usuario?.localidade?.latitude as any,
                    longitude: usuario?.localidade?.longitude as any,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                {listaPonto.map(ponto => {
                    return (
                        <Marker
                            icon={pontoImg}
                            coordinate={{
                                latitude: ponto.localidade.latitude,
                                longitude: ponto.localidade.longitude,
                            }}
                        >
                            <Callout tooltip>
                                <View style={style.calloutContainer}>
                                    <Text style={style.calloutText}>{ ponto.nome }</Text>
                                </View>
                            </Callout>
                        </Marker>
                    )
                })}

                <Marker
                    icon={placeLocal}
                    coordinate={{
                        latitude: usuario?.localidade?.latitude as number,
                        longitude: usuario?.localidade?.longitude as number,
                    }}

                />
            </MapView>

            <View style={style.footer}>
                <Text style={style.footerText}>{listaPonto.length} pontos encontrados</Text>
            </View>
        </View>
        // <View style={style.container}>
        //     <ScrollView>
        //         <View style={style.header}>
        //             <View style={style.headerImg}>
        //                 <Image source={logoImg} />
        //             </View>
        //             <View style={style.listaItem}>
        //                 <Text style={{ fontFamily: 'Aleo_700Bold', fontSize: 18, }}>Filtro por item: </Text>
        //                 <ScrollView
        //                     horizontal
        //                     showsHorizontalScrollIndicator={false}
        //                     style={style.listaItemScroll}
        //                 >
        //                     {listaItems?.map(item => (
        //                         <TouchableOpacity
        //                             style={[
        //                                 style.buttoItem,
        //                                 selectedItems.includes(item.id as string) ? style.selectedButtoItem : {}
        //                             ]}
        //                             key={item.id}
        //                             activeOpacity={0.6}
        //                             onPress={() => handleSelectItem(item.id as string)}
        //                         >
        //                             <Image source={{ uri: item.urlIcone }} style={{ width: 40, height: 40 }} />
        //                             <Text style={style.buttoItemText}>{item.nome}</Text>
        //                         </TouchableOpacity>
        //                     ))}
        //                 </ScrollView>
        //                 <View style={style.divider} />
        //             </View>
        //         </View>

        //         {listaPonto?.map(ponto => {
        //             <Text>{ponto.nome}</Text>
        //         })}

        //         <View style={style.viewMap}>
        //             {initialPosition[0] !== 0 && (
        //                 <MapView
        //                     loadingEnabled={initialPosition[0] === 0}
        //                     style={style.mapMarker}
        //                     initialRegion={{
        //                         latitude: initialPosition[0],
        //                         longitude: initialPosition[1],
        //                         latitudeDelta: 0.024,
        //                         longitudeDelta: 0.024
        //                     }}
        //                 >

        //                 </MapView>
        //             )}
        //         </View>
        //     </ScrollView>
        // </View>
    )
}

export default PontosColetas;