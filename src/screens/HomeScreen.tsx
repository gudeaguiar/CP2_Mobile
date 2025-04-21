import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Denúncia')}
      >
        <Text style={styles.buttonText}>Denúncia Anônima</Text>
      </TouchableOpacity>

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Apoio')}>
          <Image source={require('../../assets/apoio.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Status')}>
          <Image source={require('../../assets/status.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Informações')}>
          <Image source={require('../../assets/info.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Desenvolvedores')}>
          <Image source={require('../../assets/devs.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  logo: { width: 200, height: 60, marginBottom: 40 },
  button: { backgroundColor: '#4E9F3D', padding: 15, borderRadius: 10, marginBottom: 30 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  iconRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  icon: { width: 60, height: 60, marginHorizontal: 10 }
});
