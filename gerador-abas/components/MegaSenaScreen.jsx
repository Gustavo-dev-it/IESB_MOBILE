import React, { useState, useCallback } from "react";
import { Button, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";

// Função para gerar um número aleatório entre 1 e 60
const gerarNumero = () => Math.floor(Math.random() * 60) + 1;

// Função para gerar um jogo de 6 números aleatórios
const gerarJogoMegaSena = () => {
  const novoJogo = new Set();
  while (novoJogo.size < 6) {
    novoJogo.add(gerarNumero());
  }
  return [...novoJogo];
};

const MegaSena = ({ jogosMegaSena, setJogosMegaSena }) => {
  const [jogoGerado, setJogoGerado] = useState([]);

  // Função de callback para gerar o jogo e atualizar o estado
  const gerarJogo = useCallback(() => {
    const novoJogo = gerarJogoMegaSena();
    setJogoGerado(novoJogo);
    setJogosMegaSena((prevJogos) => [...prevJogos, novoJogo]);
  }, [setJogosMegaSena]);

  return (
    <>
      <Button title="Gerar Jogo" onPress={gerarJogo} />
      <Text>Jogo Gerado: {jogoGerado.join(", ")}</Text>
      <FlatList
        data={jogosMegaSena}
        renderItem={({ item, index }) => (
          <Card style={{ marginBottom: 10 }}>
            <Card.Title title={`Jogo ${index + 1}`} />
            <Card.Content>
              <Text>{item.join(", ")}</Text>
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default MegaSena;
