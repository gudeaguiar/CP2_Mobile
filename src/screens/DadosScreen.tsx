import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const DadosScreen = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch('https://www.ipea.gov.br/atlasviolencia/api/v1/valores-series-por-regioes/{serie_id}/{abrangencia}/{regioes}');
        const json = await response.json();
        setDados(json);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setCarregando(false);
      }
    };

    fetchDados();
  }, []);

  if (carregando) {
    return <ActivityIndicator size="large" color="#4E9F3D" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Taxa de Homicídios de Mulheres</Text>
      {/* Renderize os dados conforme necessário */}
      {dados && dados.map((item, index) => (
        <Text key={index} style={styles.dado}>
          Ano: {item.ano} - Taxa: {item.valor}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  dado: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DadosScreen;
