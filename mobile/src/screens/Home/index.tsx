import { FlatList, Image, ListRenderItem } from 'react-native';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import Heading from '../../components/Heading';

export interface IGame {
  id: string,
  title: string,
  _count: {
    ads: number,
  },
  bannerUrl: string
}

export function Home(){
  const navigation = useNavigation<NativeStackNavigationProp<ReactNavigation.RootParamList, 'Home'>>()
  const [games, setGames] = useState<IGame[]>([])

  useEffect(() => {
    fetch('http://192.168.1.29:3333/games')
      .then(response => response.json())
      .then(games => {
        setGames(games)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  let renderItem: ListRenderItem<IGame> = ({item}) => <GameCard onPress={() => navigation.navigate('Game', {gameId: item.id, bannerUrl: item.bannerUrl, title: item.title})} data={item}/>

  return (
    <SafeAreaView style={styles.container}>
        <Image source={logoImg} />
        <Heading style={styles.heading} title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..."/>
        <FlatList 
            data={games} 
            renderItem={renderItem} 
            contentContainerStyle={styles.flatList} 
            keyExtractor={item => item.id} 
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </SafeAreaView>
  );
}