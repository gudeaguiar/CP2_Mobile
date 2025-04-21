import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native';

export default function DenunciaScreen() {
  const [tipo, setTipo] = useState('');
  const [token, setToken] = useState<string | null>(null);

  const gerarToken = async () => {
    try {
      const response = await fetch('https://www.random.org/integers/?num=1&min=10000&max=99999&col=1&base=10&format=plain&rnd=new');
      const text = await response.text();
      setToken(text.trim());
    } catch (error) {
      setToken('Erro ao gerar token');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de denúncia:</Text>
      <Picker selectedValue={tipo} onValueChange={itemValue => setTipo(itemValue)} style={styles.picker}>
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Violência Doméstica" value="violencia" />
        <Picker.Item label="Racismo" value="racismo" />
        <Picker.Item label="Abuso infantil" value="abuso" />
        <Picker.Item label="Assédio" value="assedio" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={gerarToken}>
        <Text style={styles.buttonText}>Gerar Token</Text>
      </TouchableOpacity>

      {token && <Text style={styles.token}>Token gerado: {token}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  picker: { backgroundColor: '#eee', marginBottom: 20 },
  button: { backgroundColor: '#4E9F3D', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center' },
  token: { marginTop: 20, fontSize: 16, fontWeight: 'bold' }
});
