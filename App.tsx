import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>2CCR</Text>
      <Text style={styles.subtitulo}>Curso de React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#ff0000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitulo: {
    color: '#000000',
    fontSize: 16
  }
});
 
 