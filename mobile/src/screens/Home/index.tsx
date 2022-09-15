import { Image, View, FlatList} from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import Heading from '../../components/Heading';
import {GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';


export function Home() {
  let renderItem = ({item}: any) => <GameCard data={item}/>
  return (
    <View style={styles.container}>
        <Image source={logoImg} />
        <Heading style={styles.heading} title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..."/>
        <FlatList 
            data={GAMES} 
            renderItem={renderItem} 
            contentContainerStyle={styles.flatList} 
            keyExtractor={item => item.id} 
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  );
}