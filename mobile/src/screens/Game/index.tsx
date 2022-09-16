import React, { useEffect, useState } from 'react';
import { FlatList, Image, ListRenderItem, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Ad, AdCard } from '../../components/AdCard';
import Heading from '../../components/Heading';
import { RootStackParamList } from '../RootStackParamsList';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Game'>

export function GameHeaderTitle(props: any) {
    return (
        <View style={styles.headerTitle}>
            <Image source={logoImg} resizeMode='contain' style={{height: 40}} />
        </View>
    )
}

export function Game({route, navigation}: Props) {
  const {bannerUrl, gameId, title} = route.params
  const [ads, setAds] = useState<Ad[]>([])

  useEffect(() => {
    fetch(`http://192.168.1.29:3333/games/${gameId}/ads`)
        .then(response => response.json())
        .then(adsResponse => {
            setAds(adsResponse)
        })
        .catch(e => {
            console.log(e)
        })
  }, [])

  let renderItem: ListRenderItem<Ad> = ({item}) => <AdCard buttonCallback={() => {navigation.navigate('LetsPlayModal', {adId: item.id})}} data={item} />

  return (
    <View style={styles.container}>
        <Image source={{uri: bannerUrl}} resizeMode='cover' style={styles.heroImg} />
        <Heading title={title} subtitle="Conecte-se e comece a jogar!" style={{marginTop: 24, marginLeft: 32}} />
        <FlatList
            data={ads}
            renderItem={renderItem}
            contentContainerStyle={styles.flatList} 
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  );
}