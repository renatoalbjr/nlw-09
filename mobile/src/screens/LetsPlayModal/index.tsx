import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import checkCircle from '../../assets/CheckCircle.png';
import X from '../../assets/X.png';
import Heading from '../../components/Heading';
import { RootStackParamList } from '../RootStackParamsList';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'LetsPlayModal'>

export function LetsPlayModal({route, navigation}: Props) {
    const [discord, setDiscord] = useState<string>("");

    useEffect(() => {
        fetch(`http://192.168.1.29:3333/ads/${route.params.adId}/discord`)
            .then(res => res.json())
            .then(({discord}) => {
                setDiscord(discord)
            })
    }, [])

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Image source={checkCircle} resizeMode='contain' style={{height: 64, marginBottom: 24}} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', top: 16, right: 16}}>
                <Image source={X} resizeMode='contain' style={{height: 20}} />
            </TouchableOpacity>
            <Heading subtitle='Agora é só começar a jogar!' title='Let’s play!' style={{justifyContent: 'center', alignItems: 'center', marginBottom: 24}}/>
            <View style={styles.footer}>
                <Text style={styles.add}>Adicione no Discord</Text>
                <View style={styles.discordContainer}>
                    <Text selectable style={styles.discordHandle}>{discord}</Text>
                </View>
            </View>
        </View>
    </View>
  );
}