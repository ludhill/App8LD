import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Datails() {
  const { name, age } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {name}</Text>
      <Text style={styles.text}>Idade: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center'  },
  text: { fontSize: 18, marginBottom: 10 }
});

