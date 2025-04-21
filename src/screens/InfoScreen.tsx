import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function InfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Direitos das Vítimas</Text>
      <Text style={styles.text}>• Direito ao anonimato.</Text>
      <Text style={styles.text}>• Direito à proteção durante e após a denúncia.</Text>
      <Text style={styles.text}>• Direito ao acompanhamento psicológico.</Text>
      <Text style={styles.text}>• Direito à informação clara sobre o processo.</Text>
      <Text style={styles.text}>• Direito à assistência jurídica gratuita, se necessário.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 }
});
