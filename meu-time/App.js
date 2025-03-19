import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  // Função alerta
  const alerta = () => {
    alert("Gol do Jogador/Time!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      {/* Nome do Jogador */}
      <Text style={styles.jogadorNome}>Cristiano Ronaldo</Text>

      {/* Informações do Jogador */}
      <Text style={styles.informacoes}>Posição: Atacante</Text>
      <Text style={styles.informacoes}>Clube: Al Nassr</Text>
      <Text style={styles.informacoes}>Número: 7</Text>
      <Text style={styles.informacoes}>Nacionalidade: Portuguesa</Text>

      {/* Imagens */}
      <Image source={{ uri: 'https://i.pinimg.com/474x/e2/07/cc/e207cc58c891798d5ff308b38ebc59cc.jpg' }} style={styles.imagem} />
      <Image source={{ uri: 'https://i.pinimg.com/236x/5f/9c/fb/5f9cfb5435cc38b42750e5859be6c7eb.jpg' }} style={styles.imagem} />
      <Image source={{ uri: 'https://i.pinimg.com/474x/ab/0a/2e/ab0a2e38edcae23641c0e14f0e101244.jpg' }} style={styles.imagem} />
      <Image source={{ uri: 'https://i.pinimg.com/236x/45/af/88/45af8858885992d5fff490d62b5e53a4.jpg' }} style={styles.imagem} />
      <Image source={{ uri: 'https://i.pinimg.com/236x/98/6c/81/986c810153214fcc52f11e0570157575.jpg' }} style={styles.imagem} />

      {/* Botão */}
      <Button title="GOL" onPress={alerta} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Garante que o conteúdo ocupe o espaço necessário
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  jogadorNome: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  informacoes: {
    fontSize: 18,
    marginVertical: 5,
  },
  imagem: {
    width: 200,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
});
