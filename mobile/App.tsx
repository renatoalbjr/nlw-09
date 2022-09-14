import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps{
  title?: string
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity> 
      <Text>
        {props.title ? props.title : "NULL"}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Button title='T1'/>
      <Button title='T2'/>
      <Button />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
