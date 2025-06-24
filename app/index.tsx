import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';



export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNavigate = () => {
    router.push({
      pathname: '/datails',
      params: { name, age },
    });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" onChangeText={setName} value={name} />
      <TextInput style={styles.input} placeholder="Idade" onChangeText={setAge} value={age} keyboardType="numeric" />

      <Pressable onPress={handleNavigate}>
        <Text>Enviar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 4 }
});
