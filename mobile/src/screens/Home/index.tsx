import { Image, ImageBackground, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import Heading from '../../components/Heading';
import { IGame, GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';

// let RenderGame = ({id, name, ads, cover} : IGame) => {
//     return (
//         <TouchableOpacity>
//             <View style={styles.gameContainer}>
//                 <Image source={cover} />
//                 <Text style={styles.gameTitle}>{name}</Text>
//                 <Text style={styles.gameAds}>{ads} anúncios</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }


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
        {/* <GameCard data={GAMES[0]} /> */}
    </View>
  );
}