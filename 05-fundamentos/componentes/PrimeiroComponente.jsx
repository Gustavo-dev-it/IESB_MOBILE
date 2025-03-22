import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// URLs das imagens dos heróis
const heroImages = {
  ironMan: 'https://i.pinimg.com/236x/c2/a0/33/c2a0337b4f31d857df60bcada1f5dd50.jpg',  // Imagem do Homem de Ferro
  spiderMan: 'https://i.pinimg.com/474x/ed/f4/18/edf418e1f5e1349904c3ceabc03eb0c8.jpg',  // Imagem do Homem-Aranha
  captainAmerica: 'https://i.pinimg.com/236x/6d/be/64/6dbe64f11645117a5b345e2e3cebaf55.jpg',  // Imagem do Capitão América
  hulk: 'https://i.pinimg.com/474x/3c/d6/38/3cd6382eae26a2df79472a07dd360da1.jpg',  // Imagem do Hulk
};

const MarvelInfo = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bem-vindo ao Universo Marvel!</Text>

      <Text style={styles.description}>
        A Marvel Comics, fundada em 1939, é uma das maiores editoras de quadrinhos do mundo e é conhecida por criar uma série de super-heróis icônicos.
        Seus personagens são famosos por suas histórias envolventes, poderes extraordinários e complexidade emocional.
      </Text>

      <Text style={styles.subHeader}>Heróis Icônicos</Text>

      {/* Homem de Ferro */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: heroImages.ironMan }}
          style={styles.heroImage}
          resizeMode="stretch" // Exibe a imagem no tamanho real, ajustando ao espaço disponível
        />
        <Text style={styles.heroName}>Homem de Ferro</Text>
        <Text style={styles.heroDescription}>
          O Homem de Ferro, também conhecido como Tony Stark, é um bilionário inventor que usa uma armadura de alta tecnologia para combater o crime.
        </Text>
      </View>

      {/* Homem-Aranha */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: heroImages.spiderMan }}
          style={styles.heroImage}
          resizeMode="stretch"
        />
        <Text style={styles.heroName}>Homem-Aranha</Text>
        <Text style={styles.heroDescription}>
          Peter Parker, após ser mordido por uma aranha radioativa, ganha habilidades sobre-humanas, como força, agilidade e o famoso "sentido aranha".
        </Text>
      </View>

      {/* Capitão América */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: heroImages.captainAmerica }}
          style={styles.heroImage}
          resizeMode="stretch"
        />
        <Text style={styles.heroName}>Capitão América</Text>
        <Text style={styles.heroDescription}>
          Steve Rogers foi transformado pelo soro do super soldado, tornando-se o Capitão América, um símbolo de coragem e resistência durante a Segunda Guerra Mundial.
        </Text>
      </View>

      {/* Hulk */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: heroImages.hulk }}
          style={styles.heroImage}
          resizeMode="stretch"
        />
        <Text style={styles.heroName}>Hulk</Text>
        <Text style={styles.heroDescription}>
          Bruce Banner se transforma no Hulk quando fica irritado, ganhando força imensa e resistência. Ele é um dos heróis mais poderosos da Marvel.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#c0392b',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#34495e',
  },
  subHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#c0392b',
  },
  heroContainer: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: '60%',  // Ajusta a imagem para preencher a largura disponível
    height: 300,    // Tamanho fixo para a altura
    borderRadius: 10,
    marginBottom: 10,
  },
  heroName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2980b9',
  },
  heroDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    paddingHorizontal: 15,
  },
});

export default MarvelInfo;
