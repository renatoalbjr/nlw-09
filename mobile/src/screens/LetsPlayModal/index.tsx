import { AntDesign } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Heading from '../../components/Heading';

import { THEME } from '../../theme';
import { styles } from './styles';


export function LetsPlayModal() {
    const [discord, setDiscord] = useState<string>("");
    const navigation = useNavigation()

    const route = useRoute<RouteProp<ReactNavigation.RootParamList, 'LetsPlayModal'>>()

    useEffect(() => {
        fetch(`http://192.168.1.29:3333/ads/${route.params.adId}/discord`)
            .then(res => res.json())
            .then(({discord}) => {
                setDiscord(discord)
            })
    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <AntDesign name='checkcircleo' size={64} color={THEME.COLORS.SUCCESS} style={{marginBottom: 24}} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', top: 16, right: 16}}>
                <AntDesign name='close' size={20} color={THEME.COLORS.CAPTION_500} />
            </TouchableOpacity>
            <Heading subtitle='Agora é só começar a jogar!' title='Let’s play!' style={{justifyContent: 'center', alignItems: 'center', marginBottom: 24}}/>
            <View style={styles.footer}>
                <Text style={styles.add}>Adicione no Discord</Text>
                <View style={styles.discordContainer}>
                    <Text selectable style={styles.discordHandle}>{discord}</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
}