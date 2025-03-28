// componentes/SerieComponente.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SerieComponente({ dados }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: dados.capa }} style={styles.imagem} />
      <Text style={styles.titulo}>{dados.nome}</Text>
      <Text>Ano: {dados.ano}</Text>
      <Text>Diretor: {dados.diretor}</Text>
      <Text>Temporadas: {dados.temporadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});
