import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function ApoioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONGs de Apoio:</Text>
      <Text style={styles.text}>• Instituto Maria da Penha</Text>
      <Text style={styles.text}>• Promundo</Text>
      <Text style={styles.text}>• Instituto Patrícia Galvão</Text>
      <Text style={styles.text}>• Plan International</Text>

      <Text style={[styles.title, { marginTop: 30 }]}>Telefones Úteis:</Text>

      <TouchableOpacity onPress={() => Linking.openURL('tel:100')}>
        <Text style={styles.link}>• Disque 100</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('tel:180')}>
        <Text style={styles.link}>• Disque 180</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5 },
  link: { fontSize: 16, marginBottom: 10, color: '#4E9F3D', textDecorationLine: 'underline' }
});
