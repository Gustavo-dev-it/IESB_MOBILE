import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ReceitaScreen = ({ route }) => {
  const { receita } = route.params;  // Pegando os dados passados via parâmetros
  
  // Adicionando uma verificação para garantir que 'receita' seja válido
  if (!receita || !receita.ingredientes || !receita.modoPreparo) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Dados da receita não encontrados.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <Text style={styles.recipeName}>{receita.nome}</Text>
      <Text style={styles.details}>Tempo de preparo: {receita.tempoPreparo}</Text>
      <Text style={styles.details}>Porções: {receita.porcoes}</Text>
      
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <View style={styles.listContainer}>
        {receita.ingredientes.map((ingrediente, index) => (
          <Text key={index} style={styles.listItem}>{ingrediente}</Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
      <View style={styles.listContainer}>
        {receita.modoPreparo.map((passo, index) => (
          <Text key={index} style={styles.listItem}>{passo}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  listContainer: {
    marginVertical: 10,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ReceitaScreen;
