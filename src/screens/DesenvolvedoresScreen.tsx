import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const desenvolvedores = [
  {
    nome: 'Gustavo de Aguiar Lima Silva',
    rm: '557707',
    imagem: require('../../assets/gu_teste.jpg'), // Substitua pelo caminho correto da imagem
  },
  {
    nome: 'Nome do Segundo Integrante',
    rm: '*****',
    imagem: require('../assets/integrante2.png'),
  },
  {
    nome: 'Nome do Terceiro Integrante',
    rm: '*****',
    imagem: require('../assets/integrante3.png'),
  },
];

const DesenvolvedoresScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>

      {desenvolvedores.map((dev, index) => (
        <View key={index} style={styles.card}>
          <Image source={dev.imagem} style={styles.image} />
          <Text style={styles.nome}>{dev.nome}</Text>
          <Text style={styles.rm}>RM{dev.rm}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0047FF',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
  },
  rm: {
    fontSize: 14,
    color: '#000',
  },
});

export default DesenvolvedoresScreen;
